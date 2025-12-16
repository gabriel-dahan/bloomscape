// ---- IMPORTS ---- //
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { WorldElementManager } from './WorldElementsManager'
import { getTileLayout } from './AutoTilingUtils'

// ---- CONFIGURATION GLOBALE ---- //
const WORLD_SIZE = 60 // Taille de la grille scannée pour générer l'eau (60x60 = 3600 tuiles)
const WATER_ANIM_SPEED = 300

const COLORS = {
  highlight: 0x333399,
  selection: 0x3333cc,
  owned: 0x10b981,
  grid: 0xffffff,
  waterBase: 0xffffff, // Blanc pour garder la couleur originale des sprites
}

// ---- TYPES ---- //
export interface SceneConfig {
  quality: 'low' | 'high'
  tileSize: number
  onHover: (x: number, z: number) => void
  onClick?: (x: number, z: number) => void
}

export interface TileData {
  x: number
  z: number
  flowerId?: string
}

// Les 5 catégories de textures d'eau
type WaterCategory = 'open' | '1side' | '2sides' | '3sides' | '4sides'

// ---- CLASS DEFINITION ---- //
export class LandSceneManager {
  private scene!: THREE.Scene
  private camera!: THREE.OrthographicCamera
  private renderer!: THREE.WebGLRenderer
  private controls!: OrbitControls
  private raycaster: THREE.Raycaster
  private mouse: THREE.Vector2
  private animationId: number = 0

  private elementManager: WorldElementManager

  // Objets utilitaires
  private cursorMesh!: THREE.Mesh
  private selectionMesh!: THREE.Object3D
  // Un plan invisible pour capter la souris sur l'eau (car l'eau est faite de plein de petits bouts)
  private raycastPlane!: THREE.Mesh

  // --- GESTION EAU ---
  // Stockage des textures chargées : { 'open': [Texture, Texture...], ... }
  private waterTextureSets: Record<WaterCategory, THREE.Texture[]> = {
    open: [],
    '1side': [],
    '2sides': [],
    '3sides': [],
    '4sides': [],
  }

  // Stockage des Meshs Instanciés (1 par catégorie)
  private waterMeshes: Record<WaterCategory, THREE.InstancedMesh | null> = {
    open: null,
    '1side': null,
    '2sides': null,
    '3sides': null,
    '4sides': null,
  }

  private currentWaterFrame: number = 0
  private lastWaterUpdate: number = 0
  // -------------------

  // Meshs Terre
  private meshCenter!: THREE.InstancedMesh
  private meshEdge!: THREE.InstancedMesh
  private meshCorner!: THREE.InstancedMesh

  private onDownPosition = new THREE.Vector2()
  private container: HTMLElement | null = null
  private config: SceneConfig

  constructor(config: SceneConfig) {
    this.config = config
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    // Binding des méthodes
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseClick = this.onMouseClick.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
  }

  // ---- INITIALIZATION ---- //
  public init(container: HTMLElement) {
    this.container = container

    // Nettoyage du conteneur
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }

    const width = this.container.clientWidth
    const height = this.container.clientHeight

    // 1. Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x87ceeb)

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    this.scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xfff7ed, 3.0)
    dirLight.position.set(50, 80, 40)
    dirLight.castShadow = true
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
    this.camera.zoom = 4.5

    // 4. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: this.config.quality === 'high',
      alpha: false,
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
    this.controls.enableRotate = false
    this.controls.enablePan = true
    this.controls.screenSpacePanning = true
    this.controls.minPolarAngle = Math.PI / 3 - 0.05
    this.controls.maxPolarAngle = Math.PI / 3 + 0.05
    this.controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN }
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: null }

    this.createWorld()

    this.elementManager = new WorldElementManager(this.scene)

    this.addEventListeners()
    this.animate()
  }

  // ---- WORLD GENERATION ---- //
  private createWorld() {
    const { tileSize } = this.config
    const loader = new THREE.TextureLoader()

    // --- 1. CHARGEMENT DES TEXTURES D'EAU (15 FRAMES PAR CATÉGORIE) ---
    const loadFrames = (folder: string): THREE.Texture[] => {
      const frames: THREE.Texture[] = []
      for (let i = 1; i <= 16; i++) {
        // Chemin attendu : /textures/water/open/frame1.png
        const path = `/textures/water/${folder}/frame${i}.png`
        const tex = loader.load(path)
        tex.magFilter = THREE.NearestFilter
        tex.minFilter = THREE.NearestFilter
        tex.colorSpace = THREE.SRGBColorSpace
        frames.push(tex)
      }
      return frames
    }

    // Charger les 5 sets
    this.waterTextureSets.open = loadFrames('open')
    this.waterTextureSets['1side'] = loadFrames('1side')
    this.waterTextureSets['2sides'] = loadFrames('2sides')
    this.waterTextureSets['3sides'] = loadFrames('3sides')
    this.waterTextureSets['4sides'] = loadFrames('4sides')

    // --- 2. CRÉATION DES INSTANCED MESHES EAU ---
    const waterGeo = new THREE.PlaneGeometry(tileSize, tileSize)

    const createWaterMesh = (category: WaterCategory) => {
      const initialMap = this.waterTextureSets[category][0] || null
      const mat = new THREE.MeshStandardMaterial({
        map: initialMap,
        color: COLORS.waterBase,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
      })

      // On prévoit large pour le buffer (4000 tuiles max)
      const mesh = new THREE.InstancedMesh(waterGeo, mat, 4000)
      mesh.receiveShadow = true
      mesh.count = 0 // Initialement vide
      this.scene.add(mesh)
      return mesh
    }

    this.waterMeshes.open = createWaterMesh('open')
    this.waterMeshes['1side'] = createWaterMesh('1side')
    this.waterMeshes['2sides'] = createWaterMesh('2sides')
    this.waterMeshes['3sides'] = createWaterMesh('3sides')
    this.waterMeshes['4sides'] = createWaterMesh('4sides')

    // --- 3. PLAN DE RAYCASTING (INVISIBLE) ---
    // Remplace le sol physique pour la détection de la souris
    const raycastGeo = new THREE.PlaneGeometry(WORLD_SIZE * tileSize * 2, WORLD_SIZE * tileSize * 2)
    const raycastMat = new THREE.MeshBasicMaterial({ visible: false })
    this.raycastPlane = new THREE.Mesh(raycastGeo, raycastMat)
    this.raycastPlane.rotation.x = -Math.PI / 2
    this.scene.add(this.raycastPlane)

    // --- 4. GRID HELPER ---
    const totalSize = WORLD_SIZE * tileSize
    const gridHelper = new THREE.GridHelper(totalSize, WORLD_SIZE, COLORS.grid, COLORS.grid)
    gridHelper.position.set(tileSize / 2, 0.05, tileSize / 2)
    gridHelper.material.opacity = 0.15
    gridHelper.material.transparent = true
    this.scene.add(gridHelper)

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
    this.scene.add(this.cursorMesh)

    // --- 5. CURSOR & SELECTION ---
    const boxGeo = new THREE.BoxGeometry(tileSize, 0.55, tileSize)

    // 2. On génère uniquement les arêtes (les lignes) de cette boîte
    const edges = new THREE.EdgesGeometry(boxGeo)

    // 3. On crée l'objet Ligne
    this.selectionMesh = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({
        color: 0xffff00, // Jaune vif pour bien voir la sélection (ou COLORS.selection)
        linewidth: 2,
      }),
    )

    this.selectionMesh.visible = false
    this.scene.add(this.selectionMesh)

    // --- 6. LAND MESHES (TERRE) ---
    const setupTex = (url: string) => {
      const tex = loader.load(url)
      tex.magFilter = THREE.NearestFilter
      tex.minFilter = THREE.NearestFilter
      tex.colorSpace = THREE.SRGBColorSpace
      return tex
    }

    const texCenter = setupTex('/textures/soil_center.png')
    const texEdge = setupTex('/textures/soil_edge.png')
    const texCorner = setupTex('/textures/soil_corner.png')
    const texSideGrass = setupTex('/textures/land_grass_side.png')
    const texSideDirt = setupTex('/textures/soil_center.png')
    const texBottomRock = setupTex('/textures/land_bottom.png')

    const matSettings = { color: 0xffffff, roughness: 1.0, metalness: 0.0 }
    // (Materials setup shortcut for brevity - same as your original code)
    const matSideDirt = new THREE.MeshStandardMaterial({ map: texSideDirt, ...matSettings })
    const matSideGrass = new THREE.MeshStandardMaterial({ map: texSideGrass, ...matSettings })
    const matBottom = new THREE.MeshStandardMaterial({ map: texBottomRock, ...matSettings })
    const matTopCenter = new THREE.MeshStandardMaterial({ map: texCenter, ...matSettings })
    const matTopEdge = new THREE.MeshStandardMaterial({ map: texEdge, ...matSettings })
    const matTopCorner = new THREE.MeshStandardMaterial({ map: texCorner, ...matSettings })

    const matsCenter = [matSideDirt, matSideDirt, matTopCenter, matBottom, matSideDirt, matSideDirt]
    const matsEdge = [matSideDirt, matSideDirt, matTopEdge, matBottom, matSideDirt, matSideGrass]
    const matsCorner = [
      matSideGrass,
      matSideDirt,
      matTopCorner,
      matBottom,
      matSideGrass,
      matSideDirt,
    ]

    const geo = new THREE.BoxGeometry(this.config.tileSize * 0.97, 0.5, this.config.tileSize * 0.97)

    this.meshCenter = new THREE.InstancedMesh(geo, matsCenter as any, 2000)
    this.meshEdge = new THREE.InstancedMesh(geo, matsEdge as any, 2000)
    this.meshCorner = new THREE.InstancedMesh(geo, matsCorner as any, 2000)

    this.scene.add(this.meshCenter)
    this.scene.add(this.meshEdge)
    this.scene.add(this.meshCorner)
    ;[this.meshCenter, this.meshEdge, this.meshCorner].forEach((m) => {
      m.receiveShadow = true
      m.castShadow = true
      m.count = 0
    })
  }

  // ---- DATA BINDING & UPDATE LOGIC ---- //
  public updateTiles(landTiles: TileData[]) {
    const { tileSize } = this.config

    // --- ETAPE 1 : UPDATE TERRE ---
    let countCenter = 0,
      countEdge = 0,
      countCorner = 0
    const dummy = new THREE.Object3D()

    // On crée un Set pour vérifier rapidement si une case est de la terre
    const landSet = new Set<string>()
    landTiles.forEach((t) => landSet.add(`${t.x},${t.z}`))

    landTiles.forEach((tile) => {
      const layout = getTileLayout(tile.x, tile.z, tileSize, landTiles)
      dummy.position.set(tile.x, 0.25, tile.z)
      dummy.rotation.set(0, layout.rotation, 0)
      dummy.updateMatrix()

      if (layout.type === 'center') this.meshCenter.setMatrixAt(countCenter++, dummy.matrix)
      else if (layout.type === 'edge') this.meshEdge.setMatrixAt(countEdge++, dummy.matrix)
      else this.meshCorner.setMatrixAt(countCorner++, dummy.matrix)
    })

    this.meshCenter.count = countCenter
    this.meshEdge.count = countEdge
    this.meshCorner.count = countCorner
    this.meshCenter.instanceMatrix.needsUpdate = true
    this.meshEdge.instanceMatrix.needsUpdate = true
    this.meshCorner.instanceMatrix.needsUpdate = true

    this.elementManager.updateElements(landTiles)

    // --- ETAPE 2 : UPDATE EAU (AUTOTILING) ---
    const waterCounts: Record<WaterCategory, number> = {
      open: 0,
      '1side': 0,
      '2sides': 0,
      '3sides': 0,
      '4sides': 0,
    }

    const halfSize = (WORLD_SIZE * tileSize) / 2

    // On parcourt toute la zone du monde pour remplir les trous avec de l'eau
    for (let x = -halfSize; x < halfSize; x += tileSize) {
      for (let z = -halfSize; z < halfSize; z += tileSize) {
        // On aligne sur la grille
        const gridX = Math.round(x / tileSize) * tileSize
        const gridZ = Math.round(z / tileSize) * tileSize

        // Si c'est de la terre, pas d'eau ici
        if (landSet.has(`${gridX},${gridZ}`)) continue

        // Analyse des voisins (Nord, Sud, Est, Ouest)
        const n = landSet.has(`${gridX},${gridZ - tileSize}`) // Nord (Z-)
        const s = landSet.has(`${gridX},${gridZ + tileSize}`) // Sud (Z+)
        const e = landSet.has(`${gridX + tileSize},${gridZ}`) // Est (X+)
        const w = landSet.has(`${gridX - tileSize},${gridZ}`) // Ouest (X-)

        let neighborsCount = 0
        if (n) neighborsCount++
        if (s) neighborsCount++
        if (e) neighborsCount++
        if (w) neighborsCount++

        let category: WaterCategory = 'open'
        let rotationY = 0 // Rotation autour de l'axe vertical (qui est Z pour un Plane à plat ?)
        // Note: PlaneGeometry rotateX(-PI/2) met le plan à plat. L'axe de rotation "sur la table" devient Z.

        // Logique d'orientation des textures
        // Hypothèse : Les textures '1side', '2sides', etc. sont dessinées avec la terre en HAUT (Nord).

        if (neighborsCount === 0) {
          category = 'open'
        } else if (neighborsCount === 1) {
          category = '1side'
          if (n)
            rotationY = 0 // Terre Nord -> Pas de rotation
          else if (e)
            rotationY = -Math.PI / 2 // Terre Est -> -90°
          else if (s)
            rotationY = Math.PI // Terre Sud -> 180°
          else if (w) rotationY = Math.PI / 2 // Terre Ouest -> 90°
        } else if (neighborsCount === 2) {
          category = '2sides'
          // Cas "Coin"
          if (n && e) rotationY = 0
          else if (e && s) rotationY = -Math.PI / 2
          else if (s && w) rotationY = Math.PI
          else if (w && n) rotationY = Math.PI / 2
          // Cas "Canal" (Opposés)
          // Si tu as une texture spécifique 'canal', ajoute une catégorie. Sinon on utilise '2sides' ou 'open'
          else if (n && s) {
            category = '2sides'
            rotationY = 0
          } // Ou une texture canal
          else if (e && w) {
            category = '2sides'
            rotationY = Math.PI / 2
          }
        } else if (neighborsCount === 3) {
          category = '3sides'
          // On oriente vers le "vide" (l'ouverture)
          if (!s)
            rotationY = 0 // Vide au Sud (donc Terre N, E, O)
          else if (!w) rotationY = -Math.PI / 2
          else if (!n) rotationY = Math.PI
          else if (!e) rotationY = Math.PI / 2
        } else {
          category = '4sides'
        }

        // Ajout à l'instance
        const mesh = this.waterMeshes[category]
        if (mesh) {
          // Position Y=0 (légèrement sous la terre qui est à 0.25)
          dummy.position.set(gridX, 0, gridZ)
          // Rotation : -PI/2 sur X pour mettre à plat + RotationY calculée sur Z
          dummy.rotation.set(-Math.PI / 2, 0, rotationY)
          dummy.updateMatrix()
          mesh.setMatrixAt(waterCounts[category]++, dummy.matrix)
        }
      }
    }

    // Mise à jour finale des meshs d'eau
    ;(Object.keys(this.waterMeshes) as WaterCategory[]).forEach((key) => {
      const mesh = this.waterMeshes[key]
      if (mesh) {
        mesh.count = waterCounts[key]
        mesh.instanceMatrix.needsUpdate = true
      }
    })
  }

  // ---- HELPERS & EVENTS ---- //

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
      return
    }
    this.selectionMesh.position.set(x, 0.25, z) // Au dessus de l'eau
    this.selectionMesh.visible = true
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
    // Utilisation du plan invisible pour le Raycasting (car l'eau est instanciée)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    this.raycaster.setFromCamera(this.mouse, this.camera)

    // On intersecte le plan invisible
    const intersects = this.raycaster.intersectObject(this.raycastPlane)

    if (intersects.length > 0) {
      const point = intersects[0].point
      const { tileSize } = this.config
      const halfTile = tileSize / 2
      const x = Math.floor((point.x + halfTile) / tileSize) * tileSize
      const z = Math.floor((point.z + halfTile) / tileSize) * tileSize

      // Limites du monde
      const limit = (WORLD_SIZE * tileSize) / 2
      if (Math.abs(x) < limit && Math.abs(z) < limit) {
        this.cursorMesh.position.set(x, 0.3, z) // Z=0.3 pour être au dessus de l'eau
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

  private onMouseClick(event: MouseEvent) {
    if (
      Math.abs(this.onDownPosition.x - event.clientX) > 5 ||
      Math.abs(this.onDownPosition.y - event.clientY) > 5
    ) {
      return
    }
    if (this.cursorMesh.visible && this.config.onClick) {
      this.config.onClick(this.cursorMesh.position.x, this.cursorMesh.position.z)
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

  // ---- ANIMATION LOOP ---- //
  private animate(time: number = 0) {
    this.animationId = requestAnimationFrame((t) => this.animate(t))

    // --- ANIMATION EAU ---
    if (time - this.lastWaterUpdate > WATER_ANIM_SPEED) {
      // 1. Frame suivante (0 -> 14 -> 0)
      this.currentWaterFrame = (this.currentWaterFrame + 1) % 15

      // 2. Mise à jour des textures pour chaque catégorie
      const categories: WaterCategory[] = ['open', '1side', '2sides', '3sides', '4sides']

      categories.forEach((cat) => {
        const textures = this.waterTextureSets[cat]
        const mesh = this.waterMeshes[cat]

        if (mesh && textures.length > 0) {
          const mat = mesh.material as THREE.MeshStandardMaterial
          // On assigne la texture correspondant à la frame actuelle
          if (textures[this.currentWaterFrame]) {
            mat.map = textures[this.currentWaterFrame]
            mat.needsUpdate = true
          }
        }
      })

      this.lastWaterUpdate = time
    }

    if (this.selectionMesh.visible) {
      const scale = 1 + Math.sin(time * 0.005) * 0.03
      this.selectionMesh.scale.set(scale, 1, scale)

      ;(this.selectionMesh.material as THREE.LineBasicMaterial).opacity =
        0.5 + Math.sin(time * 0.01) * 0.5
    }

    if (this.controls) {
      this.controls.update()
      // Contraintes de caméra
      const limit = (WORLD_SIZE * this.config.tileSize) / 2
      const target = this.controls.target
      target.x = Math.max(-limit, Math.min(limit, target.x))
      target.y = 1
      target.z = Math.max(-limit, Math.min(limit, target.z))
    }
    this.renderer.render(this.scene, this.camera)
  }

  // ---- CLEANUP ---- //
  public dispose() {
    cancelAnimationFrame(this.animationId)

    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onWindowResize)
    this.container?.removeEventListener('click', this.onMouseClick)
    this.container?.removeEventListener('mousedown', this.onMouseDown)

    // Nettoyage des textures
    Object.values(this.waterTextureSets).forEach((texArray) => {
      texArray.forEach((t) => t.dispose())
    })

    if (this.scene) {
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) object.material.forEach((m: any) => m.dispose())
            else object.material.dispose()
          }
        }
      })
      this.scene.clear()
    }

    if (this.renderer) {
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)
      }
    }

    if (this.elementManager) this.elementManager.dispose()
    if (this.controls) this.controls.dispose()
  }
}
