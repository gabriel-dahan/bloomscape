import * as THREE from 'three'

export interface ItemConfig {
  id: string
  geometry: THREE.BufferGeometry
  material: THREE.Material
  yOffset: number // To adjust if the model anchor is center or bottom
  scale: number
}

// Reusable geometries/materials to save memory
const geoTree = new THREE.ConeGeometry(0.3, 1, 8)
const matTree = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, flatShading: true })

const geoRock = new THREE.DodecahedronGeometry(0.3)
const matRock = new THREE.MeshStandardMaterial({ color: 0x8d99ae, flatShading: true })

export const ITEM_REGISTRY: Record<string, ItemConfig> = {
  tree_pine: {
    id: 'tree_pine',
    geometry: geoTree,
    material: matTree,
    yOffset: 0.5, // Shift up so base is on ground
    scale: 1,
  },
  rock_small: {
    id: 'rock_small',
    geometry: geoRock,
    material: matRock,
    yOffset: 0.15,
    scale: 1,
  },
}
