import { FlowerStatus, User, UserFlower } from '@/shared'
import { DailySnapshot } from '@/shared/analytics/DailySnapshot'
import { remult, Remult, SqlDatabase } from 'remult'
import { api } from '../api'
import { GameController } from '../controllers/GameController'

export class GameService {
  static TICK_RATE = 10 * 1000

  static async start() {
    // Backfill snapshots on startup
    await api.withRemultAsync(undefined, async () => {
      await this.backfillSnapshots(remult)
    })

    setInterval(async () => {
      try {
        await api.withRemultAsync(undefined, async () => {
          await this.processGrowthTick()
          await this.createDailySnapshot(remult)
        })
      } catch (error) {
        console.error(error)
      }
    }, this.TICK_RATE)
  }

  private static async processGrowthTick() {
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
      await GameController.updateFlowerStatus(flower)
    }
  }

  static async createDailySnapshot(remult: Remult, targetDate?: Date) {
    const date = targetDate || new Date()
    date.setHours(0, 0, 0, 0)

    const snapshotRepo = remult.repo(DailySnapshot)

    const existing = await snapshotRepo.findFirst({ date })

    const userRepo = remult.repo(User)
    const db = remult.dataProvider as SqlDatabase

    const totalUsers = await userRepo.count()
    const activeUsers = await userRepo.count({
      lastOnline: { $gte: new Date(date.getTime() - 24 * 60 * 60 * 1000) },
    })

    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    const newRegistrations = await userRepo.count({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    })

    // Calculate total SAP in circulation
    const sapResult = await db.execute('SELECT SUM(sap) as total FROM users')
    const totalSap = sapResult.rows[0]?.total || 0

    // Calculate market volume for that specific day
    const volResult = await db.execute(
      `SELECT SUM(price) as total FROM market_history WHERE soldAt >= ${startOfDay.getTime()} AND soldAt <= ${endOfDay.getTime()}`,
    )
    const marketVol = volResult.rows[0]?.total || 0

    if (existing) {
      existing.totalUsers = totalUsers
      existing.activeUsers = activeUsers
      existing.newRegistrations = newRegistrations
      existing.totalSapCirculation = totalSap
      existing.marketVolume = marketVol
      await snapshotRepo.save(existing)
    } else {
      await snapshotRepo.insert({
        date,
        totalUsers,
        activeUsers,
        newRegistrations,
        totalSapCirculation: totalSap,
        marketVolume: marketVol,
      })
    }
  }

  private static async backfillSnapshots(remult: Remult) {
    console.log('Checking for snapshot backfill...')
    for (let i = 30; i >= 1; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      date.setHours(0, 0, 0, 0)

      const snapshotRepo = remult.repo(DailySnapshot)
      const existing = await snapshotRepo.findFirst({ date })

      if (!existing) {
        console.log(`Backfilling snapshot for ${date.toLocaleDateString()}...`)
        await this.createDailySnapshot(remult, date)
      }
    }
    console.log('Snapshot backfill complete.')
  }
}
