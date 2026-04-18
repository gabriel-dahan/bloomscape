<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { GameController } from '@/server/controllers/GameController';
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();

const props = defineProps<{
    modelValue: number; // tutorialStep (1 to 6)
    targetElement?: HTMLElement | null;
    targetCoords?: { x: number, y: number } | null;
}>();

const emit = defineEmits(['update:modelValue', 'complete', 'expansion']);

const auth = defineModel<number>('step', { default: 1 });
const islandName = ref('');
const isExpanding = ref(false);

const stepContent = [
    {
        title: "Earth's Awakening",
        text: "Welcome to your deserted island. Click on the central plot to begin.",
        hint: "Click on the ground"
    },
    {
        title: "Management Menu",
        text: "To bring life to this soil, open the management menu.",
        hint: "Click on 'Manage'"
    },
    {
        title: "Genesis Planting",
        text: "You have a Common Dandelion seed. Plant it and give it a name.",
        hint: "Select the Dandelion and give it its first name."
    },
    {
        title: "Care & Harvest",
        text: "A plant needs attention. Water it, then harvest it once it's ready.",
        hint: "Water is life. Harvesting is your reward."
    },
    {
        title: "The Grand Tour",
        text: "Manage your seeds in the Inventory and sell your flowers in the Market.",
        hint: "Use the sidebar to explore (Inventory, Market, Score)."
    },
    {
        title: "Final Expansion",
        text: "Congratulations! Your island is growing. Give it an official name.",
        hint: "Enter the island's name to unlock its full potential."
    }
];

const currentStepContent = computed(() => stepContent[props.modelValue - 1] || null);

const holeStyles = computed(() => {
    if (props.targetElement) {
        const rect = props.targetElement.getBoundingClientRect();
        const padding = 12; // Add some padding around the element
        return {
            left: rect.left - padding,
            top: rect.top - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
            borderRadius: '1.25rem' // More rounded, modern look (20px)
        };
    }
    if (props.targetCoords) {
        const r = 80;
        return {
            left: props.targetCoords.x - r,
            top: props.targetCoords.y - r,
            width: r * 2,
            height: r * 2,
            borderRadius: '50%' // Circle for direct coordinates
        };
    }
    return null;
});

const handleExpansion = async () => {
    if (!islandName.value || isExpanding.value) return;
    isExpanding.value = true;
    try {
        await GameController.completeTutorialExpansion(islandName.value);
        emit('expansion');
    } catch (e: any) {
        alert("Expansion failed: " + e.message);
    } finally {
        isExpanding.value = false;
    }
};

const nextStep = async () => {
    const newStep = props.modelValue + 1;
    if (newStep <= 6) {
        await GameController.updateTutorialStep(newStep);
        emit('update:modelValue', newStep);
    }
};

</script>

<template>
    <div v-if="currentStepContent" class="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
        <!-- Visual Hole (Box Shadow Technique) -->
        <div v-if="holeStyles" class="absolute transition-all duration-300 ease-out pointer-events-none" :style="{
            left: `${holeStyles.left}px`,
            top: `${holeStyles.top}px`,
            width: `${holeStyles.width}px`,
            height: `${holeStyles.height}px`,
            borderRadius: holeStyles.borderRadius,
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.8)'
        }">
        </div>
        <div v-else class="fixed inset-0 bg-black/0 pointer-events-none transition-opacity duration-700"></div>

        <!-- Blocking Overlays (4 transparent divs around the hole for hit-testing) -->
        <template v-if="holeStyles">
            <!-- Top -->
            <div class="fixed top-0 left-0 w-full bg-transparent pointer-events-auto transition-all duration-300"
                :style="{ height: `${holeStyles.top}px` }"></div>
            <!-- Bottom -->
            <div class="fixed left-0 w-full bg-transparent pointer-events-auto transition-all duration-300"
                :style="{ top: `${holeStyles.top + holeStyles.height}px`, height: `calc(100% - ${holeStyles.top + holeStyles.height}px)` }">
            </div>
            <!-- Left -->
            <div class="fixed left-0 bg-transparent pointer-events-auto transition-all duration-300"
                :style="{ top: `${holeStyles.top}px`, height: `${holeStyles.height}px`, width: `${holeStyles.left}px` }">
            </div>
            <!-- Right -->
            <div class="fixed right-0 bg-transparent pointer-events-auto transition-all duration-300"
                :style="{ top: `${holeStyles.top}px`, height: `${holeStyles.height}px`, left: `${holeStyles.left + holeStyles.width}px` }">
            </div>
        </template>
        <div v-else class="fixed inset-0 bg-black/80 pointer-events-auto"></div>

        <!-- Pulse Highlight -->
        <transition name="fade">
            <div v-if="holeStyles"
                class="absolute border-2 border-emerald-400/50 animate-pulse pointer-events-none shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                :style="{
                    left: `${holeStyles.left}px`,
                    top: `${holeStyles.top}px`,
                    width: `${holeStyles.width}px`,
                    height: `${holeStyles.height}px`,
                    borderRadius: holeStyles.borderRadius
                }">
            </div>
        </transition>

        <!-- Instruction Card -->
        <div class="absolute top-6 right-6 w-[90%] max-w-[280px] pointer-events-auto z-[10002]">
            <div class="glass-container p-4 rounded-[1.25rem] border border-white/10 shadow-3xl animate-slide-left">
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <div class="h-0.5 w-6 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                        <span class="text-[8px] uppercase tracking-[0.2em] text-emerald-400/80 font-black">Step {{
                            modelValue
                            }}/6</span>
                    </div>
                </div>

                <h2 class="text-lg font-black text-white mb-1.5 tracking-tight">{{ currentStepContent.title }}</h2>
                <p class="text-slate-300 text-[13px] leading-relaxed mb-3 font-medium">{{ currentStepContent.text }}</p>

                <div
                    class="bg-slate-950/40 backdrop-blur-md p-2.5 rounded-lg border border-white/5 flex items-start gap-2 mb-3">
                    <div class="mt-0.5">
                        <div class="w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span class="text-[11px] text-slate-400 font-semibold leading-relaxed grow">{{
                        currentStepContent.hint
                        }}</span>
                </div>

                </div>
            </div>
        </div>

        <!-- Step 6: Centered Naming Form -->
        <div v-if="modelValue === 6"
            class="fixed inset-0 flex items-center justify-center p-6 z-[10001] pointer-events-none overflow-hidden">
            <div class="absolute inset-0 bg-slate-950/40 backdrop-blur-sm pointer-events-auto"></div>

            <div
                class="w-full max-w-sm glass-container p-8 rounded-[2rem] border border-white/10 shadow-3xl animate-slide-up pointer-events-auto relative">
                <div class="flex flex-col items-center text-center mb-6">
                    <div
                        class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-emerald-500/30">
                        <span class="text-3xl">🏝️</span>
                    </div>
                    <h2 class="text-2xl font-black text-white mb-2 tracking-tight">Name Your Empire</h2>
                    <p class="text-slate-400 text-sm leading-relaxed">Your journey begins with a name. Choose something
                        that
                        will echo through the ages.</p>
                </div>

                <div class="space-y-4">
                    <div class="relative group">
                        <input v-model="islandName" type="text" placeholder="Island name..."
                            class="w-full h-14 bg-slate-900 border border-white/10 rounded-2xl px-6 text-white text-lg font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-700" />
                    </div>

                    <button @click="handleExpansion" :disabled="!islandName || isExpanding" id="tutorial-expand-btn"
                        class="w-full h-14 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-emerald-900/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                        <span v-if="isExpanding" class="loading loading-spinner loading-md"></span>
                        {{ isExpanding ? 'Inaugurating...' : 'Inaugurate Island' }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Debug/Skip buttons can be added here if needed during dev -->
    </div>
</template>

<style scoped>
.glass-container {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%);
    backdrop-filter: blur(24px);
}

.animate-slide-up {
    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-right {
    animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-left {
    animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes slideUp {
    from {
        transform: translateY(60px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideRight {
    from {
        transform: translateX(-60px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideLeft {
    from {
        transform: translateX(60px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
