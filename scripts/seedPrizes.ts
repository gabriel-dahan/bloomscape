import { api } from '../src/server/api'
import { remult } from 'remult'
import { RoulettePrize } from '../src/shared/economy/RoulettePrize'

async function seed() {
  await api.withRemult(undefined, undefined, async () => {
    const prizeRepo = remult.repo(RoulettePrize)
    
    const existing = await prizeRepo.count()
    if (existing > 0) {
      console.log(`Already have ${existing} prizes. Skip seed.`)
      return
    }

    const ROULETTE_PRIZES = [
      { id: 'trophy_flower', type: 'FLOWER', value: 'trophy_flower', amount: 1, probability: 0.001, dailyLimit: 1 },
      { id: 'tokens_5', type: 'TOKEN', value: 'tokens', amount: 5, probability: 0.02, dailyLimit: 100 },
      { id: 'rubies_50', type: 'RUBY', value: 'rubies', amount: 50, probability: 0.05, dailyLimit: 200 },
      { id: 'sap_1000', type: 'SAP', value: 'sap', amount: 1000, probability: 0.20, dailyLimit: 500 },
      { id: 'sap_100', type: 'SAP', value: 'sap', amount: 100, probability: 0.729, dailyLimit: -1 },
    ]

    for (const p of ROULETTE_PRIZES) {
      await prizeRepo.insert(p)
    }

    console.log('Seeded prizes!')
  })
}

seed().catch(console.error).finally(() => process.exit(0))
