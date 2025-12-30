import { StoreItem } from '@/shared/economy/StoreItem'
import { BackendMethod, remult } from 'remult'

export class PaymentController {
  @BackendMethod({ allowed: true })
  static async getStoreItems() {
    return await remult.repo(StoreItem).find({
      orderBy: { price: 'asc' },
    })
  }

  @BackendMethod({ allowed: true })
  static async initiatePurchase(itemId: string) {
    if (!remult.user) throw new Error('Not logged in')

    const item = await remult.repo(StoreItem).findId(itemId)
    if (!item) throw new Error('Item not found')

    // HERE: Integrate Stripe/PayPal SDK
    // For now, we simulate a successful transaction

    console.log(`User ${remult.user.name} bought ${item.name} for $${item.price}`)

    return { success: true, message: `Successfully purchased ${item.name}!` }
  }
}
