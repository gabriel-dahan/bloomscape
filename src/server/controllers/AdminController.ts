import { BackendMethod } from 'remult'
import { seedMarketData } from '../_seedMarket'

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
}
