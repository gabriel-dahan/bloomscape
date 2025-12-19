import * as THREE from 'three'
import { ITEM_REGISTRY } from '../config/ItemRegistery'
import { TileData } from './LandSceneManager'

export class WorldElementManager {
  private scene: THREE.Scene
  private meshMap: Map<string, THREE.InstancedMesh> = new Map()
  private dummy: THREE.Object3D = new THREE.Object3D()

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  public updateElements(tiles: TileData[]) {
    // 1. Group tiles by their contentId
    const groups: Record<string, TileData[]> = {}

    tiles.forEach((tile) => {
      if (tile.contentId && ITEM_REGISTRY[tile.contentId]) {
        if (!groups[tile.contentId]) groups[tile.contentId] = []
        groups[tile.contentId].push(tile)
      }
    })

    // 2. Process each group
    for (const [itemId, config] of Object.entries(ITEM_REGISTRY)) {
      const itemsToRender = groups[itemId] || []

      // Get or Create the InstancedMesh for this item type
      let mesh = this.meshMap.get(itemId)

      if (!mesh) {
        // Create new InstancedMesh with buffer for 1000 items (resizable)
        mesh = new THREE.InstancedMesh(config.geometry, config.material, 2000)
        mesh.receiveShadow = true
        mesh.castShadow = true
        this.scene.add(mesh)
        this.meshMap.set(itemId, mesh)
      }

      // 3. Update instances
      mesh.count = itemsToRender.length

      itemsToRender.forEach((tile, index) => {
        this.dummy.position.set(tile.x, 0.25 + config.yOffset, tile.z)
        this.dummy.scale.set(config.scale, config.scale, config.scale)
        this.dummy.updateMatrix()

        mesh!.setMatrixAt(index, this.dummy.matrix)
      })

      mesh.instanceMatrix.needsUpdate = true
    }
  }

  public dispose() {
    this.meshMap.forEach((mesh) => {
      this.scene.remove(mesh)
      mesh.geometry.dispose()
      // Don't dispose shared materials here if they are consts in Registry,
      // or handle carefully.
    })
    this.meshMap.clear()
  }
}
