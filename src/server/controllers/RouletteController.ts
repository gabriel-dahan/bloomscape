import { BackendMethod, remult } from 'remult'
import { DailyRouletteState } from '@/shared/economy/DailyRouletteState'
import { User } from '@/shared/user/User'
import { GlobalBank, GLOBAL_BANK_ID } from '@/shared/economy/GlobalBank'
import { UserFlower } from '@/shared/flowers/UserFlower'
import { FlowerSpecies } from '@/shared/flowers/FlowerSpecies'
import { RoulettePrize } from '@/shared/economy/RoulettePrize'
import { CasinoGameResult } from '@/shared/economy/CasinoGameResult'

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
    if (!state) {
      const allPrizes = await prizeRepo.find()
      const initialPrizes: Record<string, number> = {}
      for (const p of allPrizes) {
        if (p.dailyLimit > 0) {
          initialPrizes[p.id] = p.dailyLimit
        }
      }
      state = await stateRepo.insert({ id: today, prizesRemaining: initialPrizes })
    }
    
    return state
  }

  @BackendMethod({ allowed: true })
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

    // Apply prize
    if (wonPrize.dailyLimit > 0) {
      state.prizesRemaining[wonPrize.id] -= 1
      await stateRepo.save(state)
    }

    if (wonPrize.type === 'SAP') {
      currentUser.sap += wonPrize.amount
    } else if (wonPrize.type === 'RUBY') {
      currentUser.rubies += wonPrize.amount
    } else if (wonPrize.type === 'TOKEN') {
      currentUser.rouletteCoins += wonPrize.amount
    } else if (wonPrize.type === 'FLOWER') {
      currentUser.pityCounter = 0 // Reset pity
      const speciesRepo = remult.repo(FlowerSpecies)
      const species = await speciesRepo.findFirst({ slugName: wonPrize.value })
      if (species) {
        const ufRepo = remult.repo(UserFlower)
        await ufRepo.insert({
          ownerId: currentUser.id,
          speciesId: species.id
        })
      }
    }

    await userRepo.save(currentUser)

    return {
      success: true,
      prizeId: wonPrize.id,
      prizeType: wonPrize.type,
      prizeAmount: wonPrize.amount,
      prizeValue: wonPrize.value,
      isFree: isFree,
      userBalances: {
        sap: currentUser.sap,
        rubies: currentUser.rubies,
        rouletteCoins: currentUser.rouletteCoins,
        dailyPlays: currentUser.dailyRoulettePlays
      }
    }
  }

  @BackendMethod({ allowed: true })
  static async playBlackAndRed(betAmount: number, color: 'red' | 'black') {
    if (!remult.user) throw new Error("Not logged in")
    if (betAmount <= 0) throw new Error("Invalid bet amount")
    if (!Number.isInteger(betAmount)) throw new Error("Bet amount must be an integer")
    if (betAmount > 10) throw new Error("Maximum bet is 10 coins")
    if (color !== 'red' && color !== 'black') throw new Error("Invalid color")

    const userRepo = remult.repo(User)
    let currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error("User not found")

    if (currentUser.rouletteCoins < betAmount) {
      throw new Error("Insufficient Roulette Coins")
    }

    // Determine result (50/50 chance to be red or black)
    const isRed = Math.random() < 0.5
    const won = (isRed && color === 'red') || (!isRed && color === 'black')
    const resultColor = isRed ? 'red' : 'black'

    const bankRepo = remult.repo(GlobalBank)
    let bank = await bankRepo.findFirst()
    if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 100000, rubies: 0, rouletteCoins: 0 })

    if (won) {
      currentUser.rouletteCoins += betAmount
      bank.rouletteCoins -= betAmount
    } else {
      currentUser.rouletteCoins -= betAmount
      bank.rouletteCoins += betAmount
    }

    const resultRepo = remult.repo(CasinoGameResult)
    await resultRepo.insert({
      userId: currentUser.id,
      userTag: currentUser.tag,
      game: 'BlackAndRed',
      betAmount: betAmount,
      winAmount: won ? betAmount * 2 : 0,
      won: won,
      resultPayload: resultColor
    })

    await userRepo.save(currentUser)
    await bankRepo.save(bank)

    return {
      won,
      resultColor,
      newBalance: currentUser.rouletteCoins
    }
  }

  @BackendMethod({ allowed: true })
  static async buyRouletteCoins(coinAmount: number) {
    if (!remult.user) throw new Error("Not logged in")
    if (coinAmount <= 0) throw new Error("Invalid amount")
    if (!Number.isInteger(coinAmount)) throw new Error("Amount must be an integer")

    const rubyCost = coinAmount * 10
    
    const userRepo = remult.repo(User)
    let currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error("User not found")

    if (currentUser.rubies < rubyCost) {
      throw new Error("Insufficient Rubies")
    }

    currentUser.rubies -= rubyCost
    currentUser.rouletteCoins += coinAmount

    const bankRepo = remult.repo(GlobalBank)
    let bank = await bankRepo.findFirst()
    if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 100000, rubies: 0, rouletteCoins: 0 })

    bank.rubies += rubyCost
    await bankRepo.save(bank)
    await userRepo.save(currentUser)

    return {
      success: true,
      newRubyBalance: currentUser.rubies,
      newCoinBalance: currentUser.rouletteCoins
    }
  }
}
