import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { remult } from 'remult'
import { useAuthStore } from './auth'
import { getLevelProgress } from '@/shared/leveling'
import { Island, Tile } from '@/shared'
import { GameController } from '@/server/controllers/GameController'

export interface TileInteraction {
  x: number
  z: number
  id?: string
  isOwned: boolean
  isAdjacentToLand: boolean
}

export const useGameStore = defineStore('game', () => {
  const authStore = useAuthStore()

  const currentIsland = ref<Island | null>(null)
  const tiles = ref<Tile[]>([])
  const hoveredTile = ref<TileInteraction | null>(null)
  const selectedTile = ref<TileInteraction | null>(null)
  const isLoading = ref(false)
  const playerBalance = ref(0)

  const viewedUserTotalXp = ref<number | null>(null)

  const xpProgress = computed(() => {
    if (viewedUserTotalXp.value !== null) {
      return getLevelProgress(viewedUserTotalXp.value)
    }

    // Fallback to logged-in user
    const xp = authStore.user?.xp || 0
    return getLevelProgress(xp)
  })

  const selectedEntity = computed(() => {
    if (!selectedTile.value) return null
    return (
      tiles.value.find((t) => t.x === selectedTile.value?.x && t.z === selectedTile.value?.z) ||
      null
    )
  })

  // NEW: Action to set the context (Call this when loading a User Profile)
  function setXPContext(xp: number | null) {
    viewedUserTotalXp.value = xp
  }

  async function fetchIslandData(userId: string) {
    isLoading.value = true
    currentIsland.value = null
    tiles.value = []

    try {
      const result = await GameController.getIslandDetails(userId)
      if (result) {
        currentIsland.value = result.island
        tiles.value = result.tiles
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
        // Reset view context to self when starting own adventure
        setXPContext(null)
      }
    } catch (e: any) {
      alert(e.message)
    } finally {
      isLoading.value = false
    }
  }

  async function getMonthScore() {
    if (!currentIsland.value) return 0

    try {
      const score = await GameController.getMonthScore(currentIsland.value.id)
      return score
    } catch (e) {
      console.error(e)
      return 0
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
      await fetchBalance()
    } catch (e: any) {
      console.error(e)
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
    xpProgress,
    setXPContext,
    fetchIslandData,
    fetchBalance,
    startAdventure,
    buyTile,
    getTileAt,
    setHoveredTile,
    selectTile,
    getMonthScore,
  }
})
