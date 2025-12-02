<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { useGameStore } from '@/stores/game';

// Props pour configuration éventuelle (ex: activer/désactiver les ombres)
const props = withDefaults(defineProps<{
    quality?: 'low' | 'high'
}>(), {
    quality: 'high'
});

const gameStore = useGameStore();
const containerRef = ref<HTMLDivElement | null>(null);

// Variables Three.js
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;
let animationId: number;
let planeMesh: THREE.Mesh;
let cursorMesh: THREE.Mesh;

// Configuration de la scène isométrique
const VIEW_SIZE = 20; // Échelle du zoom isométrique

const initScene = () => {
    if (!containerRef.value) return;

    // 1. Scene & Fog
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a'); // Correspond à slate-900 Tailwind
    scene.fog = new THREE.FogExp2('#0f172a', 0.035);

    // 2. Camera (Orthographic pour l'iso)
    const aspect = containerRef.value.clientWidth / containerRef.value.clientHeight;
    camera = new THREE.OrthographicCamera(
        -VIEW_SIZE * aspect, VIEW_SIZE * aspect,
        VIEW_SIZE, -VIEW_SIZE,
        1, 1000
    );

    // Angle isométrique classique
    camera.position.set(20, 20, 20);
    camera.lookAt(scene.position);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({
        antialias: props.quality === 'high',
        alpha: true
    });
    renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.value.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x34d399, 0.8); // Bloom Green
    dirLight.position.set(10, 20, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // 5. Objects (Le Plan procédural)
    const geometry = new THREE.PlaneGeometry(30, 30, 20, 20);
    const material = new THREE.MeshPhongMaterial({
        color: 0x1e293b, // slate-800
        emissive: 0x064e3b, // emerald-900
        emissiveIntensity: 0.2,
        flatShading: true,
        shininess: 0
    });

    planeMesh = new THREE.Mesh(geometry, material);
    planeMesh.rotation.x = -Math.PI / 2;
    planeMesh.receiveShadow = true;
    scene.add(planeMesh);

    // Grille tactique
    const gridHelper = new THREE.GridHelper(30, 15, 0x34d399, 0x334155);
    gridHelper.position.y = 0.02;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Curseur de sélection
    const cursorGeo = new THREE.PlaneGeometry(2, 2);
    const cursorMat = new THREE.MeshBasicMaterial({
        color: 0x34d399,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    });
    cursorMesh = new THREE.Mesh(cursorGeo, cursorMat);
    cursorMesh.rotation.x = -Math.PI / 2;
    cursorMesh.visible = false;
    scene.add(cursorMesh);

    // 6. Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
};

const onMouseMove = (event: MouseEvent) => {
    // Calculer la position de la souris normalisée (-1 à +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(planeMesh);

    if (intersects.length > 0) {
        const intersect = intersects[0];

        // Grid snapping (2 unités par tuile car 30 width / 15 divisions)
        const x = Math.round(intersect.point.x / 2) * 2;
        const z = Math.round(intersect.point.z / 2) * 2;

        cursorMesh.position.set(x, 0.1, z);
        cursorMesh.visible = true;

        // Mise à jour du store seulement si changement pour éviter le spam
        const tileId = Math.abs(x + z * 10);
        if (gameStore.hoveredTile?.id !== tileId) {
            gameStore.setHoveredTile({
                id: tileId,
                x,
                z,
                owner: (x + z) % 4 === 0 ? 'BloomCorp' : null,
                type: 'land'
            });
        }
    } else {
        cursorMesh.visible = false;
        gameStore.setHoveredTile(null);
    }
};

const animate = (time: number) => {
    animationId = requestAnimationFrame(animate);

    // Creative Coding : Effet de "Respiration" du terrain
    if (planeMesh && planeMesh.geometry) {
        const positionAttribute = planeMesh.geometry.getAttribute('position');
        const vertex = new THREE.Vector3();

        for (let i = 0; i < positionAttribute.count; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);
            // Onde sinusoïdale basée sur le temps et la position
            const z = Math.sin(time * 0.0005 + vertex.x * 0.5) * 0.15 +
                Math.cos(time * 0.0003 + vertex.y * 0.3) * 0.15;

            // On modifie Z ici car la géométrie est locale (avant rotation du mesh)
            positionAttribute.setZ(i, z);
        }
        positionAttribute.needsUpdate = true;

        // Recalculer les normales pour que la lumière réagisse au mouvement
        planeMesh.geometry.computeVertexNormals();
    }

    renderer.render(scene, camera);
};

const onWindowResize = () => {
    if (!containerRef.value || !camera || !renderer) return;

    const aspect = window.innerWidth / window.innerHeight;

    // Maintenir l'échelle isométrique constante
    camera.left = -VIEW_SIZE * aspect;
    camera.right = VIEW_SIZE * aspect;
    camera.top = VIEW_SIZE;
    camera.bottom = -VIEW_SIZE;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
    initScene();
    animate(0);
});

onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onWindowResize);

    // Cleanup basique
    if (renderer) renderer.dispose();
    if (scene) scene.clear();
});
</script>

<template>
    <div ref="containerRef" class="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-900">
        <!-- Le canvas sera injecté ici -->
    </div>
</template>