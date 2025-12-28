import { FlowerStatus, UserFlower } from '@/shared'
import { Remult } from 'remult'

export class GameService {
  static TICK_RATE = 10 * 1000

  static async start(dataProvider: any) {
    setInterval(async () => {
      const remult = new Remult(dataProvider)
      try {
        await this.processGrowthTick(remult)
      } catch (error) {
        console.error(error)
      }
    }, this.TICK_RATE)
  }

  private static async processGrowthTick(remult: Remult) {
    const flowerRepo = remult.repo(UserFlower)

    const activeFlowers = await flowerRepo.find({
      where: {
        status: {
          $in: [
            FlowerStatus.SPROUT1,
            FlowerStatus.SPROUT2,
            FlowerStatus.GROWING1,
            FlowerStatus.GROWING2,
          ],
        },
      },
      include: { species: true },
    })

    if (activeFlowers.length === 0) return

    for (const flower of activeFlowers) {
      if (!flower.plantedAt || !flower.species) continue

      const now = new Date()
      const elapsedSeconds = (now.getTime() - flower.plantedAt.getTime()) / 1000
      const duration = flower.species.growthDuration

      let newStatus = flower.status

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
        await flowerRepo.save(flower)
      }
    }
  }
}
