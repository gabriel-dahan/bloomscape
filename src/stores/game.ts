import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TileData {
  id: number
  x: number
  z: number
  owner: string | null
  type: 'land' | 'water' | 'forest'
}

export const useGameStore = defineStore('game', () => {
  const hoveredTile = ref<TileData | null>(null)

  const selectedTile = ref<TileData | null>(null)

  const playerBalance = ref(24500)

  function setHoveredTile(tile: TileData | null) {
    hoveredTile.value = tile
  }

  function selectTile(tile: TileData) {
    selectedTile.value = tile
  }

  return {
    hoveredTile,
    selectedTile,
    playerBalance,
    setHoveredTile,
    selectTile,
  }
})
