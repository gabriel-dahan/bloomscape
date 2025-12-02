import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { remult } from 'remult'
import { Island, Tile } from '@/shared'
import { GameController } from '@/server/controllers/GameController'

export const useGameStore = defineStore('game', () => {
  const islandRepo = remult.repo(Island)
  const tileRepo = remult.repo(Tile)

  const currentIsland = ref<Island | null>(null)
  const tiles = ref<Tile[]>([])
  const hoveredTile = ref<any>(null)
  const isLoading = ref(false)

  // Fetch l'ile et ses tuiles pour un User donné
  async function fetchIslandData(userId: string) {
    isLoading.value = true
    currentIsland.value = null
    tiles.value = []

    try {
      const island = await islandRepo.findFirst({ ownerId: userId })
      if (island) {
        currentIsland.value = island
        // On récupère les tuiles de cette île
        tiles.value = await tileRepo.find({
          where: { islandId: island.id },
        })
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  async function startAdventure() {
    isLoading.value = true
    try {
      await GameController.startAdventure()
      // Recharger les données de l'utilisateur courant
      if (remult.user) {
        await fetchIslandData(remult.user.id)
      }
    } catch (e) {
      alert(e.message)
    } finally {
      isLoading.value = false
    }
  }

  function getTileAt(x: number, z: number) {
    return tiles.value.find((t) => t.x === x && t.z === z)
  }

  function setHoveredTile(t: any) {
    hoveredTile.value = t
  }

  return {
    currentIsland,
    tiles,
    hoveredTile,
    isLoading,
    fetchIslandData,
    startAdventure,
    getTileAt,
    setHoveredTile,
  }
})
