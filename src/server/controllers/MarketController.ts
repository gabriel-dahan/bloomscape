import { MarketHistory, MarketListing, User, UserFlower } from '@/shared'
import { BackendMethod, remult } from 'remult'

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

    buyer.sap -= listing.price
    // Optional: Fetch seller and give them money (minus tax?)
    const seller = await userRepo.findId(listing.sellerId)
    if (seller) {
      seller.sap += listing.price
      await userRepo.save(seller)
    }
    await userRepo.save(buyer)

    if (listing.flower) {
      listing.flower.ownerId = buyer.id
      await flowerRepo.save(listing.flower)
    }

    await historyRepo.insert({
      speciesId: listing.flower?.speciesId || '',
      price: listing.price,
      soldAt: new Date(),
    })

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
}
