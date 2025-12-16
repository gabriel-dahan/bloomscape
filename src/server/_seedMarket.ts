// server/seedMarket.ts
import { remult } from 'remult'
import { FlowerRarity, FlowerStatus, FlowerAvailability } from '../shared/types'
import {
  FlowerSpecies,
  MarketHistory,
  MarketListing,
  MarketStats,
  User,
  UserFlower,
} from '@/shared'

// --- CONFIGURATION ---
const BOT_COUNT = 5
const HISTORY_DAYS = 30
const LISTINGS_PER_SPECIES = 4

// Fake Data Definitions
const SPECIES_DATA = [
  { name: 'Sun Petal', rarity: FlowerRarity.COMMON, basePrice: 20, color: 'gold' },
  { name: 'Dew Drop', rarity: FlowerRarity.COMMON, basePrice: 25, color: 'cyan' },
  { name: 'Ruby Rose', rarity: FlowerRarity.UNCOMMON, basePrice: 80, color: 'crimson' },
  { name: 'Night Shade', rarity: FlowerRarity.UNCOMMON, basePrice: 120, color: 'indigo' },
  { name: 'Crystal Lily', rarity: FlowerRarity.RARE, basePrice: 400, color: 'white' },
  { name: 'Void Orchid', rarity: FlowerRarity.EPIC, basePrice: 1500, color: 'purple' },
  { name: 'Golden Lotus', rarity: FlowerRarity.LEGENDARY, basePrice: 5000, color: 'orange' },
]

export async function seedMarketData() {
  console.log('🌱 Starting Market Seeding...')

  const userRepo = remult.repo(User)
  const speciesRepo = remult.repo(FlowerSpecies)
  const flowerRepo = remult.repo(UserFlower)
  const listingRepo = remult.repo(MarketListing)
  const historyRepo = remult.repo(MarketHistory)
  const statsRepo = remult.repo(MarketStats)

  // 1. Create Species (if they don't exist)
  const speciesMap = new Map<string, FlowerSpecies>()

  for (const data of SPECIES_DATA) {
    let species = await speciesRepo.findFirst({ name: data.name })
    if (!species) {
      species = await speciesRepo.insert({
        name: data.name,
        description: `A beautiful ${data.rarity.toLowerCase()} flower found in BloomScape.`,
        rarity: data.rarity,
        availability: FlowerAvailability.WILD,
        assetUrl: `https://placehold.co/64x64/${data.color}/white?text=${data.name.charAt(0)}`, // Placeholder Image
        spriteUrl: `https://placehold.co/200x200/${data.color}/white?text=Sprite`, // Placeholder Sprite
        growthDuration: 3600,
      })
    }
    speciesMap.set(data.name, species)
  }
  console.log(`✅ Verified ${speciesMap.size} Flower Species`)

  // 2. Create Bot Users
  const bots: User[] = []
  for (let i = 1; i <= BOT_COUNT; i++) {
    const tag = `TraderBot_${i}`
    let bot = await userRepo.findFirst({ tag })
    if (!bot) {
      bot = await userRepo.insert({
        tag,
        sap: 100000,
        email: `bot${i}@bloomscape.com`,
        passwordHash: 'hashed_dummy',
        description: 'I am a market simulation bot.',
      })
    }
    bots.push(bot)
  }
  console.log(`✅ Verified ${bots.length} Bot Users`)

  // 3. Generate History & Stats (The Time Machine)
  // We loop backwards from today to 30 days ago

  console.log('⏳ Generating Historical Data (this might take a moment)...')

  // Clear old stats to regenerate fresh ones
  // await Promise.all((await statsRepo.find()).map(s => statsRepo.delete(s))) // Optional: Uncomment to wipe stats first

  const today = new Date()

  for (const [name, species] of Array.from(speciesMap)) {
    const basePrice = SPECIES_DATA.find((s) => s.name === name)!.basePrice

    for (let d = HISTORY_DAYS; d >= 0; d--) {
      const date = new Date()
      date.setDate(today.getDate() - d)
      date.setHours(12, 0, 0, 0) // Midday

      // Check if stats already exist for this day (to avoid duplicates if script runs twice)
      const existingStat = await statsRepo.count({
        speciesId: species.id,
        date: {
          $gte: new Date(date.setHours(0, 0, 0, 0)),
          $lt: new Date(date.setHours(23, 59, 59, 999)),
        },
      })
      if (existingStat > 0) continue

      // Simulate Volatility: Price varies by +/- 20% + a random daily trend
      const volatility = basePrice * 0.2
      const dailyTrend = Math.sin(d) * (basePrice * 0.1) // Makes a wave pattern
      const avgPrice = Math.floor(
        basePrice + dailyTrend + (Math.random() * volatility - volatility / 2),
      )

      // Simulate 3-10 sales per day
      const salesCount = Math.floor(Math.random() * 7) + 3
      let minPrice = Infinity
      let maxPrice = -Infinity
      let totalVolume = 0

      for (let s = 0; s < salesCount; s++) {
        const salePrice = Math.floor(avgPrice + (Math.random() * 10 - 5))
        minPrice = Math.min(minPrice, salePrice)
        maxPrice = Math.max(maxPrice, salePrice)

        // Insert individual history record (optional: disable if too many rows)
        await historyRepo.insert({
          speciesId: species.id,
          price: salePrice,
          soldAt: date,
        })
        totalVolume++
      }

      // Create Daily Stats Record (Crucial for Charts)
      await statsRepo.insert({
        speciesId: species.id,
        date: date,
        averagePrice: Math.floor((minPrice + maxPrice) / 2),
        minPrice,
        maxPrice,
        volume: totalVolume,
      })
    }
  }
  console.log('✅ Historical Data Generated')

  // 4. Generate Active Listings (The Present)
  console.log('📦 generating Active Listings...')

  // Clear old listings from bots to avoid clutter
  const botIds = bots.map((b) => b.id)
  const oldListings = await listingRepo.find({ where: { sellerId: { $in: botIds } } })
  for (const l of oldListings) {
    await listingRepo.delete(l)
  }

  for (const [name, species] of Array.from(speciesMap)) {
    const baseInfo = SPECIES_DATA.find((s) => s.name === name)!

    for (let i = 0; i < LISTINGS_PER_SPECIES; i++) {
      const seller = bots[Math.floor(Math.random() * bots.length)]

      // 1. Give the bot the flower (Seed status)
      const flower = await flowerRepo.insert({
        ownerId: seller.id,
        speciesId: species.id,
        status: FlowerStatus.SEED,
        quality: Math.random(), // 0.0 to 1.0
        waterLevel: 100,
      })

      // 2. List it on the market
      // Price varies slightly
      const listingPrice = Math.floor(baseInfo.basePrice + (Math.random() * 10 - 5))

      await listingRepo.insert({
        sellerId: seller.id,
        flowerId: flower.id,
        price: listingPrice,
        listedAt: new Date(),
      })
    }
  }

  console.log('✨ Market Seed Complete! BloomScape is open for business.')
}
