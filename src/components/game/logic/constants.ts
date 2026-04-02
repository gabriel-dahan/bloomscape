import * as THREE from 'three'
export interface TileData {
  x: number
  z: number
  flowerId?: string
  contentId?: string
  flower?: {
    status: string
    species?: {
      slugName: string
      attributes?: {
        synergies?: Array<{
          targetSlug: string
          modifiers: Array<{ stat: string; value: number }>
        }>
      }
    }
  } | null
}

export const WORLD_SIZE = 60
export const WATER_ANIM_SPEED = 200
export const TILE_SCALE = 0.98

export const COLORS = {
  highlight: 0x333399,
  selection: 0x3333cc,
  owned: 0x10b981,
  grid: 0xffffff,
  waterBase: 0xffffff,
  firefly: new THREE.Color(0xffcc00),
  synergyBuff: 0x3b82f6,
  synergyDebuff: 0xef4444,
}

export const CYCLE_KEYS = [
  {
    progress: 0.0,
    sky: new THREE.Color(0x020617),
    light: new THREE.Color(0xc7d2fe),
    ambient: 0.9,
    dir: 1.2,
    focus: 4.0,
  },
  {
    progress: 0.2,
    sky: new THREE.Color(0x020617),
    light: new THREE.Color(0xc7d2fe),
    ambient: 0.9,
    dir: 1.2,
    focus: 4.0,
  },
  {
    progress: 0.35,
    sky: new THREE.Color(0x87ceeb),
    light: new THREE.Color(0xffffff),
    ambient: 0.95,
    dir: 1.5,
    focus: 1.0,
  },
  {
    progress: 0.8,
    sky: new THREE.Color(0x87ceeb),
    light: new THREE.Color(0xffffff),
    ambient: 0.95,
    dir: 1.5,
    focus: 1.0,
  },
  {
    progress: 1.0,
    sky: new THREE.Color(0x020617),
    light: new THREE.Color(0xc7d2fe),
    ambient: 0.9,
    dir: 1.2,
    focus: 4.0,
  },
]

export interface SceneConfig {
  quality: 'low' | 'high'
  tileSize: number
  onHover: (x: number, z: number) => void
  onClick?: (x: number, z: number) => void
  onAssetsLoaded?: () => void
}

export type WaterCategory = 'open' | '1side' | '2sides' | '3sides' | '4sides'
