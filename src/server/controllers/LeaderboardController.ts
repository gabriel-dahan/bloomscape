import { BackendMethod, Controller, remult } from 'remult'
import { Island } from '@/shared/map/Island'
import { User } from '@/shared/user/User'

@Controller('leaderboard')
export class LeaderboardController {
  @BackendMethod({ allowed: true })
  static async getPodium() {
    const islands = await remult.repo(Island).find({
      orderBy: { monthScore: 'desc', id: 'asc' },
      include: { owner: true },
    })

    const validIslands = islands.filter(i => i.owner)

    return validIslands.slice(0, 3).map((i) => ({
      id: i.id,
      name: i.name,
      monthScore: i.monthScore,
      owner: { tag: i.owner!.tag },
    }))
  }

  @BackendMethod({ allowed: true })
  static async getLeaderboardPage(page: number) {
    const islandRepo = remult.repo(Island)
    const pageSize = 10

    const islands = await islandRepo.find({
      orderBy: { monthScore: 'desc', id: 'asc' },
      include: { owner: true },
    })

    const filtered = islands.filter(i => i.owner)
    const totalCount = filtered.length
    const totalPages = Math.ceil(totalCount / pageSize)

    const pagedItems = filtered.slice((page - 1) * pageSize, page * pageSize)

    return {
      items: pagedItems.map((i) => ({
        id: i.id,
        name: i.name,
        monthScore: i.monthScore,
        owner: { tag: i.owner!.tag },
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
