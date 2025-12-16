import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { remult } from 'remult'
import { GameController } from '@/server/controllers/GameController'
import { Island, Tile } from '@/shared'
import { useModalStore } from './modal'

// UI Helper Type
export interface TileInteraction {
  x: number
  z: number
  id?: string
  isOwned: boolean
  isAdjacentToLand: boolean
}

export const useGameStore = defineStore('game', () => {
  const islandRepo = remult.repo(Island)
  const tileRepo = remult.repo(Tile)

  const currentIsland = ref<Island | null>(null)
  const tiles = ref<Tile[]>([])

  const hoveredTile = ref<TileInteraction | null>(null)
  const selectedTile = ref<TileInteraction | null>(null)

  const isLoading = ref(false)
  const playerBalance = ref(0)

  // Computed: Get the full Database Entity for the selected tile
  const selectedEntity = computed(() => {
    if (!selectedTile.value) return null
    return (
      tiles.value.find((t) => t.x === selectedTile.value?.x && t.z === selectedTile.value?.z) ||
      null
    )
  })

  // --- ACTIONS ---

  async function fetchIslandData(userId: string) {
    isLoading.value = true
    currentIsland.value = null
    tiles.value = []

    try {
      const island = await islandRepo.findFirst({ ownerId: userId })
      if (island) {
        currentIsland.value = island
        // Fetch tiles for this island
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
      if (remult.user) {
        await fetchIslandData(remult.user.id)
        await fetchBalance()
      }
    } catch (e: any) {
      alert(e.message)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchBalance() {
    if (!remult.user) return
    try {
      playerBalance.value = await GameController.getUserBalance(remult.user.tag)
    } catch (error) {
      console.error('Error fetching balance:', error)
    }
  }

  async function buyTile(x: number, z: number) {
    if (!currentIsland.value) return

    isLoading.value = true

    try {
      const newTile = await GameController.buyLand(x, z)
      tiles.value.push(newTile)

      if (selectedTile.value && selectedTile.value.x === x && selectedTile.value.z === z) {
        selectedTile.value.isOwned = true
        selectedTile.value.id = newTile.id
      }
    } catch (e: any) {
      const modal = useModalStore()
      modal.open({
        title: 'Purchase Failed',
        message: e.message,
        type: 'error',
      })
    } finally {
      isLoading.value = false
    }
  }

  function getTileAt(x: number, z: number) {
    return tiles.value.find((t) => t.x === x && t.z === z)
  }

  function setHoveredTile(t: TileInteraction | null) {
    hoveredTile.value = t
  }

  function selectTile(t: TileInteraction | null) {
    selectedTile.value = t
  }

  return {
    currentIsland,
    tiles,
    hoveredTile,
    selectedTile,
    selectedEntity,
    playerBalance,
    isLoading,
    fetchIslandData,
    fetchBalance,
    startAdventure,
    buyTile,
    getTileAt,
    setHoveredTile,
    selectTile,
  }
})
