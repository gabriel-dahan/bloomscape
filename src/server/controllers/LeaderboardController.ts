import { BackendMethod, remult } from 'remult'
import { Island } from '@/shared/map/Island'

export class LeaderboardController {
  @BackendMethod({ allowed: true })
  static async getPodium() {
    return await remult.repo(Island).find({
      limit: 3,
      orderBy: { monthScore: 'desc' },
      include: { owner: true },
    })
  }

  @BackendMethod({ allowed: true })
  static async getLeaderboardPage(page: number) {
    const islandRepo = remult.repo(Island)
    const pageSize = 10

    const podium = await islandRepo.find({
      limit: 3,
      orderBy: { monthScore: 'desc' },
      load: (x) => [],
    })

    const podiumIds = podium.map((p) => p.id)
    const islands = await islandRepo.find({
      limit: pageSize,
      page: page,
      orderBy: { monthScore: 'desc' },
      where: {
        id: { $ne: podiumIds },
      },
      include: { owner: true },
    })

    const totalCount = await islandRepo.count({
      id: { $ne: podiumIds },
    })

    const totalPages = Math.ceil(totalCount / pageSize)

    return {
      items: islands,
      totalPages,
      totalCount,
    }
  }
}
