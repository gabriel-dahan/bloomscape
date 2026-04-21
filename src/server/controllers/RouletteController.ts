import { BackendMethod, remult, SqlDatabase } from 'remult'
import { DailyRouletteState } from '@/shared/economy/DailyRouletteState'
import { User } from '@/shared/user/User'
import { GlobalBank, GLOBAL_BANK_ID } from '@/shared/economy/GlobalBank'
import { UserFlower } from '@/shared/flowers/UserFlower'
import { FlowerSpecies } from '@/shared/flowers/FlowerSpecies'
import { RoulettePrize } from '@/shared/economy/RoulettePrize'
import { CasinoGameResult } from '@/shared/economy/CasinoGameResult'
import { AchievementService } from '../services/AchievementService'

export function getTodayUtcString() {
  return new Date().toISOString().substring(0, 10)
}

export class RouletteController {

  @BackendMethod({ allowed: true })
  static async getPrizesConfig() {
    return await remult.repo(RoulettePrize).find({
      orderBy: { probability: 'asc' }
    })
  }

  @BackendMethod({ allowed: true })
  static async getRecentCasinoResults(game: string) {
    if (!remult.user) return []
    return await remult.repo(CasinoGameResult).find({
      where: { 
        game,
        userId: remult.user.id
      },
      orderBy: { createdAt: 'desc' },
      limit: 15
    })
  }

  @BackendMethod({ allowed: true })
  static async getDailyState() {
    const today = getTodayUtcString()
    const stateRepo = remult.repo(DailyRouletteState)
    const prizeRepo = remult.repo(RoulettePrize)
    
    let state = await stateRepo.findId(today)
    const allPrizes = await prizeRepo.find()

    if (!state) {
      const initialPrizes: Record<string, number> = {}
      for (const p of allPrizes) {
        if (p.dailyLimit > 0) {
          initialPrizes[p.id] = p.dailyLimit
        }
      }
      state = await stateRepo.insert({ id: today, prizesRemaining: initialPrizes })
    } else {
      // Sync missing prizes if any (robustness)
      let changed = false
      if (!state.prizesRemaining) {
        state.prizesRemaining = {}
        changed = true
      }
      for (const p of allPrizes) {
        if (p.dailyLimit > 0 && state.prizesRemaining[p.id] === undefined) {
          state.prizesRemaining[p.id] = p.dailyLimit
          changed = true
        }
      }
      if (changed) {
        try {
          await stateRepo.save(state)
        } catch (e) {
          console.error("[Roulette] Non-admin sync skip:", e)
        }
      }
    }
    
    return stateRepo.toJson(state)
  }

  @BackendMethod({ allowed: true, transactional: true })
  static async playPrizesRoulette() {
    if (!remult.user) throw new Error("Not logged in")
    const today = getTodayUtcString()
    
    const userRepo = remult.repo(User)
    let currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error("User not found")

    // Check if free play is available
    let isFree = false
    if (currentUser.lastFreeRouletteDate !== today) {
      isFree = true
      currentUser.lastFreeRouletteDate = today
      currentUser.dailyRoulettePlays = 0 // Reset daily paid plays
    } else {
      if (currentUser.dailyRoulettePlays >= 5) {
        throw new Error("Maximum daily paid roulette plays reached")
      }
      if (currentUser.rouletteCoins < 1) {
        throw new Error("Insufficient Roulette Coins")
      }
      currentUser.rouletteCoins -= 1
      currentUser.dailyRoulettePlays += 1

      // Add to bank
      const bankRepo = remult.repo(GlobalBank)
      let bank = await bankRepo.findFirst()
      if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 100000, rubies: 0, rouletteCoins: 0 })
      bank.rouletteCoins += 1
      await bankRepo.save(bank)
    }

    // Get limits
    const stateRepo = remult.repo(DailyRouletteState)
    let state = await stateRepo.findId(today)
    if (!state) {
      state = await RouletteController.getDailyState()
    }

    const allPrizes = await remult.repo(RoulettePrize).find()

    // Increment pity counter
    currentUser.pityCounter = (currentUser.pityCounter || 0) + 1

    // Prepare valid prizes and normalize probabilities
    const validPrizes = []
    let totalProb = 0
    for (const p of allPrizes) {
      if (p.dailyLimit === -1 || (state.prizesRemaining[p.id] !== undefined && state.prizesRemaining[p.id] > 0)) {
        let currentProb = p.probability
        if (p.type === 'FLOWER' && currentUser.pityCounter >= 100) {
          currentProb *= 10
        }
        validPrizes.push({ prize: p, checkProb: currentProb })
        totalProb += currentProb
      }
    }

    const rand = Math.random() * totalProb
    let cumulative = 0
    let wonPrize = validPrizes[0].prize

    for (const vp of validPrizes) {
      cumulative += vp.checkProb
      if (rand <= cumulative) {
        wonPrize = vp.prize
        break
      }
    }

    // Increment tracking
    currentUser.totalRoulettePlays = (currentUser.totalRoulettePlays || 0) + 1

    // Apply prize
    if (wonPrize.dailyLimit > 0) {
      state.prizesRemaining[wonPrize.id] -= 1
      await stateRepo.save(state)
    }

    if (wonPrize.type === 'SAP') {
      currentUser.sap += wonPrize.amount
      if (currentUser.sap >= 10000) {
        await AchievementService.grantAchievement(currentUser.id, 'rich_planter')
      }
    } else if (wonPrize.type === 'RUBY') {
      currentUser.rubies += wonPrize.amount
    } else if (wonPrize.type === 'FLOWER') {
      // Reset pity on flower win
      currentUser.pityCounter = 0
      
      const flowerRepo = remult.repo(UserFlower)
      const speciesRepo = remult.repo(FlowerSpecies)
      const species = await speciesRepo.findId(wonPrize.flowerSpeciesId!)
      
      if (species) {
        await flowerRepo.insert({
          ownerId: currentUser.id,
          species: species,
          status: FlowerStatus.SEED,
          quality: wonPrize.flowerQuality || 10,
          isShiny: Math.random() < 0.05
        })
      }
    }

    await userRepo.save(currentUser)

    // Log result
    const resultRepo = remult.repo(CasinoGameResult)
    await resultRepo.insert({
      userId: currentUser.id,
      game: 'DAILY_ROULETTE',
      prizeId: wonPrize.id,
      prizeName: wonPrize.name,
      prizeType: wonPrize.type,
      prizeAmount: wonPrize.amount,
      createdAt: new Date()
    })

    // Achievements
    await AchievementService.grantAchievement(currentUser.id, 'casino_player')

    return {
      success: true,
      prize: wonPrize,
      pityCounter: currentUser.pityCounter
    }
  }

  @BackendMethod({ allowed: true, transactional: true })
  static async playBlackAndRed(betAmount: number, betColor: 'red' | 'black') {
    if (!remult.user) throw new Error("Not logged in")
    if (betAmount <= 0) throw new Error("Invalid bet amount")
    if (!Number.isInteger(betAmount)) throw new Error("Bet amount must be an integer")
    if (betAmount > 10) throw new Error("Maximum bet is 10 coins")

    const userRepo = remult.repo(User)
    let currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error("User not found")

    if (currentUser.sap < betAmount) throw new Error("Insufficient Sap")

    const winningColor = Math.random() < 0.5 ? 'red' : 'black'
    const won = winningColor === betColor
    
    if (won) {
      currentUser.sap += betAmount
    } else {
      currentUser.sap -= betAmount
    }
    
    await userRepo.save(currentUser)

    if (!won) {
      const bankRepo = remult.repo(GlobalBank)
      let bank = await bankRepo.findFirst()
      if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 100000, rubies: 0, rouletteCoins: 0 })
      bank.sap += betAmount
      await bankRepo.save(bank)
    }

    const resultRepo = remult.repo(CasinoGameResult)
    await resultRepo.insert({
      userId: currentUser.id,
      game: 'BLACK_AND_RED',
      prizeName: won ? 'WIN' : 'LOSS',
      prizeType: 'SAP',
      prizeAmount: won ? betAmount : -betAmount,
      createdAt: new Date()
    })

    await AchievementService.grantAchievement(currentUser.id, 'casino_player')

    return {
      success: true,
      won,
      winningColor,
      newSap: currentUser.sap
    }
  }

  @BackendMethod({ allowed: true, transactional: true })
  static async buyRouletteCoins(amount: number) {
    if (!remult.user) throw new Error("Not logged in")
    if (amount <= 0) throw new Error("Invalid amount")
    if (!Number.isInteger(amount)) throw new Error("Amount must be an integer")

    const cost = amount * 10
    
    const userRepo = remult.repo(User)
    let currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error("User not found")

    if (currentUser.sap < cost) throw new Error("Insufficient Sap")

    currentUser.sap -= cost
    currentUser.rouletteCoins += amount
    await userRepo.save(currentUser)

    const bankRepo = remult.repo(GlobalBank)
    let bank = await bankRepo.findFirst()
    if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 100000, rubies: 0, rouletteCoins: 0 })
    bank.sap += cost
    await bankRepo.save(bank)

    return { success: true, newSap: currentUser.sap, newCoins: currentUser.rouletteCoins }
  }
}
