import { BackendMethod, remult, SqlDatabase } from 'remult'
import { seedMarketData } from '../_seedMarket'
import {
  Achievement,
  FlowerSpecies,
  FlowerStatus,
  Item,
  MarketHistory,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
} from '@/shared'
import { ModerationLog } from '@/shared/analytics/ModerationLog'
import { DailySnapshot } from '@/shared/analytics/DailySnapshot'

export interface DashboardData {
  stats: {
    totalUsers: number
    activeUsers: number
    totalSap: number
    marketVolume24h: number
  }
  charts: {
    registrations: { date: string; value: number }[]
    economy: { date: string; value: number }[]
  }
}

export class AdminController {
  @BackendMethod({ allowed: 'admin' })
  static async getDashboardData(): Promise<DashboardData> {
    const userRepo = remult.repo(User)
    const historyRepo = remult.repo(MarketHistory)
    const snapshotRepo = remult.repo(DailySnapshot)

    const now = new Date()
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    const totalUsers = await userRepo.count()

    const activeUsers = await userRepo.count({
      lastOnline: { $gte: yesterday },
    })

    const db = remult.dataProvider as SqlDatabase
    const sapResult = await db.execute('SELECT SUM(sap) as total FROM users')
    const totalSap = sapResult.rows[0]?.total || 0

    const volResult = await db.execute(
      `SELECT SUM(price) as total FROM market_history WHERE soldAt > ${yesterday.getTime()}`,
    )
    const marketVolume24h = volResult.rows[0]?.total || 0

    const snapshots = await snapshotRepo.find({
      limit: 30,
      orderBy: { date: 'asc' },
    })

    const registrationsChart = snapshots.map((s) => ({
      date: s.date.toLocaleDateString(),
      value: s.newRegistrations,
    }))

    const economyChart = snapshots.map((s) => ({
      date: s.date.toLocaleDateString(),
      value: s.marketVolume,
    }))

    return {
      stats: {
        totalUsers,
        activeUsers,
        totalSap,
        marketVolume24h,
      },
      charts: {
        registrations: registrationsChart,
        economy: economyChart,
      },
    }
  }

  @BackendMethod({ allowed: ['admin'] })
  static async banUser(userId: string, reason: string) {
    const userRepo = remult.repo(User)
    const logRepo = remult.repo(ModerationLog)

    const user = await userRepo.findId(userId)
    if (!user) throw new Error('User not found')

    user.banned = true
    await userRepo.save(user)

    await logRepo.insert({
      targetUserId: userId,
      moderatorId: remult.user!.id,
      action: 'BAN',
      reason: reason,
    })

    return { success: true, message: `User ${user.tag} has been banned.` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveItem(userId: string, itemSlug: string, quantity: number) {
    const itemRepo = remult.repo(Item)
    const userItemRepo = remult.repo(UserItem)

    const definition = await itemRepo.findFirst({ slug: itemSlug })
    if (!definition) throw new Error('Item definition not found')

    let userItem = await userItemRepo.findFirst({ userId, itemDefinitionId: definition.id })

    if (userItem) {
      userItem.quantity += quantity
      await userItemRepo.save(userItem)
    } else {
      await userItemRepo.insert({
        userId,
        itemDefinitionId: definition.id,
        quantity,
      })
    }
    return { success: true, message: `Gave ${quantity}x ${definition.name}` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveFlower(userId: string, speciesSlug: string, quality: number) {
    const speciesRepo = remult.repo(FlowerSpecies)
    const flowerRepo = remult.repo(UserFlower)

    const species = await speciesRepo.findFirst({ slugName: speciesSlug })
    if (!species) throw new Error('Species not found')

    await flowerRepo.insert({
      ownerId: userId,
      speciesId: species.id,
      status: FlowerStatus.SEED,
      quality: quality, // 0.0 to 1.0
      waterLevel: 100,
      plantedAt: new Date(),
    })

    const { notifyUser } = await import('../socket')

    notifyUser(userId, 'notification', {
      title: 'You were given a flower.',
      message: `An admin gave you a <b>${species.name}</b>.`,
    })

    return { success: true, message: `Created ${species.name} Seed (Q${quality * 100})` }
  }

  @BackendMethod({ allowed: 'admin' })
  static async giveAchievement(userId: string, achievementSlug: string) {
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)

    const def = await achRepo.findFirst({ slug: achievementSlug })
    if (!def) throw new Error('Achievement not found')

    const existing = await userAchRepo.findFirst({ userId, achievementId: def.id })
    if (existing) throw new Error('User already has this achievement')

    await userAchRepo.insert({
      userId,
      achievementId: def.id,
      unlockedAt: new Date(),
    })

    return { success: true, message: `Unlocked: ${def.name}` }
  }
}
