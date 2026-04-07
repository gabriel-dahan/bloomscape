import { StoreItem, CurrencyType } from '@/shared/economy/StoreItem'
import { GlobalBank, GLOBAL_BANK_ID } from '@/shared/economy/GlobalBank'
import { User } from '@/shared/user/User'
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

    const userRepo = remult.repo(User)
    const currentUser = await userRepo.findId(remult.user.id)
    if (!currentUser) throw new Error('User not found')

    const bankRepo = remult.repo(GlobalBank)
    const updateBank = async (currency: 'sap' | 'rubies', amount: number) => {
        let bank = await bankRepo.findFirst()
        if (!bank) bank = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 1000000, rubies: 0 })
        bank[currency] += amount
        await bankRepo.save(bank)
    }

    if (item.currency === CurrencyType.SAP) {
      if (currentUser.sap < item.price) throw new Error('Insufficient Sap')
      currentUser.sap -= item.price
      await userRepo.save(currentUser)
      await updateBank('sap', item.price)
    } else if (item.currency === CurrencyType.RUBY) {
      if (currentUser.rubies < item.price) throw new Error('Insufficient Rubies')
      currentUser.rubies -= item.price
      await userRepo.save(currentUser)
      await updateBank('rubies', item.price)
    } else {
      // USD - Real world currency
      // HERE: Integrate Stripe/PayPal SDK
      // For now, we simulate a successful transaction
      console.log(`User ${remult.user.name} bought ${item.name} for $${item.price}`)
    }

    return { success: true, message: `Successfully purchased ${item.name}!` }
  }
}
