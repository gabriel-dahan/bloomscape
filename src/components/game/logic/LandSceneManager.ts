// ---- IMPORTS ---- //
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// ---- CONFIGURATION GLOBALE ---- //
const WORLD_SIZE = 100 // Map size (100x100 tiles)
const COLORS = {
  // We keep these for UI/Game logic elements, but background is now an image
  highlight: 0x38bdf8, // Sky 400
  owned: 0x10b981, // Emerald 500
  grid: 0xffffff,
}

// ---- TYPES ---- //
export interface SceneConfig {
  quality: 'low' | 'high'
  tileSize: number
  onHover: (x: number, z: number) => void
}

export interface TileData {
  x: number
  z: number
}

// ---- CLASS DEFINITION ---- //
export class LandSceneManager {
  private scene!: THREE.Scene
  private camera!: THREE.OrthographicCamera
  private renderer!: THREE.WebGLRenderer
  private controls!: OrbitControls
  private raycaster: THREE.Raycaster
  private mouse: THREE.Vector2
  private animationId: number = 0

  // 3D Objects
  private planeMesh!: THREE.Mesh
  private cursorMesh!: THREE.Mesh
  private ownedTilesMesh!: THREE.InstancedMesh

  private container: HTMLElement | null = null
  private config: SceneConfig

  constructor(config: SceneConfig) {
    this.config = config
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    // Binds
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
  }

  // ---- INITIALIZATION ---- //
  public init(container: HTMLElement) {
    this.container = container

    // Cleanup
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }

    const width = this.container.clientWidth
    const height = this.container.clientHeight

    // 1. Scene
    this.scene = new THREE.Scene()

    // --- LOAD BACKGROUND IMAGE (SKY) ---
    // Using a standard equirectangular sky texture
    const textureLoader = new THREE.TextureLoader()
    const skyTexture = textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/2294472375_24a3b8ef46_o.jpg',
    )
    skyTexture.mapping = THREE.EquirectangularReflectionMapping
    skyTexture.colorSpace = THREE.SRGBColorSpace

    this.scene.background = skyTexture
    this.scene.environment = skyTexture // Also provides nice reflections on materials

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    this.scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.5)
    dirLight.position.set(50, 80, 40)
    dirLight.castShadow = true

    // Shadow Config
    const d = WORLD_SIZE * this.config.tileSize * 0.6
    dirLight.shadow.camera.left = -d
    dirLight.shadow.camera.right = d
    dirLight.shadow.camera.top = d
    dirLight.shadow.camera.bottom = -d
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    this.scene.add(dirLight)

    // 3. Camera (Iso)
    const aspect = width / height
    const frustumSize = 40
    this.camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000,
    )
    this.camera.position.set(40, 40, 40)
    this.camera.lookAt(0, 0, 0)

    // 4. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.config.quality === 'high',
      alpha: false, // We use scene.background
      logarithmicDepthBuffer: true,
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.container.appendChild(this.renderer.domElement)

    // 5. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minZoom = 0.5
    this.controls.maxZoom = 4
    this.controls.maxPolarAngle = Math.PI / 2.1

    this.createWorld()
    this.addEventListeners()
    this.animate()
  }

  // ---- WORLD GENERATION ---- //
  private createWorld() {
    const { tileSize } = this.config
    const totalSize = WORLD_SIZE * tileSize

    // --- LOAD GROUND IMAGE (WATER) ---
    const textureLoader = new THREE.TextureLoader()
    const waterTexture = textureLoader.load(
      'https://img.freepik.com/vecteurs-premium/vagues-eau-pixel-art-motif-sans-couture-texture-surface-mer-ocean-sprite-8-bits_418367-233.jpg',
    )

    // Repeat the texture so it doesn't look stretched
    waterTexture.wrapS = THREE.RepeatWrapping
    waterTexture.wrapT = THREE.RepeatWrapping
    waterTexture.repeat.set(10, 10)
    waterTexture.colorSpace = THREE.SRGBColorSpace

    // 1. The Ocean Plane
    const geometry = new THREE.PlaneGeometry(totalSize, totalSize)
    const material = new THREE.MeshStandardMaterial({
      map: waterTexture, // Apply the image
      roughness: 0.1, // Shiny
      metalness: 0.1,
      side: THREE.DoubleSide,
    })

    this.planeMesh = new THREE.Mesh(geometry, material)
    this.planeMesh.rotation.x = -Math.PI / 2
    this.planeMesh.receiveShadow = true
    this.scene.add(this.planeMesh)

    // 2. Grid Helper
    const gridHelper = new THREE.GridHelper(totalSize, WORLD_SIZE, COLORS.grid, COLORS.grid)
    gridHelper.position.y = 0.05
    gridHelper.material.opacity = 0.15
    gridHelper.material.transparent = true
    this.scene.add(gridHelper)

    // 3. Cursor
    const cursorGeo = new THREE.PlaneGeometry(tileSize, tileSize)
    const cursorMat = new THREE.MeshBasicMaterial({
      color: COLORS.highlight,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    })
    this.cursorMesh = new THREE.Mesh(cursorGeo, cursorMat)
    this.cursorMesh.rotation.x = -Math.PI / 2
    this.cursorMesh.visible = false
    this.cursorMesh.position.y = 0.1
    this.scene.add(this.cursorMesh)

    // 4. InstancedMesh (User Tiles)
    const instanceGeo = new THREE.BoxGeometry(tileSize * 0.95, 0.5, tileSize * 0.95)
    const instanceMat = new THREE.MeshStandardMaterial({ color: COLORS.owned })

    this.ownedTilesMesh = new THREE.InstancedMesh(instanceGeo, instanceMat, 2000)
    this.ownedTilesMesh.receiveShadow = true
    this.ownedTilesMesh.castShadow = true
    this.ownedTilesMesh.count = 0
    this.scene.add(this.ownedTilesMesh)
  }

  // ---- DATA BINDING ---- //
  public updateTiles(tiles: TileData[]) {
    if (!this.ownedTilesMesh) return

    this.ownedTilesMesh.count = tiles.length
    const dummy = new THREE.Object3D()

    tiles.forEach((tile, index) => {
      dummy.position.set(tile.x, 0.25, tile.z)
      dummy.updateMatrix()
      this.ownedTilesMesh.setMatrixAt(index, dummy.matrix)
    })

    this.ownedTilesMesh.instanceMatrix.needsUpdate = true
  }

  // ---- EVENTS & RAYCASTING ---- //
  private addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onWindowResize)
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.planeMesh) return

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    this.raycaster.setFromCamera(this.mouse, this.camera)
    const intersects = this.raycaster.intersectObject(this.planeMesh)

    if (intersects.length > 0) {
      const point = intersects[0].point
      const { tileSize } = this.config

      const halfTile = tileSize / 2
      const x = Math.floor((point.x + halfTile) / tileSize) * tileSize
      const z = Math.floor((point.z + halfTile) / tileSize) * tileSize

      const limit = (WORLD_SIZE * tileSize) / 2

      if (Math.abs(x) < limit && Math.abs(z) < limit) {
        this.cursorMesh.position.set(x, 0.15, z)
        this.cursorMesh.visible = true
        this.config.onHover(x, z)
      } else {
        this.cursorMesh.visible = false
        this.config.onHover(NaN, NaN)
      }
    } else {
      this.cursorMesh.visible = false
      this.config.onHover(NaN, NaN)
    }
  }

  private onWindowResize() {
    if (!this.container || !this.camera || !this.renderer) return
    const width = window.innerWidth
    const height = window.innerHeight
    const aspect = width / height
    const frustumSize = 40

    this.camera.left = (-frustumSize * aspect) / 2
    this.camera.right = (frustumSize * aspect) / 2
    this.camera.top = frustumSize / 2
    this.camera.bottom = -frustumSize / 2
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  // ---- LOOP ---- //
  private animate(time: number = 0) {
    this.animationId = requestAnimationFrame((t) => this.animate(t))
    if (this.controls) this.controls.update()

    // No vertex displacement loop anymore (simple texture)

    this.renderer.render(this.scene, this.camera)
  }

  // ---- CLEANUP ---- //
  public dispose() {
    cancelAnimationFrame(this.animationId)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onWindowResize)

    if (this.renderer) {
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)
      }
    }

    if (this.controls) this.controls.dispose()
    if (this.scene) this.scene.clear()
  }
}
