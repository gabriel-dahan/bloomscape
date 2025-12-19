import { FlowerStatus, Island, Tile, User, UserFlower, UserItem } from '@/shared'
import { BackendMethod, remult } from 'remult'
import { PRICES } from '../ext'
import { useAuthStore } from '@/stores/auth'

export class GameController {
  @BackendMethod({ allowed: true })
  static async startAdventure() {
    const user = remult.user
    if (!user) throw new Error('Not connected.')

    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)

    // 1. Check if island exists
    const existing = await islandRepo.findFirst({ ownerId: user.id })
    if (existing) throw new Error('Adventure has already started !')

    // 2. Create Island
    const island = await islandRepo.insert({
      ownerId: user.id,
      name: `${user?.tag || 'Unknown'}'s Island`,
    })

    // 3. Create initial 3x3 grid
    const initialTiles = []
    for (let x = -2; x <= 2; x += 2) {
      for (let z = -2; z <= 2; z += 2) {
        initialTiles.push({
          islandId: island.id,
          x: x,
          z: z,
          type: 'land', // Matches Tile.ts default
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
  static async getUserBalance(tag: string) {
    const userRepo = remult.repo(User)
    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw new Error('User could not be found.')

    return user.sap
  }

  @BackendMethod({ allowed: true })
  static async removeSap(amount: number) {
    const user = remult.user
    if (!user) throw new Error('Not Authenticated')

    const userRepo = remult.repo(User)
    user.sap -= amount
    await userRepo.save(user)
    return user.sap
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
  static async getUserInventory() {
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

  static getFlowerAssetUrl(
    flowerSlugName: string,
    status: FlowerStatus = FlowerStatus.MATURE,
    type: 'icon' | 'sprite' = 'icon',
  ) {
    return `/api/images/flowers/${flowerSlugName}/${status.toLowerCase()}/${type.toLowerCase()}`
  }
}
