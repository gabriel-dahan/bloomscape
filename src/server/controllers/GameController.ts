import {
  Achievement,
  DiscoverySource,
  FlowerAvailability,
  FlowerSpecies,
  FlowerStatus,
  Island,
  Tile,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
  FlowerDTO,
} from '@/shared'
import { BackendMethod, remult } from 'remult'
import { PRICES } from '../ext'
import { FlowerDiscovery } from '@/shared/analytics/FlowerDiscovery'

export class GameController {
  // --- READ ACTIONS ---

  @BackendMethod({ allowed: true })
  static async getIslandDetails(ownerId: string) {
    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const island = await islandRepo.findFirst({ ownerId })

    if (!island) {
      return null
    }

    const tiles = await tileRepo.find({
      where: { islandId: island.id },
    })

    const flowerIds = tiles.map((t) => t.flowerId).filter((id) => !!id)

    const flowers = await flowerRepo.find({
      where: { id: { $in: flowerIds } },
      include: { species: true },
    })

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
  static async getUserInventory() {
    if (!remult.user) throw new Error('Not authenticated')

    const flowerRepo = remult.repo(UserFlower)
    const itemRepo = remult.repo(UserItem)

    const flowers = await flowerRepo.find({
      where: { ownerId: remult.user.id, status: FlowerStatus.SEED },
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

  // --- NEW MODAL ACTIONS (DTO BASED) ---

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
        // Use the new reusable method to update growth status
        flower = await GameController.updateFlowerStatus(flower)
        flowerDTO = GameController.toFlowerDTO(flower)
      }
    }

    return { tile, flower: flowerDTO }
  }

  /**
   * Checks the elapsed time since planting and updates the flower's status
   * (e.g., SPROUT -> GROWING -> MATURE) if necessary.
   * This saves the flower to the database if a change occurs.
   */
  static async updateFlowerStatus(flower: UserFlower): Promise<UserFlower> {
    // If it's already mature, withered, or a seed, no growth logic needed
    if (
      flower.status === FlowerStatus.SEED ||
      flower.status === FlowerStatus.MATURE ||
      flower.status === FlowerStatus.WITHERED
    ) {
      return flower
    }

    // Ensure we have necessary data
    if (!flower.plantedAt || !flower.species) {
      // In a real scenario, you might want to fetch the species here if it's missing
      return flower
    }

    const now = new Date()
    const elapsedSeconds = (now.getTime() - flower.plantedAt.getTime()) / 1000
    const duration = flower.species.growthDuration

    let newStatus = flower.status

    if (elapsedSeconds >= duration) {
      // Growth complete
      newStatus = FlowerStatus.MATURE
    } else {
      // Intermediate stages (0-25%, 25-50%, 50-75%, 75-100%)
      const progress = elapsedSeconds / duration

      if (progress < 0.25) newStatus = FlowerStatus.SPROUT1
      else if (progress < 0.5) newStatus = FlowerStatus.SPROUT2
      else if (progress < 0.75) newStatus = FlowerStatus.GROWING1
      else newStatus = FlowerStatus.GROWING2
    }

    // Only save if the status actually changed
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
    if (tile.island.ownerId !== remult.user.id) throw new Error('Not your land')
    if (tile.flowerId) throw new Error('Tile is already occupied')

    const flower = await flowerRepo.findId(flowerId)
    if (!flower) throw new Error('Seed not found')
    if (flower.ownerId !== remult.user.id) throw new Error('Not your seed')
    if (flower.status !== FlowerStatus.SEED) throw new Error('Item is not a seed')

    flower.status = FlowerStatus.SPROUT1
    flower.plantedAt = new Date()
    flower.waterLevel = 50
    // Optional: set grid position if you use it for other logic
    flower.gridX = tile.x
    flower.gridY = tile.z

    await flowerRepo.save(flower)

    tile.flowerId = flower.id
    await tileRepo.save(tile)

    return { success: true }
  }

  @BackendMethod({ allowed: true })
  static async waterFlower(tileId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    const flowerRepo = remult.repo(UserFlower)

    const tile = await tileRepo.findFirst({ id: tileId }, { include: { island: true } })

    if (!tile || tile.island.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to water here')

    const flower = await flowerRepo.findId(tile.flowerId)
    if (!flower) throw new Error('Flower data missing')

    const newLevel = Math.min(100, (flower.waterLevel || 0) + 25)

    flower.waterLevel = newLevel
    flower.lastWateredAt = new Date()
    await flowerRepo.save(flower)

    return { level: newLevel }
  }

  // --- WRITE ACTIONS ---

  @BackendMethod({ allowed: true })
  static async startAdventure() {
    const user = remult.user
    if (!user) throw new Error('Not connected.')

    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)

    const existing = await islandRepo.findFirst({ ownerId: user.id })
    if (existing) throw new Error('Adventure has already started !')

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

    // Insert loop
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

    await GameController.removeSap(PRICES.LAND_PLOT)

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

  // --- INTERNAL HELPERS ---

  private static toFlowerDTO(flower: UserFlower): FlowerDTO {
    const species = flower.species!

    return {
      id: flower.id,
      status: flower.status,
      waterLevel: flower.waterLevel,
      quality: flower.quality,
      plantedAt: flower.plantedAt,
      isShiny: flower.isShiny,
      species: {
        name: species.name,
        slugName: species.slugName,
        rarity: species.rarity,
        description: species.description,
        description_lore: species.description_lore,
        waterNeeds: species.waterNeeds,
        growthDuration: species.growthDuration,
        preferredSeason: species.preferredSeason,
      },
    }
  }

  static async removeSap(amount: number) {
    const user = remult.user
    if (!user) throw new Error('Not Authenticated')

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

    const existing = await discRepo.findFirst({
      userId,
      speciesId,
    })

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
