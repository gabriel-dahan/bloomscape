import {
  Achievement,
  DiscoverySource,
  FlowerSpecies,
  FlowerStatus,
  FlowerWaterConsumption,
  Island,
  Tile,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
  MarketHistory,
  WATER_CONSUMPTION_AMOUNTS,
  GlobalBank,
  GLOBAL_BANK_ID,
  PatchNote
} from '@/shared'
import type { FlowerDTO, FlowerAttributes, PreferredSeasons } from '@/shared'
import { BackendMethod, remult, SqlDatabase } from 'remult'
import { PRICES } from '../ext'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'
import { sanitizeUser } from '@/shared/user/User'

import { getLevelFromXp } from '@/shared/leveling'
import { AttributesLogic } from '@/shared/attributesLogic'
import { LoggerService } from '../services/LoggerService'
import { LogSource } from '@/shared/analytics/SystemLog'

// Achievement imports
import { AchievementService } from '../services/AchievementService'

export class GameController {
  @BackendMethod({ allowed: true })
  static async getIslandDetails(ownerId: string) {
    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    if (remult.user?.banned) throw new Error('You are banned and cannot access game features.')

    const island = await islandRepo.findFirst({ ownerId })

    if (!island) return null

    const tiles = await tileRepo.find({
      where: { islandId: island.id },
    })

    const flowerIds = tiles.map((t) => t.flowerId).filter((id) => !!id)

    const flowers = await flowerRepo.find({
      where: { id: { $in: flowerIds } },
      include: { species: true },
    })

    for (const flower of flowers) {
      await GameController.updateFlowerStatus(flower, flowers)
    }

    const enrichedTiles = tiles.map((t) => {
      const flower = flowers.find((f) => f.id === t.flowerId)
      return { ...t, flower }
    })

    return { island, tiles: enrichedTiles }
  }

  @BackendMethod({ allowed: true })
  static async getUserBalance(tag: string) {
    const userRepo = remult.repo(User)
    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw new Error('User could not be found.')

    return user.sap
  }

  @BackendMethod({ allowed: true })
  static async getMonthScore(islandId: string) {
    const islandRepo = remult.repo(Island)
    const island = await islandRepo.findId(islandId)
    console.log('Bla blah blah', island)

    if (!island) throw new Error('Island not found')

    return island.monthScore
  }

  @BackendMethod({ allowed: true })
  static async getRequiredXpForNextLevel() {
    if (!remult.user) throw new Error('Not authenticated')
    const XP_BASE = 500
    const XP_EXPONENT = 1.5
    const user = remult.user
    return Math.floor(XP_BASE * Math.pow(user.level, XP_EXPONENT))
  }

  @BackendMethod({ allowed: 'admin' })
  static async addXpToUser(userId: string, amount: number): Promise<any> {
    const userRepo = remult.repo(User)
    const user = await userRepo.findId(userId)
    if (!user) return false

    user.xp += amount

    const oldLevel = user.level
    const newLevel = getLevelFromXp(user.xp)

    if (newLevel > oldLevel) {
      user.level = newLevel
      const { ServerEvents } = await import('../server-events')
      const levelsGained = newLevel - oldLevel
      const message =
        levelsGained > 1
          ? `Incredible! You jumped ${levelsGained} levels to Level ${newLevel}!`
          : `Level Up! You are now Level ${newLevel}!`

      ServerEvents.notifyUser(userId, 'Level Up!', message, 'success')
    }

    if (newLevel >= 10) {
      await AchievementService.grantAchievement(userId, 'master_gardener')
    }

    if (user.sap >= 10000) {
      await AchievementService.grantAchievement(userId, 'rich_planter')
    }

    await userRepo.save(user)
    return {
      message: `Successfuly gave ${amount} XP to user ${user.tag}`,
      val: newLevel > oldLevel,
    }
  }

  @BackendMethod({ allowed: true })
  static async getUserInventory() {
    if (!remult.user) throw new Error('Not authenticated')
    if (remult.user.banned) throw new Error('Access denied')

    const flowerRepo = remult.repo(UserFlower)
    const itemRepo = remult.repo(UserItem)

    const flowers = await flowerRepo.find({
      where: {
        ownerId: remult.user.id,
        status: FlowerStatus.SEED,
        isListed: false,
      },
      include: { species: true },
    })

    const items = await itemRepo.find({
      where: { userId: remult.user.id },
      include: { definition: true },
    })

    return { flowers, items }
  }

  @BackendMethod({ allowed: true })
  static async getFloradex() {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')
    if (user.banned) throw new Error('Access denied')

    const speciesRepo = remult.repo(FlowerSpecies)
    const discoveryRepo = remult.repo(FlowerDiscovery)

    const allSpecies = await speciesRepo.find({
      orderBy: { rarity: 'asc', name: 'asc' },
      include: { family: true },
    })

    const myDiscoveries = await discoveryRepo.find({
      where: { userId: user.id },
    })

    const floradexData = allSpecies.map((s) => {
      const discovery = myDiscoveries.find((d) => d.speciesId === s.id)
      return {
        ...s,
        discovered: !!discovery,
        discoveryDate: discovery?.discoveredAt,
        discoverySource: discovery?.source,
        initialQuality: discovery?.initialQuality,
        family: s.family ? { id: s.family.id, name: s.family.name, color: s.family.color } : undefined,
      }
    })

    return floradexData
  }

  static getFlowerAssetUrl(
    flowerSlugName: string,
    status: FlowerStatus = FlowerStatus.GROWING2,
    type: 'icon' | 'sprite' = 'icon',
  ) {
    return `/api/images/flowers/${flowerSlugName}/${status.toLowerCase()}/${type.toLowerCase()}`
  }

  @BackendMethod({ allowed: true })
  static async getTileData(x: number, z: number, islandId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ x, z }, { where: { islandId } })
    if (!tile) return null

    let flowerDTO: FlowerDTO | null = null

    if (tile.flowerId) {
      let flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })

      if (flower) {
        const allFlowers = await flowerRepo.find({ where: { ownerId: flower.ownerId } })

        flower = await GameController.updateFlowerStatus(flower, allFlowers)

        const activeStats = AttributesLogic.calculateStats(flower, allFlowers)
        flowerDTO = GameController.toFlowerDTO(flower, activeStats)
      }
    }

    return { tile, flower: flowerDTO }
  }

  static async updateFlowerStatus(
    flower: UserFlower,
    contextFlowers?: UserFlower[],
  ): Promise<UserFlower> {
    const defaultAttributes = flower.species?.attributes as FlowerAttributes | undefined
    const maxStatus = defaultAttributes?.maxStatus || FlowerStatus.GROWING2

    if (
      flower.status === FlowerStatus.SEED ||
      flower.status === maxStatus ||
      flower.status === FlowerStatus.WITHERED
    ) {
      return flower
    }

    if (!flower.plantedAt || !flower.species) {
      return flower
    }

    if (!flower.lastProcessedAt) {
      flower.lastProcessedAt = flower.plantedAt
    }

    const now = new Date()
    const elapsedSinceLast = (now.getTime() - flower.lastProcessedAt.getTime()) / 1000

    if (elapsedSinceLast <= 0) return flower

    let allFlowers = contextFlowers
    if (!allFlowers) {
      allFlowers = await remult.repo(UserFlower).find({ where: { ownerId: flower.ownerId } })
    }

    const stats = AttributesLogic.calculateStats(flower, allFlowers)
    const duration = flower.species.growthDuration / stats.growthSpeedMultiplier

    if (stats.growthSpeedMultiplier !== 1) {
      console.log(
        `[Attribute Effect] Flower ${flower.species.name} Growth Duration: Default ${flower.species.growthDuration}s -> Modified ${Math.floor(flower.species.growthDuration / stats.growthSpeedMultiplier)}s`,
      )
    }

    let timeToProcess = elapsedSinceLast
    let updated = false

    const waterConsumption =
      WATER_CONSUMPTION_AMOUNTS[flower.species.waterNeeds as FlowerWaterConsumption] || 15

    const FULL_BOUNDARIES = [
      FlowerStatus.SPROUT1,
      FlowerStatus.SPROUT2,
      FlowerStatus.GROWING1,
      FlowerStatus.GROWING2,
    ]

    const maxIndex = FULL_BOUNDARIES.indexOf(maxStatus as any)
    const validStages = FULL_BOUNDARIES.slice(
      0,
      maxIndex === -1 ? FULL_BOUNDARIES.length : maxIndex + 1,
    )

    const boundaries = validStages.map((status, index) => ({
      status,
      ratio: index / (validStages.length - 1 || 1),
    }))

    const CONTINUOUS_RATIO = 0.2
    const BOUNDARY_RATIO = 0.8

    while (timeToProcess > 0 && flower.waterLevel > 0) {
      const currentRatio = flower.growthSeconds / duration
      const nextBoundary = boundaries.find((b) => b.ratio > currentRatio)

      if (!nextBoundary) {
        flower.status = maxStatus
        updated = true
        break
      }

      const secondsToNextBoundary = nextBoundary.ratio * duration - flower.growthSeconds
      // Since boundaries may not be 0.25 spaced, calculate dynamic stageDuration
      const previousRatio = boundaries[boundaries.indexOf(nextBoundary) - 1]?.ratio || 0
      const stageDuration = duration * (nextBoundary.ratio - previousRatio) || duration * 0.25

      const continuousWaterPerSec = (waterConsumption * CONTINUOUS_RATIO) / stageDuration
      const maxSecondsWithWater =
        continuousWaterPerSec > 0 ? flower.waterLevel / continuousWaterPerSec : Infinity

      const timeStep = Math.min(timeToProcess, secondsToNextBoundary, maxSecondsWithWater)

      flower.growthSeconds += timeStep
      timeToProcess -= timeStep
      flower.waterLevel -= continuousWaterPerSec * timeStep

      if (Math.abs(flower.growthSeconds - nextBoundary.ratio * duration) < 0.001) {
        flower.waterLevel -= waterConsumption * BOUNDARY_RATIO
        flower.status = nextBoundary.status
      }

      if (flower.waterLevel < 0) flower.waterLevel = 0

      updated = true

      if (flower.status === maxStatus) break
    }

    if (flower.status !== maxStatus && flower.waterLevel <= 0) {
      flower.drySeconds += timeToProcess
      const defaultAttributes = flower.species?.attributes as FlowerAttributes | undefined
      // Default to 12h if not provided
      const maxDry = flower.species?.maxDrySeconds ?? 43200
      
      if (flower.drySeconds >= maxDry) {
        flower.status = FlowerStatus.WITHERED
        flower.growthSeconds = 0 // Reset growth upon death
      }
      updated = true
    } else if (flower.waterLevel > 0 && flower.drySeconds > 0) {
      flower.drySeconds = 0
      updated = true
    }

    flower.lastProcessedAt = now

    if (updated || elapsedSinceLast > 0) {
      await remult.repo(UserFlower).save(flower)
    }

    return flower
  }

  @BackendMethod({ allowed: true })
  static async getAvailableSeeds(): Promise<FlowerDTO[]> {
    if (!remult.user) return []

    const seeds = await remult.repo(UserFlower).find({
      where: {
        ownerId: remult.user.id,
        status: FlowerStatus.SEED,
        isListed: false,
      },
      include: { species: true },
    })

    return seeds.map((s) => GameController.toFlowerDTO(s))
  }

  @BackendMethod({ allowed: true })
  static async plantSeed(tileId: string, flowerId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    if (remult.user.banned) throw new Error('Banned users cannot plant seeds')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findId(tileId, { include: { island: true } })
    if (!tile) throw new Error('Tile not found')
    if (tile.island!.ownerId !== remult.user.id) throw new Error('Not your land')
    if (tile.flowerId) throw new Error('Tile is already occupied')

    const flower = await flowerRepo.findId(flowerId, { include: { species: true } })
    if (!flower) throw new Error('Seed not found')
    if (flower.ownerId !== remult.user.id) throw new Error('Not your seed')
    if (flower.status !== FlowerStatus.SEED) throw new Error('Item is not a seed')

    flower.status = FlowerStatus.SPROUT1
    flower.plantedAt = new Date()
    flower.waterLevel = 0
    flower.growthSeconds = 0
    flower.lastProcessedAt = new Date()

    flower.gridX = tile.x
    flower.gridY = tile.z

    await flowerRepo.save(flower)

    tile.flowerId = flower.id
    await tileRepo.save(tile)

    // Achievements
    await AchievementService.grantAchievement(remult.user.id, 'first_planting')

    const { ServerEvents } = await import('../server-events')

    ServerEvents.notifyUser(
      remult.user.id,
      'Successfuly planted a new seed !',
      `Congratulation on your new seed of <b>${flower.species!.name}</b>.`,
      'success',
    )
    ServerEvents.dispatchStateUpdate(remult.user.id, 'island')
    ServerEvents.dispatchStateUpdate(remult.user.id, 'inventory')

    return {
      success: true,
      flower: GameController.toFlowerDTO(flower),
    }
  }

  @BackendMethod({ allowed: true })
  static async waterFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    if (remult.user.banned) throw new Error('Banned users cannot water flowers')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })

    if (!tile || tile.island!.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to water')

    const flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })
    if (!flower) throw new Error('Flower not found')

    // Check for Watering Can
    const itemRepo = remult.repo(Item)
    const userItemRepo = remult.repo(UserItem)
    const wateringCanDef = await itemRepo.findFirst({ slug: 'watering_can' })
    const userCan = wateringCanDef ? await userItemRepo.findFirst({ userId: remult.user.id, itemDefinitionId: wateringCanDef.id }) : null
    
    if (!userCan || userCan.quantity <= 0) {
      throw new Error('You need a Watering Can to water your flowers!')
    }

    // Tutorial restriction
    const userRepo = remult.repo(User)
    const dbUser = await userRepo.findId(remult.user.id)
    if (dbUser?.isFirstTimeUser && dbUser.tutorialStep === 4) {
        if (flower.lastWateredAt) {
            throw new Error("Tutorial: You've already watered once. Focus on Boost or Harvest now!")
        }
    }

    const allFlowers = await flowerRepo.find({ where: { ownerId: remult.user.id } })

    // Hydration fix: evaluate existing dry/wet time FIRST
    await GameController.updateFlowerStatus(flower, allFlowers)

    const stats = AttributesLogic.calculateStats(flower, allFlowers)

    const baseWaterAdd = 25
    // Apply Water Retention as efficiency multiplier
    const modifiedWaterAdd = baseWaterAdd * stats.waterRetention

    // LOG: Water Effect
    if (stats.waterRetention !== 1) {
      console.log(
        `[Attribute Effect] Watering ${flower.species!.name}: Default +${baseWaterAdd} -> Modified +${modifiedWaterAdd}`,
      )
    }

    const maxDry = flower.species?.maxDrySeconds ?? 43200
    if (flower.drySeconds > maxDry * 0.9) {
      await AchievementService.grantAchievement(remult.user.id, 'survivor')
    }

    const newLevel = Math.min(100, (flower.waterLevel || 0) + modifiedWaterAdd)
    flower.waterLevel = newLevel
    flower.lastWateredAt = new Date()
    await flowerRepo.save(flower)

    const { ServerEvents } = await import('../server-events')
    ServerEvents.dispatchStateUpdate(remult.user.id, 'island')

    return { level: newLevel }
  }

  @BackendMethod({ allowed: true })
  static async harvestFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    if (remult.user.banned) throw new Error('Banned users cannot harvest flowers')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })
    if (!tile || tile.island!.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to harvest')

    const flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })
    if (!flower) throw new Error('Flower data missing')

    const attrs = flower.species!.attributes as FlowerAttributes
    const maxStatus = attrs.maxStatus || FlowerStatus.GROWING2

    if (flower.status !== maxStatus) throw new Error('Flower is not ready for harvest')

    const allFlowers = await flowerRepo.find({ where: { ownerId: remult.user.id } })

    const stats = AttributesLogic.calculateStats(flower, allFlowers)
    const globalEffects = AttributesLogic.getPlayerGlobalEffects(allFlowers)

    let finalXp = attrs.baseXpReward
    finalXp *= stats.xpMultiplier
    finalXp *= globalEffects.GLOBAL_XP_MULTIPLIER
    finalXp = Math.floor(finalXp)

    console.log(globalEffects)
    console.log(stats)

    if (finalXp !== attrs.baseXpReward) {
      console.log(
        `[Attribute Effect] Harvest XP: Base ${attrs.baseXpReward} -> Modified ${finalXp}`,
      )
    }

    let finalScore = attrs.baseScoreReward
    finalScore += stats.scoreBonus

    if (finalScore !== attrs.baseScoreReward) {
      console.log(
        `[Attribute Effect] Harvest Score: Base ${attrs.baseScoreReward} -> Modified ${finalScore}`,
      )
    }

    let harvestedQuality = Math.floor(Math.random() * 100) / 100
    harvestedQuality += stats.qualityBonus

    if (stats.qualityBonus !== 0) {
      console.log(
        `[Attribute Effect] Harvest Quality: Base Roll -> +${stats.qualityBonus} Bonus Applied`,
      )
    }

    const userRepo = remult.repo(User)
    const dbUser = await userRepo.findId(remult.user.id)
    if (dbUser) {
      dbUser.totalHarvests = (dbUser.totalHarvests || 0) + 1
      await userRepo.save(dbUser)

      // Achievements
      if (flower.isShiny) {
        await AchievementService.grantAchievement(dbUser.id, 'shiny_hunter')
      }
      if (flower.quality >= 1.0) {
        await AchievementService.grantAchievement(dbUser.id, 'perfect_harvest')
      }
    }

    await GameController.addXpToUser(remult.user.id, finalXp)

    const islandRepo = remult.repo(Island)
    if (tile.island) {
      tile.island.monthScore += finalScore
      await islandRepo.save(tile.island)
    }

    flower.status = FlowerStatus.SEED
    flower.gridX = undefined
    flower.gridY = undefined
    flower.plantedAt = undefined
    flower.waterLevel = 100
    flower.quality = harvestedQuality
    flower.growthSeconds = 0
    flower.lastProcessedAt = undefined

    await flowerRepo.save(flower)

    tile.flowerId = ''
    await tileRepo.save(tile)

    const { ServerEvents } = await import('../server-events')
    ServerEvents.dispatchStateUpdate(remult.user.id, 'island')
    ServerEvents.dispatchStateUpdate(remult.user.id, 'inventory')

    return {
      success: true,
      rewards: { xp: finalXp, score: finalScore, quality: harvestedQuality },
    }
  }

  @BackendMethod({ allowed: true })
  static async startAdventure() {
    const user = remult.user
    if (!user) throw new Error('Not connected.')

    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)
    const userRepo = remult.repo(User)

    const existing = await islandRepo.findFirst({ ownerId: user.id })
    if (existing) throw new Error('Adventure has already started !')

    const dbUser = await userRepo.findId(user.id)
    if (dbUser) {
      dbUser.sap += 100
      dbUser.hasIsland = true
      await userRepo.save(dbUser)

      const bankRepo = remult.repo(GlobalBank)
      let bank = await bankRepo.findFirst()
      if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 1000000, rubies: 0 })
      bank.sap -= 100
      await bankRepo.save(bank)
    }

    const island = await islandRepo.insert({
      ownerId: user.id,
      name: dbUser?.isFirstTimeUser ? 'Unnamed Island' : `${user?.tag || 'Unknown'}'s Island`,
    })

    const initialTiles = []
    if (dbUser?.isFirstTimeUser) {
      initialTiles.push({
        islandId: island.id,
        x: 0,
        z: 0,
        type: 'land',
      })
    } else {
      for (let x = -2; x <= 2; x += 2) {
        for (let z = -2; z <= 2; z += 2) {
          initialTiles.push({
            islandId: island.id,
            x: x,
            z: z,
            type: 'land',
          })
        }
      }
    }

    for (const t of initialTiles) {
      await tileRepo.insert(t as any)
    }

    // Grant initial flower: common_dandelion
    const speciesRepo = remult.repo(FlowerSpecies)
    const dandelion = await speciesRepo.findFirst({ slugName: 'common_dandelion' })
    if (dandelion) {
      const flowerRepo = remult.repo(UserFlower)
      await flowerRepo.insert({
        ownerId: user.id,
        speciesId: dandelion.id,
        status: FlowerStatus.SEED,
        quality: 0.5,
        waterLevel: 0,
      })
      await GameController.registerDiscovery(user.id, dandelion.id, 0.5, DiscoverySource.GIFT)
      
      // Grant Watering Can
      const itemRepo = remult.repo(Item)
      const userItemRepo = remult.repo(UserItem)
      const canDef = await itemRepo.findFirst({ slug: 'watering_can' })
      if (canDef) {
          await userItemRepo.insert({
              userId: user.id,
              itemDefinitionId: canDef.id,
              quantity: 1
          })
      }
    }

    await LoggerService.info(LogSource.GAME, `Started new adventure`, user.id, island.id)

    return island
  }

  @BackendMethod({ allowed: true })
  static async updateTutorialStep(step: number) {
    if (!remult.user) throw new Error('Not authenticated')
    const userRepo = remult.repo(User)
    const user = await userRepo.findId(remult.user.id)
    if (!user) throw new Error('User not found')
    user.tutorialStep = step
    await userRepo.save(user)
    return true
  }

  @BackendMethod({ allowed: true })
  static async nameFlower(flowerId: string, name: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const flowerRepo = remult.repo(UserFlower)
    const flower = await flowerRepo.findId(flowerId)
    if (!flower || flower.ownerId !== remult.user.id) throw new Error('Flower not found')
    flower.name = name
    await flowerRepo.save(flower)
    return true
  }

  @BackendMethod({ allowed: true })
  static async accelerateGrowthTutorial(flowerId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const user = await remult.repo(User).findId(remult.user.id)
    if (!user || user.tutorialStep < 3) throw new Error('Access denied')

    const flowerRepo = remult.repo(UserFlower)
    const flower = await flowerRepo.findId(flowerId, { include: { species: true } })
    if (!flower || flower.ownerId !== remult.user.id) throw new Error('Flower not found')

    // Accelerate to ready state (leaving 10 seconds for the user to see the end)
    const duration = flower.species!.growthDuration
    flower.growthSeconds = Math.max(0, duration - 10)
    flower.waterLevel = 100
    await flowerRepo.save(flower)

    const { ServerEvents } = await import('../server-events')
    ServerEvents.dispatchStateUpdate(remult.user.id, 'island')

    return true
  }

  @BackendMethod({ allowed: true })
  static async completeTutorialExpansion(islandName: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const userRepo = remult.repo(User)
    const user = await userRepo.findId(remult.user.id)
    if (!user) throw new Error('User not found')

    const islandRepo = remult.repo(Island)
    const island = await islandRepo.findFirst({ ownerId: user.id })
    if (!island) throw new Error('Island not found')

    island.name = islandName
    await islandRepo.save(island)

    const tileRepo = remult.repo(Tile)
    const existingTiles = await tileRepo.find({ where: { islandId: island.id } })

    for (let x = -2; x <= 2; x += 2) {
      for (let z = -2; z <= 2; z += 2) {
        if (!existingTiles.find((t) => t.x === x && t.z === z)) {
          await tileRepo.insert({
            islandId: island.id,
            x,
            z,
            type: 'land',
          })
        }
      }
    }

    user.tutorialStep = 7
    user.isFirstTimeUser = false
    await userRepo.save(user)

    // Sync session
    const req = remult.context.request
    if (req?.session) {
      req.session['user'] = sanitizeUser(user)
    }

    const { ServerEvents } = await import('../server-events')
    ServerEvents.dispatchStateUpdate(user.id, 'island')

    return { success: true }
  }

  @BackendMethod({ allowed: true, transactional: true })
  static async buyLand(x: number, z: number) {
    const userRole = remult.user?.roles || []
    if (!userRole.includes(Role.USER)) throw new Error('Unauthorized')

    const userRepo = remult.repo(User)
    const currentUser = await userRepo.findId(remult.user!.id)
    if (!currentUser) throw new Error('User not found')

    const islandRepo = remult.repo(Island)
    const island = await islandRepo.findFirst({ ownerId: currentUser.id })
    if (!island) throw new Error('Island not found')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const currentCount = await tileRepo.count({ islandId: island.id })

    if (currentCount >= currentUser.maxPlots) {
      throw new Error(
        `Limit reached! You can only own ${currentUser.maxPlots} plots. Level up to expand.`,
      )
    }

    const existing = await tileRepo.findFirst({
      islandId: island.id,
      x: x,
      z: z,
    })
    if (existing) throw new Error('This land is already owned.')

    // Logic: Price Discount
    const userFlowers = await flowerRepo.find({ where: { ownerId: currentUser.id } })
    const globalEffects = AttributesLogic.getPlayerGlobalEffects(userFlowers)

    let finalPrice = PRICES.LAND_PLOT
    if (globalEffects.SHOP_PRICE_DISCOUNT > 0) {
      const discountAmount = Math.floor(PRICES.LAND_PLOT * globalEffects.SHOP_PRICE_DISCOUNT)
      finalPrice -= discountAmount
      console.log(
        `[Attribute Effect] Buy Land: Price ${PRICES.LAND_PLOT} -> Discounted ${finalPrice} (-${discountAmount})`,
      )
    }

    await GameController.removeSap(finalPrice)

    const newTile = await tileRepo.insert({
      islandId: island.id,
      x: x,
      z: z,
      type: TileType.LAND,
      status: TileStatus.EMPTY,
    })

    await LoggerService.info(
      LogSource.GAME,
      `Bought new land plot at (${x}, ${z}) for ${finalPrice} Sap`,
      currentUser.id,
      newTile.id,
    )

    // Achievement
    await AchievementService.grantAchievement(currentUser.id, 'land_owner')

    const { ServerEvents } = await import('../server-events')
    ServerEvents.dispatchStateUpdate(currentUser.id, 'island')
    ServerEvents.dispatchStateUpdate(currentUser.id, 'balance')

    return { success: true }
  }

  @BackendMethod({ allowed: true })
  static async getUserAchievements(targetUserId: string) {
    const userRepo = remult.repo(User)
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)

    // Define active user: not banned AND at least 1 hour of screentime
    const totalActiveUsers = await userRepo.count({
      banned: false,
      totalScreentimeSeconds: { $gte: 3600 }
    })

    const allAchievements = await achRepo.find({
      orderBy: { rewardSap: 'asc' },
    })

    const userUnlocked = await userAchRepo.find({
      where: { userId: targetUserId },
    })

    const unlockedMap = new Map(userUnlocked.map((ua) => [ua.achievementId, ua.unlockedAt]))

    // Count how many ACTIVE users have each achievement
    const globalStats = await Promise.all(allAchievements.map(async (ach) => {
      // Direct count of non-banned, active users who have this achievement
      // This is slightly inefficient but fine for this scale. 
      // A more robust way would be a join or a aggregation, but remult find with filters is safer here.
      const count = await userAchRepo.count({
        achievementId: ach.id,
        $and: [
          { userId: { $in: await userRepo.find({ where: { banned: false, totalScreentimeSeconds: { $gte: 3600 } } }).then(users => users.map(u => u.id)) } }
        ]
      })
      return { id: ach.id, count }
    }))
    
    const statsMap = new Map(globalStats.map(s => [s.id, s.count]))

    return allAchievements.map((ach) => {
      const unlockedByCount = statsMap.get(ach.id) || 0
      const percent = totalActiveUsers > 0 ? Math.round((unlockedByCount / totalActiveUsers) * 100) : 0
      
      return {
        ...ach,
        unlocked: unlockedMap.has(ach.id),
        unlockedAt: unlockedMap.get(ach.id),
        globalUnlockPercent: percent
      }
    })
  }

  private static toFlowerDTO(flower: UserFlower, activeStats?: any): FlowerDTO {
    const species = flower.species!

    return {
      id: flower.id,
      status: flower.status,
      name: flower.name,
      waterLevel: flower.waterLevel,
      quality: flower.quality,
      plantedAt: flower.plantedAt,
      growthSeconds: flower.growthSeconds,
      lastProcessedAt: flower.lastProcessedAt,
      isShiny: flower.isShiny,
      drySeconds: flower.drySeconds,
      activeModifiers: activeStats || null,
      species: {
        id: species.id,
        name: species.name,
        slugName: species.slugName,
        rarity: species.rarity,
        description: species.description,
        descriptionLore: species.descriptionLore,
        waterNeeds: species.waterNeeds,
        growthDuration: species.growthDuration,
        maxDrySeconds: species.maxDrySeconds ?? 43200,
        preferredSeason: species.preferredSeason as any,
        availability: species.availability as any,

        attributes: species.attributes as FlowerAttributes,
      },
    }
  }

  static async removeSap(amount: number) {
    const user = remult.user
    if (!user) throw new Error('Not Authenticated')
    if (amount < 0) throw new Error('You cannot remove a negative quantity of Sap')

    const userRepo = remult.repo(User)
    const dbUser = await userRepo.findId(user.id)
    if (!dbUser) throw new Error('User not found')

    if (dbUser.sap < amount) {
      throw new Error('Insufficient funds')
    }

    dbUser.sap -= amount
    await userRepo.save(dbUser)

    const bankRepo = remult.repo(GlobalBank)
    let bank = await bankRepo.findFirst()
    if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 1000000, rubies: 0 })
    bank.sap += amount
    await bankRepo.save(bank)

    return dbUser.sap
  }

  static async registerDiscovery(
    userId: string,
    speciesId: string,
    quality: number,
    source: DiscoverySource,
  ) {
    const discRepo = remult.repo(FlowerDiscovery)
    const existing = await discRepo.findFirst({ userId, speciesId })

    if (!existing) {
      await discRepo.insert({
        userId,
        speciesId,
        initialQuality: quality,
        source,
        discoveredAt: new Date(),
      })
      return true
    }
    return false
  }

  @BackendMethod({ allowed: true })
  static async getGlobalStats() {
    const tileRepo = remult.repo(Tile)
    const speciesRepo = remult.repo(FlowerSpecies)
    const historyRepo = remult.repo(MarketHistory)

    const activePlots = await tileRepo.count({
      type: 'land',
    })
    const speciesCount = await speciesRepo.count()

    // Aggregate total sap traded
    const allHistory = await historyRepo.find()
    const totalSapTraded = allHistory.reduce((sum, h: any) => sum + h.price, 0)

    return {
      activePlots,
      totalSapTraded,
      speciesCount,
    }
  }

  @BackendMethod({ allowed: true })
  static async getInventory() {
    if (!remult.user) throw new Error('Not authenticated')
    const itemRepo = remult.repo(UserItem)
    return await itemRepo.find({
      where: { userId: remult.user.id },
      include: { definition: true }
    })
  }

  @BackendMethod({ allowed: true })
  static async getLatestPatchNote() {
    const repo = remult.repo(PatchNote)
    return await repo.findFirst({ isPublished: true }, { orderBy: { createdAt: 'desc' } })
  }

  @BackendMethod({ allowed: true })
  static async markPatchNoteAsSeen(patchNoteId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const userRepo = remult.repo(User)
    const user = await userRepo.findId(remult.user.id)
    if (!user) throw new Error('User not found')
    user.lastSeenPatchNoteId = patchNoteId
    return await userRepo.save(user)
  }

  @BackendMethod({ allowed: true })
  static async getPatchNoteHistory() {
    const repo = remult.repo(PatchNote)
    return await repo.find({ where: { isPublished: true }, orderBy: { createdAt: 'desc' } })
  }
}
