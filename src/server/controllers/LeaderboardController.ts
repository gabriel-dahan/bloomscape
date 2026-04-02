import { BackendMethod, Controller, remult } from 'remult'
import { Island } from '@/shared/map/Island'
import { User } from '@/shared/user/User'

@Controller('leaderboard')
export class LeaderboardController {
  @BackendMethod({ allowed: true })
  static async getPodium() {
    const islands = await remult.repo(Island).find({
      limit: 3,
      orderBy: { monthScore: 'desc', id: 'asc' },
      include: { owner: true },
    })

    return islands.map((i) => ({
      id: i.id,
      name: i.name,
      monthScore: i.monthScore,
      owner: i.owner ? { tag: i.owner.tag } : null,
    }))
  }

  @BackendMethod({ allowed: true })
  static async getLeaderboardPage(page: number) {
    const islandRepo = remult.repo(Island)
    const pageSize = 10

    const islands = await islandRepo.find({
      limit: pageSize,
      page: page,
      orderBy: { monthScore: 'desc', id: 'asc' },
      include: { owner: true },
    })

    const totalCount = await islandRepo.count()

    const totalPages = Math.ceil(totalCount / pageSize)

    return {
      items: islands.map((i) => ({
        id: i.id,
        name: i.name,
        monthScore: i.monthScore,
        owner: i.owner ? { tag: i.owner.tag } : null,
      })),
      totalPages,
      totalCount,
    }
  }

  @BackendMethod({ allowed: true })
  static async getMyStatus() {
    if (!remult.user) return null

    const islandRepo = remult.repo(Island)
    const myIsland = await islandRepo.findFirst({ ownerId: remult.user.id })
    if (!myIsland) return null

    const rank = await islandRepo.count({
      $or: [
        { monthScore: { $gt: myIsland.monthScore } },
        { 
          $and: [
            { monthScore: myIsland.monthScore },
            { id: { $lt: myIsland.id } }
          ]
        }
      ]
    })

    const user = await remult.repo(User).findId(remult.user.id)

    return {
      rank: rank + 1,
      name: myIsland.name,
      monthScore: myIsland.monthScore,
      owner: { tag: user?.tag || remult.user.name },
    }
  }
}
