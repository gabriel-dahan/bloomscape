import { BackendMethod, remult } from 'remult'
import { seedMarketData } from '../_seedMarket'
import {
  Achievement,
  FlowerSpecies,
  FlowerStatus,
  Item,
  User,
  UserAchievement,
  UserFlower,
  UserItem,
} from '@/shared'
import { ModerationLog } from '@/shared/analytics/ModerationLog'

export class AdminController {
  @BackendMethod({ allowed: 'admin' })
  static async populateMarket() {
    const isDebug = process.env.DEBUG === '1'

    console.log('Debug Mode:', isDebug)

    if (isDebug) {
      await seedMarketData()
      return 'Market Populated!'
    } else {
      throw new Error('Not allowed in production')
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

    // 2. Log Action
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
