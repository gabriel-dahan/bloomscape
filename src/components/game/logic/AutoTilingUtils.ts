// 1 = North, 2 = East, 4 = South, 8 = West

import type { TileData } from './LandSceneManager'

// Summing these gives a unique number from 0 to 15
export interface TileLayout {
  type: 'center' | 'edge' | 'corner' | 'tip' | 'island'
  rotation: number // in Radians
}

export const getTileLayout = (
  x: number,
  z: number,
  tileSize: number,
  allTiles: TileData[],
): TileLayout => {
  // Helper to check if a neighbor exists
  const has = (dx: number, dz: number) => allTiles.some((t) => t.x === x + dx && t.z === z + dz)

  // Calculate Bitmask
  let mask = 0
  if (has(0, tileSize)) mask += 1 // North
  if (has(tileSize, 0)) mask += 2 // East
  if (has(0, -tileSize)) mask += 4 // South
  if (has(-tileSize, 0)) mask += 8 // West

  const PI = Math.PI
  const hPI = Math.PI / 2

  // Lookup Table: Map mask to Shape + Rotation
  switch (mask) {
    // --- CENTER (Surrounded) ---
    case 15:
      return { type: 'center', rotation: 0 }

    // --- EDGES (3 Neighbors) ---
    case 14:
      return { type: 'edge', rotation: PI } // N-E-S (Missing West)
    case 13:
      return { type: 'edge', rotation: -hPI } // N-E-W (Missing South)
    case 11:
      return { type: 'edge', rotation: 0 } // N-S-W (Missing East)
    case 7:
      return { type: 'edge', rotation: hPI } // E-S-W (Missing North)

    // --- CORNERS (2 Neighbors) ---
    case 12:
      return { type: 'corner', rotation: 0 } // S-W (Corner is NE)
    case 6:
      return { type: 'corner', rotation: -hPI } // E-S (Corner is NW)
    case 3:
      return { type: 'corner', rotation: PI } // N-E (Corner is SW)
    case 9:
      return { type: 'corner', rotation: hPI } // N-W (Corner is SE)

    // --- TIPS (1 Neighbor) - Optional, can reuse corner or edge ---
    // For simplicity, let's treat tips like corners or define a specific logic
    case 8:
      return { type: 'corner', rotation: hPI }
    case 4:
      return { type: 'corner', rotation: 0 }
    case 2:
      return { type: 'corner', rotation: -hPI }
    case 1:
      return { type: 'corner', rotation: PI }

    // --- ISLAND (0 Neighbors) ---
    case 0:
      return { type: 'center', rotation: 0 } // Or specific single island mesh

    default:
      return { type: 'center', rotation: 0 } // Fallback
  }
}
