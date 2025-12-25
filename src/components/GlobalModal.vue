<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const modalStore = useModalStore();
const { isOpen, title, message, type, actions, size, component, componentProps, sideBarMargin } = storeToRefs(modalStore);

// Configuration visuelle selon le type (couleurs)
const config = computed(() => {
    switch (type.value) {
        case 'success': return { color: 'text-emerald-400', border: 'border-emerald-500/30' };
        case 'error': return { color: 'text-red-400', border: 'border-red-500/30' };
        case 'warning': return { color: 'text-amber-400', border: 'border-amber-500/30' };
        default: return { color: 'text-blue-400', border: 'border-blue-500/30' };
    }
});

// Configuration des tailles (Largeur / Hauteur)
const sizeClasses = computed(() => {
    switch (size.value) {
        case 'large':
            return 'w-full h-full phone:max-w-6xl phone:h-[85vh] phone:mx-5' + (sideBarMargin.value ? ' md:ml-25' : '');
        case 'fullscreen':
            return 'w-full h-full max-w-none border-1' + (sideBarMargin.value ? ' md:ml-25' : '');
        default:
            return 'w-full max-w-md';
    }
});

// Helper pour le style des boutons
const getBtnClass = (variant?: string) => {
    switch (variant) {
        case 'danger': return 'btn-error text-white';
        case 'ghost': return 'btn-ghost text-slate-400';
        case 'secondary': return 'btn-outline border-slate-600 text-slate-300 hover:bg-slate-700';
        default: return 'btn-primary text-white shadow-lg shadow-emerald-500/20';
    }
};
</script>

<template>
    <transition name="fade">
        <div v-if="isOpen"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm md:p-4"
            @click.self="modalStore.close">

            <transition name="scale">
                <div v-if="isOpen"
                    class="glass-panel flex flex-col p-6 rounded-2xl border shadow-2xl relative overflow-hidden transition-all duration-300"
                    :class="[config.border, sizeClasses]">

                    <div
                        class="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none">
                    </div>

                    <div class="flex-none flex items-center gap-4 mb-4">
                        <h3 class="text-md phone:text-xl font-bold tracking-wide" :class="config.color">
                            {{ title }}
                        </h3>
                    </div>

                    <div class="flex-1 overflow-y-auto min-h-0 custom-scrollbar phone:mb-4">

                        <component v-if="component" :is="component" v-bind="componentProps" />

                        <p v-else class="text-slate-300 text-sm leading-relaxed">
                            {{ message }}
                        </p>
                    </div>

                    <div class="flex-none flex justify-end gap-3 phone:border-t phone:border-white/5 pt-2 phone:pt-4">
                        <button v-for="(action, idx) in actions" :key="idx" @click="action.onClick"
                            class="btn btn-sm rounded-lg font-bold transition-transform hover:scale-105"
                            :class="getBtnClass(action.variant)">
                            {{ action.label }}
                        </button>
                    </div>

                </div>
            </transition>
        </div>
    </transition>
</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.95);
    /* Légèrement plus opaque pour la lisibilité du Market */
    backdrop-filter: blur(16px);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

/* Scrollbar personnalisée fine et discrète pour le contenu interne */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
}
</style>