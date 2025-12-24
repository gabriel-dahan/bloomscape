import { BackendMethod, remult } from 'remult'
import { UserFlower } from '@/shared/flowers/UserFlower'
import { FlowerStatus } from '@/shared/types'
import { Tile } from '@/shared'

export class LandController {
  @BackendMethod({ allowed: true })
  static async getTileAt(x: number, z: number) {
    if (!remult.user) throw new Error('Not authenticated')

    const tileRepo = remult.repo(Tile)
    return await tileRepo.findFirst({ x, z })
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

    const tile = await tileRepo.findId(tileId, { include: { island: true } })
    if (!tile || tile.island.ownerId !== remult.user.id) throw new Error('Invalid tile')
    if (!tile.flowerId) throw new Error('Nothing to water here')

    const flower = await flowerRepo.findId(tile.flowerId)
    if (!flower) throw new Error('Flower data missing')

    const newLevel = Math.min(100, (flower.waterLevel || 0) + 25)

    flower.waterLevel = newLevel
    await flowerRepo.save(flower)

    return { level: newLevel }
  }

  @BackendMethod({ allowed: true })
  static async getAvailableSeeds() {
    if (!remult.user) return []
    return await remult.repo(UserFlower).find({
      where: {
        ownerId: remult.user.id,
        status: FlowerStatus.SEED,
      },
      include: { species: true },
    })
  }
}
