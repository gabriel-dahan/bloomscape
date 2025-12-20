<script setup lang="ts">
import { computed } from 'vue';
import { GameController } from '@/server/controllers/GameController';
import { FlowerStatus } from '@/shared/types'; // Assure-toi que le chemin est correct

// Définition des props
interface Props {
    slug: string;
    status?: FlowerStatus;
    type?: 'icon' | 'sprite';
    size?: number | string;
    alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
    status: FlowerStatus.MATURE,
    type: 'icon',
    size: 32,
    alt: 'Flower icon'
});

const imageUrl = computed(() => {
    if (!props.slug) return '';
    return GameController.getFlowerAssetUrl(props.slug, props.status, props.type);
});

const sizeStyle = computed(() => {
    const s = props.size;
    const finalSize = typeof s === 'number' ? `${s}px` : s;

    return {
        width: finalSize,
        height: finalSize,
    };
});
</script>

<template>
    <img v-if="imageUrl" :src="imageUrl" :alt="alt" class="flower-image-component pixelated" :style="sizeStyle"
        draggable="false" />
    <div v-else class="flower-image-component pixelated bg-slate-800/50 rounded-md animate-pulse" :style="sizeStyle">
    </div>
</template>

<style scoped>
.flower-image-component {
    object-fit: contain;

    vertical-align: middle;
    display: inline-block;
}

.pixelated {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>