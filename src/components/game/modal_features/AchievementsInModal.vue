<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { GameController } from '@/server/controllers/GameController'
import { useAuthStore } from '@/stores/auth'
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue'

const auth = useAuthStore()
const achievements = ref<any[]>([])
const isLoading = ref(true)

const loadAchievements = async () => {
    if (!auth.user) return
    isLoading.value = true
    try {
        achievements.value = await GameController.getUserAchievements(auth.user.id)
    } catch (e) {
        console.error('Failed to load achievements', e)
    } finally {
        isLoading.value = false
    }
}

const stats = computed(() => {
    const total = achievements.value.length
    const unlocked = achievements.value.filter(a => a.unlocked).length
    const percent = total > 0 ? Math.round((unlocked / total) * 100) : 0
    return { total, unlocked, percent }
})

onMounted(loadAchievements)
</script>

<template>
    <div class="h-full flex flex-col bg-slate-900 text-slate-200">
        <!-- Header / Stats -->
        <div class="p-6 bg-slate-950/50 border-b border-slate-800">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <h2 class="text-2xl font-black text-white flex items-center gap-3">
                        <PixelImageViewer src="/trophy_flower.png" width="32px" height="32px" />
                        Hall of Achievements
                    </h2>
                    <p class="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Your botanical legacy</p>
                </div>
                <div class="text-right">
                    <div class="text-4xl font-black text-emerald-400 leading-none">{{ stats.percent }}%</div>
                    <div class="text-[10px] text-slate-500 uppercase font-black mt-1">{{ stats.unlocked }} / {{ stats.total }} Unlocked</div>
                </div>
            </div>

            <!-- Progress Bar -->
            <div class="mt-6 h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                <div class="h-full bg-linear-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                     :style="{ width: `${stats.percent}%` }"></div>
            </div>
        </div>

        <!-- Achievement List -->
        <div class="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-700">
            <div v-if="isLoading" class="flex flex-col items-center justify-center h-full gap-4">
                <span class="loading loading-ring loading-lg text-emerald-500"></span>
                <span class="text-xs text-slate-500 font-mono animate-pulse">Consulting the Records...</span>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="ach in achievements" :key="ach.id"
                     class="relative p-5 rounded-2xl border transition-all duration-300 group overflow-hidden"
                     :class="ach.unlocked 
                        ? 'bg-slate-800/40 border-emerald-500/30' 
                        : 'bg-slate-950/50 border-slate-800 grayscale opacity-70'">
                    
                    <!-- Background Glow -->
                    <div v-if="ach.unlocked" class="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full"></div>

                    <div class="flex gap-4 relative z-10">
                        <!-- Icon Circle -->
                        <div class="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border-2 transition-transform duration-500 group-hover:scale-110"
                             :class="ach.unlocked 
                                ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                                : 'bg-slate-900 border-slate-700'">
                                <span v-if="ach.unlocked">🌟</span>
                                <PixelImageViewer v-else-if="ach.isSecret" src="/lock.png" width="24px" height="24px" class="opacity-80" />
                                <span v-else>💠</span>

                        </div>

                        <!-- Content -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between gap-2">
                                <h3 class="font-black text-sm text-white truncate group-hover:text-emerald-400 transition-colors">
                                    {{ (!ach.unlocked && ach.isSecret) ? 'Secret Achievement' : ach.name }}
                                </h3>
                                <div class="flex flex-col items-end gap-1">
                                    <div class="badge badge-xs bg-slate-900 border-slate-700 text-slate-400 font-mono py-2">
                                        {{ ach.rewardSap }} Sap
                                    </div>
                                    <div class="text-[9px] text-slate-500 font-mono italic">
                                        Unlocked by {{ ach.globalUnlockPercent }}%
                                    </div>
                                </div>
                            </div>
                            
                            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                                {{ (!ach.unlocked && ach.isSecret) ? 'This achievement is hidden. Keep playing to uncover its requirements!' : ach.description }}
                            </p>

                            <div v-if="ach.unlocked" class="mt-3 flex items-center gap-1.5">
                                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]"></div>
                                <span class="text-[9px] font-bold text-emerald-500 uppercase">Unlocked {{ new Date(ach.unlockedAt).toLocaleDateString() }}</span>
                            </div>
                            <div v-else class="mt-3 flex items-center gap-1.5">
                                <div class="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                <span class="text-[9px] font-bold text-slate-600 uppercase">Locked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #334155;
}
</style>
