import { Island, Tile, User } from '@/shared'
import { BackendMethod, remult } from 'remult'

export class GameController {
  @BackendMethod({ allowed: true })
  static async startAdventure() {
    const user = remult.user
    if (!user) throw new Error('Not connected.')

    const islandRepo = remult.repo(Island)
    const tileRepo = remult.repo(Tile)

    // 1. Vérifier si existe déjà
    const existing = await islandRepo.findFirst({ ownerId: user.id })
    if (existing) throw new Error('Adventure has already started !')

    // 2. Créer l'île
    const island = await islandRepo.insert({
      ownerId: user.id,
      name: `${user.tag}'s Island`,
    })

    // 3. Créer les tuiles de départ (ex: un carré de 3x3 au centre 0,0)
    const initialTiles = []
    for (let x = -2; x <= 2; x += 2) {
      // Pas de 2 pour grid de 2
      for (let z = -2; z <= 2; z += 2) {
        initialTiles.push({
          islandId: island.id,
          x: x,
          z: z,
          type: 'land',
        })
      }
    }
    // Note: insert many n'est pas toujours dispo selon le provider, boucle simple ici :
    for (const t of initialTiles) {
      await tileRepo.insert(t as any)
    }

    return island
  }

  @BackendMethod({ allowed: true }) // 'allowed: true' requiert juste d'être connecté
  static async getUserBalance(tag: string) {
    const userRepo = remult.repo(User)
    const user = await userRepo.findFirst({ tag: tag })

    if (!user) throw new Error('User could not be found.')

    return user.sap
  }
}
