import * as THREE from 'three'
import { ITEM_REGISTRY } from '../config/ItemRegistery'
import { TileData } from './LandSceneManager'

export class WorldElementManager {
  private scene: THREE.Scene
  private meshMap: Map<string, THREE.InstancedMesh> = new Map()
  private dummy: THREE.Object3D = new THREE.Object3D()
  private textureLoader: THREE.TextureLoader

  constructor(scene: THREE.Scene, loader: THREE.TextureLoader) {
    this.scene = scene
    this.textureLoader = loader
  }

  public updateElements(tiles: TileData[]) {
    const groups: Record<string, TileData[]> = {}

    tiles.forEach((tile) => {
      if (tile.contentId && ITEM_REGISTRY[tile.contentId]) {
        if (!groups[tile.contentId]) groups[tile.contentId] = []
        groups[tile.contentId].push(tile)
      }
    })

    for (const [itemId, config] of Object.entries(ITEM_REGISTRY)) {
      const itemsToRender = groups[itemId] || []

      let mesh = this.meshMap.get(itemId)

      if (!mesh) {
        mesh = new THREE.InstancedMesh(config.geometry, config.material, 2000)
        mesh.receiveShadow = true
        mesh.castShadow = true
        this.scene.add(mesh)
        this.meshMap.set(itemId, mesh)
      }

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
    })
    this.meshMap.clear()
  }
}
