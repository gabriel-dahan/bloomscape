import { BackendMethod, Controller, remult } from 'remult'
import { User } from '@/shared/user/User'
import { UserSettings } from '@/shared/user/UserSettings'

@Controller('settings')
export class SettingsController {
  @BackendMethod({ allowed: true })
  static async getSettings() {
    if (!remult.user) throw new Error('Not authenticated')

    const userRepo = remult.repo(User)
    const settingsRepo = remult.repo(UserSettings)

    const user = await userRepo.findId(remult.user.id)
    if (!user) throw new Error('User not found')

    let settings = await settingsRepo.findId(remult.user.id)
    if (!settings) {
      settings = await settingsRepo.insert({ id: remult.user.id })
    }

    return {
      userVal: {
        description: user.description,
        tag: user.tag,
        email: user.email,
      },
      settingsVal: settings,
    }
  }

  @BackendMethod({ allowed: true })
  static async saveSettings(userUpdates: Partial<User>, settingsUpdates: Partial<UserSettings>) {
    if (!remult.user) throw new Error('Not authenticated')

    const userRepo = remult.repo(User)
    const settingsRepo = remult.repo(UserSettings)

    const user = await userRepo.findId(remult.user.id)
    if (!user) throw new Error('User not found')

    // Update User fields (whitelist)
    if (userUpdates.description !== undefined) user.description = userUpdates.description
    // if (userUpdates.tag !== undefined) user.tag = userUpdates.tag // Use specific method for tag change to handle duplication/slugs if needed

    await userRepo.save(user)

    // Update Settings fields
    let settings = await settingsRepo.findId(remult.user.id)
    if (!settings) {
      settings = await settingsRepo.insert({ id: remult.user.id, ...settingsUpdates })
    } else {
      // Apply updates
      Object.assign(settings, settingsUpdates)
      await settingsRepo.save(settings)
    }

    return { success: true }
  }
}
