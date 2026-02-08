import {
  Achievement,
  DiscoverySource,
  FlowerSpecies,
  FlowerStatus,
  Island,
  Tile,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
  FlowerRarity,
} from '@/shared'
import type { FlowerDTO, FlowerAttributes } from '@/shared'
import { BackendMethod, remult } from 'remult'
import { PRICES } from '../ext'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'
import { getLevelFromXp } from '@/shared/leveling'
import { AttributesLogic } from '@/shared/attributesLogic'

export class GameController {
  @BackendMethod({ allowed: true })
  static async getIslandDetails(ownerId: string) {
    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

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

    await userRepo.save(user)
    return {
      message: `Successfuly gave ${amount} XP to user ${user.tag}`,
      val: newLevel > oldLevel,
    }
  }

  @BackendMethod({ allowed: true })
  static async getUserInventory() {
    if (!remult.user) throw new Error('Not authenticated')

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

    const speciesRepo = remult.repo(FlowerSpecies)
    const discoveryRepo = remult.repo(FlowerDiscovery)

    const allSpecies = await speciesRepo.find({
      orderBy: { rarity: 'asc', name: 'asc' },
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
      }
    })

    return floradexData
  }

  static getFlowerAssetUrl(
    flowerSlugName: string,
    status: FlowerStatus = FlowerStatus.MATURE,
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
        // Fetch context for accurate stats
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
    if (
      flower.status === FlowerStatus.SEED ||
      flower.status === FlowerStatus.MATURE ||
      flower.status === FlowerStatus.WITHERED
    ) {
      return flower
    }

    if (!flower.plantedAt || !flower.species) {
      return flower
    }

    let allFlowers = contextFlowers
    if (!allFlowers) {
      allFlowers = await remult.repo(UserFlower).find({ where: { ownerId: flower.ownerId } })
    }

    const stats = AttributesLogic.calculateStats(flower, allFlowers)

    if (stats.growthSpeedMultiplier !== 1) {
      console.log(
        `[Attribute Effect] Flower ${flower.species.name} Growth Duration: Default ${flower.species.growthDuration}s -> Modified ${Math.floor(flower.species.growthDuration / stats.growthSpeedMultiplier)}s`,
      )
    }

    const now = new Date()
    const elapsedSeconds = (now.getTime() - flower.plantedAt.getTime()) / 1000

    const duration = flower.species.growthDuration / stats.growthSpeedMultiplier

    let newStatus: FlowerStatus = flower.status

    if (elapsedSeconds >= duration) {
      newStatus = FlowerStatus.MATURE
    } else {
      const progress = elapsedSeconds / duration

      if (progress < 0.25) newStatus = FlowerStatus.SPROUT1
      else if (progress < 0.5) newStatus = FlowerStatus.SPROUT2
      else if (progress < 0.75) newStatus = FlowerStatus.GROWING1
      else newStatus = FlowerStatus.GROWING2
    }

    if (newStatus !== flower.status) {
      flower.status = newStatus
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
    flower.waterLevel = 50

    flower.gridX = tile.x
    flower.gridY = tile.z

    await flowerRepo.save(flower)

    tile.flowerId = flower.id
    await tileRepo.save(tile)

    const { ServerEvents } = await import('../server-events')

    ServerEvents.notifyUser(
      remult.user.id,
      'Successfuly planted a new seed !',
      `Congratulation on your new seed of <b>${flower.species!.name}</b>.`,
      'success',
    )

    return {
      success: true,
      flower: GameController.toFlowerDTO(flower),
    }
  }

  @BackendMethod({ allowed: true })
  static async waterFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })

    if (!tile || tile.island!.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to water here')

    const flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })
    if (!flower) throw new Error('Flower data missing')

    const allFlowers = await flowerRepo.find({ where: { ownerId: remult.user.id } })
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

    const newLevel = Math.min(100, (flower.waterLevel || 0) + modifiedWaterAdd)

    flower.waterLevel = newLevel
    flower.lastWateredAt = new Date()
    await flowerRepo.save(flower)

    return { level: newLevel }
  }

  @BackendMethod({ allowed: true })
  static async harvestFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })
    if (!tile || tile.island.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to harvest')

    const flower = await flowerRepo.findId(tile.flowerId, { include: { species: true } })
    if (!flower) throw new Error('Flower data missing')
    if (flower.status !== FlowerStatus.MATURE) throw new Error('Flower is not ready for harvest')

    const allFlowers = await flowerRepo.find({ where: { ownerId: remult.user.id } })

    const stats = AttributesLogic.calculateStats(flower, allFlowers)
    const globalEffects = AttributesLogic.getPlayerGlobalEffects(allFlowers)

    const attrs = flower.species!.attributes as FlowerAttributes

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

    await flowerRepo.save(flower)

    tile.flowerId = ''
    await tileRepo.save(tile)

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
      await userRepo.save(dbUser)
    }

    const island = await islandRepo.insert({
      ownerId: user.id,
      name: `${user?.tag || 'Unknown'}'s Island`,
    })

    const initialTiles = []
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

    for (const t of initialTiles) {
      await tileRepo.insert(t as any)
    }

    return island
  }

  @BackendMethod({ allowed: true })
  static async buyLand(x: number, z: number) {
    const currentUser = remult.user
    if (!currentUser) throw new Error('Not Authenticated')

    const tileRepo = remult.repo(Tile)
    const islandRepo = remult.repo(Island)
    const flowerRepo = remult.repo(UserFlower)

    const island = await islandRepo.findFirst({ ownerId: currentUser.id })
    if (!island) throw new Error('Island not found')

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

    return await tileRepo.insert({
      islandId: island.id,
      x: x,
      z: z,
      type: 'land',
      createdAt: new Date(),
    })
  }

  @BackendMethod({ allowed: true })
  static async getUserAchievements(targetUserId: string) {
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)

    const allAchievements = await achRepo.find({
      orderBy: { rewardSap: 'asc' },
    })

    const userUnlocked = await userAchRepo.find({
      where: { userId: targetUserId },
    })

    const unlockedMap = new Map(userUnlocked.map((ua) => [ua.achievementId, ua.unlockedAt]))

    return allAchievements.map((ach) => ({
      ...ach,
      unlocked: unlockedMap.has(ach.id),
      unlockedAt: unlockedMap.get(ach.id),
    }))
  }

  private static toFlowerDTO(flower: UserFlower, activeStats?: any): FlowerDTO {
    const species = flower.species!

    return {
      id: flower.id,
      status: flower.status,
      waterLevel: flower.waterLevel,
      quality: flower.quality,
      plantedAt: flower.plantedAt,
      isShiny: flower.isShiny,
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
        preferredSeason: species.preferredSeason,

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
}
