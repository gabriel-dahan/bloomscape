<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'Pixel Art Image',
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '100%',
    },
    contain: {
        type: Boolean,
        default: true
    }
});

const isLoading = ref(true);
const hasError = ref(false);

function onLoad() {
    isLoading.value = false;
}

function onError() {
    isLoading.value = false;
    hasError.value = true;
}

// Reset states if src changes
watch(() => props.src, () => {
    isLoading.value = true;
    hasError.value = false;
});
</script>

<template>
    <div class="relative overflow-hidden flex items-center justify-center pixel-wrapper"
        :style="{ width: width, height: height }">

        <div v-if="isLoading"
            class="absolute inset-0 bg-slate-800 animate-pulse rounded-md flex items-center justify-center">
            <span class="loading loading-spinner loading-sm text-slate-500"></span>
        </div>

        <div v-if="hasError"
            class="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-slate-600 p-2 border border-slate-800 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8 mb-1 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span class="text-[10px] text-center font-mono">IMG ERROR</span>
        </div>

        <img v-show="!isLoading && !hasError" :src="src" :alt="alt" @load="onLoad" @error="onError"
            class="pixelated-image transition-opacity duration-300" :class="[
                contain ? 'object-contain' : 'object-cover',
                isLoading ? 'opacity-0' : 'opacity-100'
            ]" />
    </div>
</template>

<style scoped>
.pixel-wrapper {
    /* Ensures the wrapper itself doesn't blur */
    image-rendering: pixelated;
}

.pixelated-image {
    width: 100%;
    height: 100%;

    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
}
</style>