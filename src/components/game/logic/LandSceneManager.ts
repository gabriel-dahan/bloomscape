import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { WorldElementManager } from './WorldElementsManager'
import { getTileLayout } from './AutoTilingUtils'
import { calculateGameTime } from '@/shared/gameTime'
import { useUIStore } from '@/stores/ui'

const WORLD_SIZE = 60
const WATER_ANIM_SPEED = 200
const TILE_SCALE = 0.98

const COLORS = {
  highlight: 0x333399,
  selection: 0x3333cc,
  owned: 0x10b981,
  grid: 0xffffff,
  waterBase: 0xffffff,
  firefly: new THREE.Color(0xffcc00),
}

const CYCLE_KEYS = [
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

export interface TileData {
  x: number
  z: number
  flowerId?: string
  flower?: {
    status: string
    species?: { slugName: string }
  } | null
}

type WaterCategory = 'open' | '1side' | '2sides' | '3sides' | '4sides'

const FireflyVertexShader = `
uniform float uTime;
uniform float uSize;
attribute float aPhase;
attribute float aYBase;

void main() {
  vec3 pos = position;
  float yOffset = sin(uTime * 1.5 + aPhase) * 0.4; 
  pos.y = aYBase + yOffset;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  gl_PointSize = uSize * (30.0 / -mvPosition.z);
}
`

const FireflyFragmentShader = `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;

void main() {
  vec2 p = gl_PointCoord - vec2(0.5);
  
  float dist = max(abs(p.x), abs(p.y));
  float isCore = step(dist, 0.1); 
  float isBody = step(dist, 0.25); 
  float isGlow = step(dist, 0.5);

  if (isGlow < 0.1) discard;

  vec3 finalColor = uColor;
  float finalAlpha = uOpacity * 0.2; 

  if (isBody > 0.5) {
    finalAlpha = uOpacity * 0.8; 
  }

  if (isCore > 0.5) {
    finalColor = mix(uColor, vec3(1.0, 1.0, 1.0), 0.9); 
    finalAlpha = uOpacity; 
  }

  float blink = sin(uTime * 4.0 + gl_FragCoord.x * 0.1);
  float steppedBlink = smoothstep(-0.2, 0.2, blink);
  float intensity = 0.7 + 0.3 * steppedBlink;

  gl_FragColor = vec4(finalColor, finalAlpha * intensity);
}
`

export class LandSceneManager {
  private scene!: THREE.Scene
  private camera!: THREE.OrthographicCamera
  private renderer!: THREE.WebGLRenderer
  private controls!: OrbitControls
  private raycaster: THREE.Raycaster
  private mouse: THREE.Vector2
  private animationId: number = 0
  private loader: THREE.TextureLoader
  private interfaceStore: ReturnType<typeof useUIStore>

  private ambientLight!: THREE.AmbientLight
  private dirLight!: THREE.DirectionalLight
  private focusLight!: THREE.SpotLight

  private fireflies!: THREE.Points
  private fireflyUniforms!: {
    uTime: { value: number }
    uOpacity: { value: number }
    uColor: { value: THREE.Color }
    uSize: { value: number }
  }

  private loadingManager: THREE.LoadingManager

  private elementManager: WorldElementManager

  private cursorMesh!: THREE.Mesh
  private selectionMesh!: THREE.Object3D
  private raycastPlane!: THREE.Mesh
  private onDownPosition = new THREE.Vector2()

  private waterTextureSets: Record<WaterCategory, THREE.Texture[]> = {
    open: [],
    '1side': [],
    '2sides': [],
    '3sides': [],
    '4sides': [],
  }
  private waterMeshes: Record<WaterCategory, THREE.InstancedMesh | null> = {
    open: null,
    '1side': null,
    '2sides': null,
    '3sides': null,
    '4sides': null,
  }
  private currentWaterFrame: number = 0
  private lastWaterUpdate: number = 0

  private meshCenter!: THREE.InstancedMesh
  private meshEdge!: THREE.InstancedMesh
  private meshCorner!: THREE.InstancedMesh

  private flowerMeshes = new Map<
    string,
    { mesh: THREE.Sprite; currentSlug: string; currentStatus: string }
  >()

  private container: HTMLElement | null = null
  private config: SceneConfig

  constructor(config: SceneConfig) {
    this.config = config
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.interfaceStore = useUIStore()

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseClick = this.onMouseClick.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)

    this.loadingManager = new THREE.LoadingManager()
    this.loadingManager.onLoad = () => {
      console.log('All textures and models loaded')
      if (this.config.onAssetsLoaded) {
        this.config.onAssetsLoaded()
      }
    }

    this.loader = new THREE.TextureLoader(this.loadingManager)
  }

  public init(container: HTMLElement) {
    this.container = container
    const textureLoader = new THREE.TextureLoader(this.loadingManager)

    this.loader = textureLoader

    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }

    const width = this.container.clientWidth
    const height = this.container.clientHeight

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x020617)

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.ambientLight)

    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    this.dirLight.position.set(50, 80, 40)
    this.dirLight.castShadow = true
    this.dirLight.shadow.mapSize.width = 2048
    this.dirLight.shadow.mapSize.height = 2048
    this.scene.add(this.dirLight)

    this.focusLight = new THREE.SpotLight(0xffffff, 1.0)
    this.focusLight.position.set(0, 60, 0)
    this.focusLight.angle = Math.PI / 6
    this.focusLight.penumbra = 0.5
    this.focusLight.decay = 1
    this.focusLight.distance = 150
    this.scene.add(this.focusLight)
    this.scene.add(this.focusLight.target)

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
    this.camera.zoom = 4.5

    this.renderer = new THREE.WebGLRenderer({
      antialias: this.config.quality === 'high',
      alpha: false,
      logarithmicDepthBuffer: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.renderer.toneMapping = THREE.LinearToneMapping
    this.renderer.toneMappingExposure = 1.2

    this.container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minZoom = 0.5
    this.controls.maxZoom = 4
    this.controls.enableRotate = false
    this.controls.enablePan = true
    this.controls.screenSpacePanning = true
    this.controls.minPolarAngle = Math.PI / 3 - 0.05
    this.controls.maxPolarAngle = Math.PI / 3 + 0.05
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: null }

    this.controls.touches = {
      ONE: THREE.TOUCH.PAN,
      TWO: THREE.TOUCH.DOLLY_PAN,
    }

    this.createWorld(textureLoader)
    this.createFireflies()

    this.elementManager = new WorldElementManager(this.scene, textureLoader)

    this.addEventListeners()
    this.animate(0)
  }

  private createWorld(loader: THREE.TextureLoader) {
    const { tileSize } = this.config

    const loadFrames = (folder: string): THREE.Texture[] => {
      const frames: THREE.Texture[] = []
      for (let i = 1; i <= 16; i++) {
        const tex = loader.load(`/textures/water/${folder}/frame${i}.png`)
        tex.magFilter = THREE.NearestFilter
        tex.minFilter = THREE.NearestFilter
        tex.colorSpace = THREE.SRGBColorSpace
        frames.push(tex)
      }
      return frames
    }

    const categories: WaterCategory[] = ['open', '1side', '2sides', '3sides', '4sides']
    categories.forEach((cat) => (this.waterTextureSets[cat] = loadFrames(cat)))

    const waterGeo = new THREE.PlaneGeometry(tileSize, tileSize)
    categories.forEach((cat) => {
      const mat = new THREE.MeshStandardMaterial({
        map: this.waterTextureSets[cat][0],
        color: COLORS.waterBase,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.InstancedMesh(waterGeo, mat, 4000)

      mesh.frustumCulled = false
      mesh.receiveShadow = true
      mesh.count = 0
      this.scene.add(mesh)
      this.waterMeshes[cat] = mesh
    })

    const raycastGeo = new THREE.PlaneGeometry(WORLD_SIZE * tileSize * 2, WORLD_SIZE * tileSize * 2)
    const raycastMat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })

    this.raycastPlane = new THREE.Mesh(raycastGeo, raycastMat)

    this.raycastPlane.rotation.x = -Math.PI / 2
    this.raycastPlane.position.y = 0.5

    this.scene.add(this.raycastPlane)

    const gridHelper = new THREE.GridHelper(
      WORLD_SIZE * tileSize,
      WORLD_SIZE,
      COLORS.grid,
      COLORS.grid,
    )
    gridHelper.position.set(tileSize / 2, 0.05, tileSize / 2)
    gridHelper.material.opacity = 0.15
    gridHelper.material.transparent = true
    this.scene.add(gridHelper)

    this.cursorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(tileSize, tileSize),
      new THREE.MeshBasicMaterial({
        color: COLORS.highlight,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      }),
    )
    this.cursorMesh.rotation.x = -Math.PI / 2
    this.cursorMesh.visible = false
    this.scene.add(this.cursorMesh)

    this.selectionMesh = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(tileSize, 0.55, tileSize)),
      new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2 }),
    )
    this.selectionMesh.visible = false
    this.scene.add(this.selectionMesh)

    const loadTex = (p: string) => {
      const t = loader.load(p)
      t.magFilter = THREE.NearestFilter
      t.minFilter = THREE.NearestFilter
      t.colorSpace = THREE.SRGBColorSpace
      return t
    }

    const texCenter = loadTex('/textures/soil_center.png')
    const texEdge = loadTex('/textures/soil_edge.png')
    const texCorner = loadTex('/textures/soil_corner.png')
    const texSideGrass = loadTex('/textures/land_grass_side.png')
    const texSideDirt = loadTex('/textures/soil_center.png')
    const texBottom = loadTex('/textures/land_bottom.png')

    const matOpts = { color: 0xffffff, roughness: 1.0, metalness: 0.0 }
    const matsCenter = [
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texCenter, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
    ]

    const matsEdge = [
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texEdge, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
    ]
    const matsCorner = [
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texCorner, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texBottom, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideGrass, ...matOpts }),
      new THREE.MeshStandardMaterial({ map: texSideDirt, ...matOpts }),
    ]

    const landGeo = new THREE.BoxGeometry(tileSize * TILE_SCALE, 0.5, tileSize * TILE_SCALE)

    this.meshCenter = new THREE.InstancedMesh(landGeo, matsCenter as any, 2000)
    this.meshEdge = new THREE.InstancedMesh(landGeo, matsEdge as any, 2000)
    this.meshCorner = new THREE.InstancedMesh(landGeo, matsCorner as any, 2000)
    ;[this.meshCenter, this.meshEdge, this.meshCorner].forEach((m) => {
      m.receiveShadow = true
      m.castShadow = true
      m.count = 0
      m.frustumCulled = false

      this.scene.add(m)
    })
  }

  private createFireflies() {
    const count = 150
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const phases = new Float32Array(count)
    const yBases = new Float32Array(count)

    const range = 50

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * range
      const z = (Math.random() - 0.5) * range
      const y = Math.random() * 5 + 1.5

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      phases[i] = Math.random() * Math.PI * 2
      yBases[i] = y
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
    geometry.setAttribute('aYBase', new THREE.BufferAttribute(yBases, 1))

    this.fireflyUniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uColor: { value: COLORS.firefly },
      uSize: { value: 40.0 * (window.devicePixelRatio || 1) },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: this.fireflyUniforms,
      vertexShader: FireflyVertexShader,
      fragmentShader: FireflyFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    this.fireflies = new THREE.Points(geometry, material)
    this.scene.add(this.fireflies)
  }

  public updateTiles(landTiles: TileData[]) {
    let cCenter = 0,
      cEdge = 0,
      cCorner = 0
    const dummy = new THREE.Object3D()
    const landSet = new Set<string>()

    landTiles.forEach((t) => landSet.add(`${t.x},${t.z}`))

    landTiles.forEach((tile) => {
      const layout = getTileLayout(tile.x, tile.z, this.config.tileSize, landTiles)
      dummy.position.set(tile.x, 0.25, tile.z)
      dummy.rotation.set(0, layout.rotation, 0)
      dummy.updateMatrix()

      if (layout.type === 'center') this.meshCenter.setMatrixAt(cCenter++, dummy.matrix)
      else if (layout.type === 'edge') this.meshEdge.setMatrixAt(cEdge++, dummy.matrix)
      else this.meshCorner.setMatrixAt(cCorner++, dummy.matrix)
    })

    this.meshCenter.count = cCenter
    this.meshEdge.count = cEdge
    this.meshCorner.count = cCorner
    ;[this.meshCenter, this.meshEdge, this.meshCorner].forEach(
      (m) => (m.instanceMatrix.needsUpdate = true),
    )

    this.elementManager.updateElements(landTiles)

    const waterCounts: Record<WaterCategory, number> = {
      open: 0,
      '1side': 0,
      '2sides': 0,
      '3sides': 0,
      '4sides': 0,
    }
    const { tileSize } = this.config
    const halfSize = (WORLD_SIZE * tileSize) / 2

    for (let x = -halfSize; x < halfSize; x += tileSize) {
      for (let z = -halfSize; z < halfSize; z += tileSize) {
        const gx = Math.round(x / tileSize) * tileSize
        const gz = Math.round(z / tileSize) * tileSize

        if (landSet.has(`${gx},${gz}`)) continue

        const n = landSet.has(`${gx},${gz - tileSize}`)
        const s = landSet.has(`${gx},${gz + tileSize}`)
        const e = landSet.has(`${gx + tileSize},${gz}`)
        const w = landSet.has(`${gx - tileSize},${gz}`)
        const neighbors = (n ? 1 : 0) + (s ? 1 : 0) + (e ? 1 : 0) + (w ? 1 : 0)

        let cat: WaterCategory = 'open'
        let rot = 0

        if (neighbors === 0) cat = 'open'
        else if (neighbors === 1) {
          cat = '1side'
          rot = n ? 0 : e ? -Math.PI / 2 : s ? Math.PI : Math.PI / 2
        } else if (neighbors === 2) {
          if (n && s) {
            cat = '2sides'
            rot = 0
          } else if (e && w) {
            cat = '2sides'
            rot = Math.PI / 2
          } else {
            cat = '2sides'
            if (n && e) rot = 0
            else if (e && s) rot = -Math.PI / 2
            else if (s && w) rot = Math.PI
            else if (w && n) rot = Math.PI / 2
          }
        } else if (neighbors === 3) {
          cat = '3sides'
          rot = !s ? 0 : !w ? -Math.PI / 2 : !n ? Math.PI : Math.PI / 2
        } else {
          cat = '4sides'
        }

        const mesh = this.waterMeshes[cat]
        if (mesh) {
          dummy.position.set(gx, 0, gz)
          dummy.rotation.set(-Math.PI / 2, 0, rot)
          dummy.updateMatrix()
          mesh.setMatrixAt(waterCounts[cat]++, dummy.matrix)
        }
      }
    }

    ;(Object.keys(this.waterMeshes) as WaterCategory[]).forEach((key) => {
      const mesh = this.waterMeshes[key]
      if (mesh) {
        mesh.count = waterCounts[key]
        mesh.instanceMatrix.needsUpdate = true
      }
    })

    this.updateFlowers(landTiles)
  }

  public updateFlowers(tiles: TileData[]) {
    const visitedKeys = new Set<string>()

    tiles.forEach((tile) => {
      if (!tile.flower || !tile.flower.species) return

      const key = `${tile.x},${tile.z}`
      visitedKeys.add(key)

      const existing = this.flowerMeshes.get(key)
      const slug = tile.flower.species.slugName
      const status = tile.flower.status

      if (existing) {
        if (existing.currentSlug !== slug || existing.currentStatus !== status) {
          this.loadFlowerTextureWithFallback(slug, status, (tex) => {
            existing.mesh.material.map = tex
            existing.mesh.material.needsUpdate = true
            existing.currentSlug = slug
            existing.currentStatus = status
          })
        }
      } else {
        const material = new THREE.SpriteMaterial({
          transparent: true,
          depthWrite: false,
        })

        const sprite = new THREE.Sprite(material)

        sprite.position.set(tile.x, 0.55, tile.z)
        sprite.scale.set(1.5, 1.5, 1.5)
        sprite.center.set(0.5, 0.0)

        sprite.renderOrder = 10

        this.scene.add(sprite)

        const entry = { mesh: sprite, currentSlug: slug, currentStatus: status }
        this.flowerMeshes.set(key, entry)

        this.loadFlowerTextureWithFallback(slug, status, (tex) => {
          sprite.material.map = tex
          sprite.material.needsUpdate = true
        })
      }
    })

    this.flowerMeshes.forEach((entry, key) => {
      if (!visitedKeys.has(key)) {
        this.scene.remove(entry.mesh)
        entry.mesh.material.dispose()
        entry.mesh.material.map?.dispose()
        this.flowerMeshes.delete(key)
      }
    })
  }

  private loadFlowerTextureWithFallback(
    slug: string,
    status: string,
    onLoaded: (tex: THREE.Texture) => void,
  ) {
    const setProps = (t: THREE.Texture) => {
      t.colorSpace = THREE.SRGBColorSpace
      t.magFilter = THREE.NearestFilter
      onLoaded(t)
    }
    const spriteUrl = `/api/images/flowers/${slug}/${status.toLowerCase()}/sprite?noFallback=True`
    const iconUrl = `/api/images/flowers/${slug}/${status.toLowerCase()}/icon`

    this.loader.load(spriteUrl, setProps, undefined, () => {
      this.loader.load(iconUrl, setProps, undefined, (e) =>
        console.warn(`Missing flower tex: ${slug}`, e),
      )
    })
  }

  public isAdjacentToLand(x: number, z: number, existingTiles: TileData[]): boolean {
    const { tileSize } = this.config
    const neighbors = [
      { dx: 0, dz: tileSize },
      { dx: tileSize, dz: 0 },
      { dx: 0, dz: -tileSize },
      { dx: -tileSize, dz: 0 },
    ]
    return neighbors.some((offset) => {
      return existingTiles.some((tile) => tile.x === x + offset.dx && tile.z === z + offset.dz)
    })
  }

  public setSelection(x: number | null, z: number | null) {
    if (x === null || z === null) {
      this.selectionMesh.visible = false
    } else {
      this.selectionMesh.position.set(x, 0.25, z)
      this.selectionMesh.visible = true
    }
  }

  private addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.onWindowResize)
    this.container?.addEventListener('mousedown', this.onMouseDown)
    this.container?.addEventListener('click', this.onMouseClick)
  }

  private onMouseDown(event: MouseEvent) {
    this.onDownPosition.set(event.clientX, event.clientY)
  }

  private onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    if (this.interfaceStore.isHoveringUI) {
      this.clearHover()
      return
    }

    this.raycaster.setFromCamera(this.mouse, this.camera)

    const intersects = this.raycaster.intersectObject(this.raycastPlane)

    if (intersects.length > 0) {
      const point = intersects[0].point
      const { tileSize } = this.config
      const x = Math.floor((point.x + tileSize / 2) / tileSize) * tileSize
      const z = Math.floor((point.z + tileSize / 2) / tileSize) * tileSize

      const limit = (WORLD_SIZE * tileSize) / 2
      if (Math.abs(x) < limit && Math.abs(z) < limit) {
        this.cursorMesh.position.set(x, 0.3, z)
        this.cursorMesh.visible = true
        this.config.onHover(x, z)
        return
      }
    }
    this.clearHover()
  }

  private clearHover() {
    this.cursorMesh.visible = false
    this.config.onHover(NaN, NaN)
  }

  private onMouseClick(event: MouseEvent) {
    if (
      Math.abs(this.onDownPosition.x - event.clientX) > 5 ||
      Math.abs(this.onDownPosition.y - event.clientY) > 5
    )
      return
    if (this.cursorMesh.visible && this.config.onClick) {
      this.config.onClick(this.cursorMesh.position.x, this.cursorMesh.position.z)
    }
  }

  private onWindowResize() {
    if (!this.container || !this.camera || !this.renderer) return
    const w = window.innerWidth
    const h = window.innerHeight
    const aspect = w / h
    const frustumSize = 40

    this.camera.left = (-frustumSize * aspect) / 2
    this.camera.right = (frustumSize * aspect) / 2
    this.camera.top = frustumSize / 2
    this.camera.bottom = -frustumSize / 2
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
  }

  private updateDayNightCycle(gameProgress: number) {
    let startKey = CYCLE_KEYS[0]
    let endKey = CYCLE_KEYS[1]

    for (let i = 0; i < CYCLE_KEYS.length - 1; i++) {
      if (gameProgress >= CYCLE_KEYS[i].progress && gameProgress < CYCLE_KEYS[i + 1].progress) {
        startKey = CYCLE_KEYS[i]
        endKey = CYCLE_KEYS[i + 1]
        break
      }
    }

    const t = (gameProgress - startKey.progress) / (endKey.progress - startKey.progress)

    this.scene.background = new THREE.Color().lerpColors(startKey.sky, endKey.sky, t)
    const lightColor = new THREE.Color().lerpColors(startKey.light, endKey.light, t)

    this.ambientLight.intensity = THREE.MathUtils.lerp(startKey.ambient, endKey.ambient, t)
    this.dirLight.intensity = THREE.MathUtils.lerp(startKey.dir, endKey.dir, t)
    this.dirLight.color.copy(lightColor)
    this.focusLight.intensity = THREE.MathUtils.lerp(startKey.focus, endKey.focus, t)
    this.focusLight.color.copy(lightColor)

    const angle = gameProgress * Math.PI * 2 - Math.PI / 2
    this.dirLight.position.set(Math.cos(angle) * 100, Math.sin(angle) * 100, 40)
    this.dirLight.lookAt(0, 0, 0)

    const timeStruct = calculateGameTime()
    const isNight = timeStruct.hour >= 20 || timeStruct.hour < 5
    const targetOpacity = isNight ? 1.0 : 0.0
    this.fireflyUniforms.uOpacity.value +=
      (targetOpacity - this.fireflyUniforms.uOpacity.value) * 0.02
  }

  private animate(time: number) {
    this.animationId = requestAnimationFrame(this.animate.bind(this))

    if (time - this.lastWaterUpdate > WATER_ANIM_SPEED) {
      this.currentWaterFrame = (this.currentWaterFrame + 1) % 15
      ;(Object.keys(this.waterMeshes) as WaterCategory[]).forEach((cat) => {
        const mesh = this.waterMeshes[cat]
        const textures = this.waterTextureSets[cat]
        if (mesh && textures.length > 0 && textures[this.currentWaterFrame]) {
          ;(mesh.material as THREE.MeshStandardMaterial).map = textures[this.currentWaterFrame]
        }
      })
      this.lastWaterUpdate = time
    }

    const gameTime = calculateGameTime()
    this.updateDayNightCycle(gameTime.progress)

    this.fireflyUniforms.uTime.value = time * 0.001

    if (this.selectionMesh.visible) {
      const scale = 1 + Math.sin(time * 0.005) * 0.03
      this.selectionMesh.scale.set(scale, 1, scale)
      ;(this.selectionMesh.material as THREE.LineBasicMaterial).opacity =
        0.5 + Math.sin(time * 0.01) * 0.5
    }

    this.controls.update()

    const limit = (WORLD_SIZE * this.config.tileSize) / 2
    this.controls.target.x = THREE.MathUtils.clamp(this.controls.target.x, -limit, limit)
    this.controls.target.z = THREE.MathUtils.clamp(this.controls.target.z, -limit, limit)

    this.renderer.render(this.scene, this.camera)
  }

  public dispose() {
    cancelAnimationFrame(this.animationId)

    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onWindowResize)
    this.container?.removeEventListener('click', this.onMouseClick)
    this.container?.removeEventListener('mousedown', this.onMouseDown)

    if (this.fireflies) {
      this.scene.remove(this.fireflies)
      this.fireflies.geometry.dispose()
      ;(this.fireflies.material as THREE.Material).dispose()
    }

    this.flowerMeshes.forEach((entry) => {
      this.scene.remove(entry.mesh)
      entry.mesh.material.map?.dispose()
      entry.mesh.material.dispose()
    })
    this.flowerMeshes.clear()

    Object.values(this.waterTextureSets).forEach((arr) => arr.forEach((t) => t.dispose()))

    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.InstancedMesh) {
        obj.geometry.dispose()
        const mat = obj.material
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
        else mat.dispose()
      }
    })

    this.renderer.dispose()
    this.renderer.forceContextLoss()
    this.container?.removeChild(this.renderer.domElement)

    if (this.elementManager) this.elementManager.dispose()
    this.controls.dispose()
  }
}
