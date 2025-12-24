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

    const island = await islandRepo.findFirst({ ownerId })

    if (!island) {
      return null
    }

    const tiles = await tileRepo.find({
      where: { islandId: island.id },
    })

    return { island, tiles }
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

  // --- INTERNAL HELPERS (NOT EXPOSED TO API) ---

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
