import { remult } from 'remult'
import { Achievement, UserAchievement, User } from '@/shared'
import { ServerEvents } from '../server-events'

export class AchievementService {
  static async seedAchievements() {
    const achRepo = remult.repo(Achievement)
    const existingCount = await achRepo.count()
    if (existingCount > 0) return

    const defaults = [
      {
        slug: 'first_planting',
        name: 'First Steps',
        description: 'Plant your very first seed.',
        rewardSap: 100,
        isSecret: false,
      },
      {
        slug: 'master_gardener',
        name: 'Master Gardener',
        description: 'Reach level 10.',
        rewardSap: 1000,
        isSecret: false,
      },
      {
        slug: 'rich_planter',
        name: 'Sap Tycoon',
        description: 'Accumulate 10,000 Sap.',
        rewardSap: 500,
        isSecret: false,
      },
      {
        slug: 'market_trader',
        name: 'Wall Street Bloom',
        description: 'Sell your first flower on the market.',
        rewardSap: 200,
        isSecret: false,
      },
      {
        slug: 'land_owner',
        name: 'Real Estate Developer',
        description: 'Buy your first additional land plot.',
        rewardSap: 300,
        isSecret: false,
      },
      {
        slug: 'perfect_harvest',
        name: 'The Golden Touch',
        description: 'Harvest a flower with 100% quality.',
        rewardSap: 1000,
        isSecret: true,
      },
      {
        slug: 'shiny_hunter',
        name: 'Stardust',
        description: 'Find a shiny flower.',
        rewardSap: 2000,
        isSecret: true,
      },
      {
        slug: 'gambler',
        name: 'High Roller',
        description: 'Play the roulette 50 times.',
        rewardSap: 500,
        isSecret: true,
      },
      {
        slug: 'survivor',
        name: 'Thirsty No More',
        description: 'Save a plant that was 90% withered.',
        rewardSap: 300,
        isSecret: true,
      },
      {
        slug: 'botanist',
        name: 'FloraDex Completionist',
        description: 'Discover 10 different species.',
        rewardSap: 1500,
        isSecret: false,
      },
    ]

    for (const d of defaults) {
      await achRepo.insert(d)
    }
    console.log('Achievements seeded successfully.')
  }

  static async grantAchievement(userId: string, slug: string) {
    const achRepo = remult.repo(Achievement)
    const userAchRepo = remult.repo(UserAchievement)
    const userRepo = remult.repo(User)

    const achievement = await achRepo.findFirst({ slug })
    if (!achievement) return

    const existing = await userAchRepo.findFirst({ userId, achievementId: achievement.id })
    if (existing) return

    await userAchRepo.insert({ userId, achievementId: achievement.id })

    const user = await userRepo.findId(userId)
    if (user) {
      user.sap += achievement.rewardSap
      await userRepo.save(user)

      // Notify User
      try {
        ServerEvents.notifyUser(
          userId,
          'Achievement Unlocked!',
          `You've unlocked: ${achievement.name}. Reward: ${achievement.rewardSap} Sap.`,
          'success',
        )
      } catch (e) {
        console.error('Failed to send achievement notification', e)
      }
    }
  }
}
