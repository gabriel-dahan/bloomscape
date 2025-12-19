import {
  MarketHistory,
  MarketListing,
  MarketStats,
  User,
  UserFlower,
  FlowerSpecies,
} from '@/shared'
import { BackendMethod, remult } from 'remult'
import { FlowerAvailability, FlowerRarity } from '@/shared/types'

export class MarketController {
  @BackendMethod({ allowed: true })
  static async buyListing(listingId: string) {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')

    const listingRepo = remult.repo(MarketListing)
    const userRepo = remult.repo(User)
    const flowerRepo = remult.repo(UserFlower)
    const historyRepo = remult.repo(MarketHistory)

    const listing = await listingRepo.findId(listingId, { include: { flower: true } })
    const buyer = await userRepo.findId(user.id)

    if (!listing) throw new Error('This listing is no longer available.')
    if (!buyer) throw new Error('Buyer account not found.')
    if (listing.sellerId === buyer.id) throw new Error('You cannot buy your own listing.')

    if (buyer.sap < listing.price) {
      throw new Error(`Insufficient funds. You need ${listing.price} Sap.`)
    }

    // Process Transaction
    buyer.sap -= listing.price

    const seller = await userRepo.findId(listing.sellerId)
    if (seller) {
      seller.sap += listing.price
      await userRepo.save(seller)
    }
    await userRepo.save(buyer)

    // Transfer Ownership
    if (listing.flower) {
      listing.flower.ownerId = buyer.id
      // Reset any specific status if needed
      await flowerRepo.save(listing.flower)
    }

    // Record History
    await historyRepo.insert({
      speciesId: listing.flower?.speciesId || '',
      price: listing.price,
      soldAt: new Date(),
    })

    // Update Daily Stats
    if (listing.flower?.speciesId) {
      await MarketController.updateDailyStats(listing.flower.speciesId, listing.price)
    }

    await listingRepo.delete(listing)

    return { success: true, message: `Successfully purchased for ${listing.price} Sap!` }
  }

  @BackendMethod({ allowed: true })
  static async addListing(flowerId: string, price: number) {
    const user = remult.user
    if (!user) throw new Error('Not authenticated')

    const flowerRepo = remult.repo(UserFlower)
    const listingRepo = remult.repo(MarketListing)

    const flower = await flowerRepo.findId(flowerId)
    if (!flower) throw new Error('Flower not found.')
    if (flower.ownerId !== user.id) throw new Error('You do not own this flower.')

    const listing = listingRepo.create({
      flower: flower,
      sellerId: user.id,
      price: price,
      listedAt: new Date(),
    })

    await listingRepo.insert(listing)

    return { success: true, message: 'Listing added successfully.' }
  }

  @BackendMethod({ allowed: true })
  static async getFlowerMarketMetrics(speciesId: string) {
    const listingRepo = remult.repo(MarketListing)

    const listings = await listingRepo.find({
      where: { flowerId: speciesId },
    })

    if (listings.length === 0) {
      return { count: 0, lowestPrice: null }
    }

    let min = Infinity
    for (const l of listings) {
      if (l.price < min) min = l.price
    }

    return {
      count: listings.length,
      lowestPrice: min === Infinity ? null : min,
    }
  }

  @BackendMethod({ allowed: true })
  static async getMarketplaceData() {
    const speciesRepo = remult.repo(FlowerSpecies)
    const listingRepo = remult.repo(MarketListing)

    const listings = await listingRepo.find({
      include: { flower: true, seller: true },
    })

    const activeIds = Array.from(
      new Set(listings.map((l) => l.flower?.speciesId).filter((id) => !!id)),
    ) as string[]

    const speciesList = await speciesRepo.find({
      where: {
        $or: [
          { id: { $in: activeIds } },
          {
            availability: {
              $in: [FlowerAvailability.WILD, FlowerAvailability.SHOP_ONLY],
            },
          },
        ],
      },
      orderBy: { name: 'asc' },
    })

    return { listings, speciesList }
  }

  @BackendMethod({ allowed: true })
  static async getSpeciesMarketStats(speciesId: string, options: { after?: Date; before?: Date }) {
    const statsRepo = remult.repo(MarketStats)

    const afterDate = options.after ? new Date(options.after) : undefined
    const beforeDate = options.before ? new Date(options.before) : undefined

    const dateFilter: any = {}

    if (afterDate) {
      dateFilter.$gte = afterDate
    }

    if (beforeDate) {
      dateFilter.$lte = beforeDate
    }

    return await statsRepo.find({
      where: {
        speciesId: speciesId,
        date: dateFilter,
      },
      orderBy: { date: 'asc' },
    })
  }

  @BackendMethod({ allowed: true })
  static async getLastSaleStat(speciesId: string, beforeDate: Date) {
    const statsRepo = remult.repo(MarketStats)
    const dateLimit = new Date(beforeDate)

    return await statsRepo.findFirst(
      {
        speciesId,
        date: { $lt: dateLimit },
      },
      { orderBy: { date: 'desc' } }, // The latest known price of a flower
    )
  }

  /**
   * Calculates the recommended selling price for a specific flower
   * based on its Rarity, Quality, and current Market Conditions.
   */
  @BackendMethod({ allowed: true })
  static async getRecommendedPrice(speciesId: string, quality: number) {
    const statsRepo = remult.repo(MarketStats)
    const speciesRepo = remult.repo(FlowerSpecies)

    const species = await speciesRepo.findId(speciesId)
    if (!species) return 0

    const BASE_PRICES: Record<string, number> = {
      [FlowerRarity.COMMON]: 50,
      [FlowerRarity.UNCOMMON]: 150,
      [FlowerRarity.RARE]: 400,
      [FlowerRarity.EPIC]: 1000,
      [FlowerRarity.LEGENDARY]: 3000,
    }

    const VOLATILITY: Record<string, number> = {
      [FlowerRarity.COMMON]: 0.5,
      [FlowerRarity.UNCOMMON]: 1.0,
      [FlowerRarity.RARE]: 2.0,
      [FlowerRarity.EPIC]: 4.0,
      [FlowerRarity.LEGENDARY]: 8.0,
    }

    const lastStat = await statsRepo.findFirst({ speciesId }, { orderBy: { date: 'desc' } })

    let pivotPrice = lastStat?.averagePrice || BASE_PRICES[species.rarity] || 50

    const minFloor = (BASE_PRICES[species.rarity] || 50) * 0.2
    if (pivotPrice < minFloor) pivotPrice = minFloor

    const K = VOLATILITY[species.rarity] || 0.5
    const numerator = 1 + K * Math.pow(quality, 2)
    const denominator = 1 + K * Math.pow(0.5, 2)

    const multiplier = numerator / denominator

    return Math.round(pivotPrice * multiplier)
  }

  // Internal helper
  static async updateDailyStats(speciesId: string, price: number) {
    const statsRepo = remult.repo(MarketStats)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let stat = await statsRepo.findFirst({ speciesId, date: today })

    if (!stat) {
      stat = statsRepo.create({
        speciesId,
        date: today,
        minPrice: price,
        maxPrice: price,
        averagePrice: price,
        volume: 1,
      })
    } else {
      const totalValue = stat.averagePrice * stat.volume + price
      stat.volume += 1
      stat.averagePrice = Math.round(totalValue / stat.volume)
      stat.minPrice = Math.min(stat.minPrice, price)
      stat.maxPrice = Math.max(stat.maxPrice, price)
    }

    await statsRepo.save(stat)
  }
}
