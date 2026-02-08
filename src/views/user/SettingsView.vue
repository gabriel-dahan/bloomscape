<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { remult } from 'remult'
import { User } from '@/shared/user/User'
import { UserSettings } from '@/shared/user/UserSettings'
import { SettingsController } from '@/server/controllers/SettingsController'
import { UserController } from '@/server/controllers/UserController'
import { GameController } from '@/server/controllers/GameController'
import { useAuthStore } from '@/stores/auth'
import { useAudioStore } from '@/stores/audio'
import { useGameStore } from '@/stores/game'
import { Role } from '@/shared/types'
import { useRouter } from 'vue-router'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import PixelImageViewer from '@/components/icons/PixelImageViewer.vue'
import { ROUTES_ENUM } from '@/routes/routes_enum'

const auth = useAuthStore()
const audio = useAudioStore()
const game = useGameStore()
const router = useRouter()

const isLoading = ref(true)
const isSaving = ref(false)
const showToast = ref(false)
const bioTab = ref<'edit' | 'preview'>('edit')

const user = ref<User | null>(null)
const stats = ref({
    joinedAt: '',
    completionRate: 0,
})

const formData = ref({
    // User fields
    description: '',

    // Settings fields
    volume: 0.5,
    isMuted: false,
    notificationsEnabled: true,
    language: 'en'
})

const levelProgress = computed(() => {
    if (!user.value) return 0;
    return Math.min(100, (user.value.xp / (user.value.level * 1000)) * 100);
});

onMounted(async () => {
    try {
        if (!auth.user) await auth.fetchSessionUser();
        const data = await SettingsController.getSettings()

        if (auth.user) {
            user.value = auth.user
            stats.value.joinedAt = new Date(auth.user.createdAt!).toLocaleDateString()
            game.setXPContext(auth.user.xp);

            formData.value.description = auth.user.description || ''
        }

        if (data.settingsVal) {
            formData.value.volume = data.settingsVal.volume
            formData.value.isMuted = data.settingsVal.isMuted
            formData.value.notificationsEnabled = data.settingsVal.notificationsEnabled
            formData.value.language = data.settingsVal.language
        }

        // Sync local audio state
        audio.setVolume(formData.value.volume)
        if (formData.value.isMuted !== audio.isMuted) {
            audio.toggleMute()
        }

    } catch (e) {
        console.error("Failed to load settings", e)
    } finally {
        isLoading.value = false
    }
})

const handleSave = async () => {
    isSaving.value = true
    try {
        await SettingsController.saveSettings(
            { description: formData.value.description },
            {
                volume: formData.value.volume,
                isMuted: formData.value.isMuted,
                notificationsEnabled: formData.value.notificationsEnabled,
                language: formData.value.language
            }
        )

        // Update local stores
        audio.setVolume(formData.value.volume)
        if (audio.isMuted !== formData.value.isMuted) {
            audio.toggleMute()
        }

        await auth.fetchSessionUser()

        showToast.value = true
        setTimeout(() => showToast.value = false, 3000)
        if (auth.user) {
            router.push(ROUTES_ENUM.USER_PROFILE.pathDyn(auth.user.tag))
        } else {
            router.push(ROUTES_ENUM.CURRENT_USER_PROFILE.path)
        }
    } catch (e) {
        alert("Failed to save settings")
    } finally {
        isSaving.value = false
    }
}

const handleLogout = async () => {
    await auth.logout()
    router.push('/')
}

const formatVolume = (val: number) => Math.round(val * 100) + '%'

</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 pb-20">

        <!-- Toast Notification -->
        <div v-if="showToast" class="toast toast-end z-50 animate-bounce-in">
            <div
                class="alert alert-success shadow-lg border border-emerald-500/20 bg-emerald-900/80 backdrop-blur-md text-emerald-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Settings saved successfully!</span>
            </div>
        </div>

        <div v-if="isLoading" class="flex items-center justify-center h-screen">
            <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
        </div>

        <div v-else-if="user" class="animate-fade-in relative">

            <!-- HEADER SECTION (Matching UserProfileView) -->
            <div class="relative h-70 md:h-96 w-full overflow-hidden">
                <div class="absolute inset-0 bg-linear-to-b from-emerald-900/40 via-slate-900/80 to-slate-950 z-0">
                </div>
                <div class="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                <div class="absolute top-10 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

                <div
                    class="absolute top-2 left-0 w-full p-4 md:p-10 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 z-10 h-full justify-end pb-10">
                    <!-- Adjusted alignment -->

                    <div class="relative group shrink-0">
                        <div
                            class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800 border-4 border-slate-950 shadow-2xl flex items-center justify-center text-4xl overflow-hidden relative">
                            <span class="z-10">{{ user.tag.substring(0, 2).toUpperCase() }}</span>
                            <div class="absolute inset-0 bg-linear-to-tr from-slate-800 to-slate-700"></div>
                        </div>
                        <div class="absolute -bottom-2 -right-2 badge badge-lg border-slate-950 font-bold shadow-lg"
                            :class="user.roles.includes(Role.ADMIN) ? 'badge-error text-white' : 'badge-primary text-slate-900'">
                            Lv. {{ user.level }}
                        </div>
                    </div>

                    <div class="flex-1 w-full md:w-auto mb-2">
                        <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
                            {{ user.tag }}
                            <span v-if="user.roles.includes(Role.ADMIN)" class="tooltip tooltip-right"
                                data-tip="Administrator">
                                <div class="inline-block mt-1">
                                    <PixelImageViewer src="/api/images/badges/admin" alt="Admin" height="24px"
                                        width="24px" />
                                </div>
                            </span>
                        </h1>

                        <!-- Bio Editor in Header -->
                        <div
                            class="mt-4 w-full max-w-2xl bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-md overflow-hidden">
                            <div
                                class="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
                                <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Public
                                    Bio</span>
                                <div class="tabs tabs-xs tabs-boxed bg-slate-900/50">
                                    <a class="tab" :class="{ 'tab-active': bioTab === 'edit' }"
                                        @click="bioTab = 'edit'">Edit</a>
                                    <a class="tab" :class="{ 'tab-active': bioTab === 'preview' }"
                                        @click="bioTab = 'preview'">Preview</a>
                                </div>
                            </div>

                            <div v-show="bioTab === 'edit'" class="p-0">
                                <textarea v-model="formData.description"
                                    class="textarea textarea-ghost w-full h-24 focus:bg-slate-900/50 text-slate-300 placeholder:text-slate-600 resize-none text-sm font-mono leading-relaxed p-3 focus:outline-hidden"
                                    placeholder="Tell other players about yourself... (Markdown supported)"></textarea>
                            </div>

                            <div v-show="bioTab === 'preview'" class="p-3 h-24 overflow-y-auto bg-slate-900/30">
                                <MarkdownRenderer :content="formData.description || 'Nothing to preview...'" />
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-3 w-full md:w-auto mt-2 md:mt-0 self-end md:self-auto pb-2">
                        <!-- Save button area -->
                        <button @click="handleSave" :disabled="isSaving"
                            class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-500/20 px-8 transition-all hover:scale-105 active:scale-95 w-full md:w-auto">
                            <span v-if="isSaving" class="loading loading-spinner loading-xs"></span>
                            {{ isSaving ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 phone:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                <!-- LEFT COLUMN: STATS (Matching UserProfileView) -->
                <div class="space-y-6">
                    <div class="card bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
                        <div class="card-body p-6">
                            <div class="flex justify-between items-center mb-2">
                                <span
                                    class="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                                <span class="text-xs font-mono text-emerald-400">{{ game.xpProgress.current }} / {{
                                    game.xpProgress.max }} XP</span>
                            </div>
                            <progress class="progress progress-success w-full bg-slate-800 h-3" :value="levelProgress"
                                max="100"></progress>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono">{{ user.sap.toLocaleString() }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Net Worth</div>
                        </div>
                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono">{{ user.maxPlots }}</div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Plots Owned</div>
                        </div>

                        <div
                            class="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center">
                            <div class="text-lg font-bold text-white font-mono leading-6 mt-1">{{ stats.joinedAt }}
                            </div>
                            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Joined</div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: SETTINGS (Replacing Achievements/Discoveries) -->
                <div class="lg:col-span-2 space-y-8">

                    <!-- Game Preferences -->
                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-amber-500 rounded-full"></span>
                            Game Preferences
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
                            <div
                                class="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                                <div>
                                    <h4 class="font-bold text-white">Enable Notifications</h4>
                                    <p class="text-xs text-slate-400">Receive alerts about your flowers and market
                                        events.</p>
                                </div>
                                <input type="checkbox" class="toggle toggle-success"
                                    v-model="formData.notificationsEnabled" />
                            </div>

                            <div
                                class="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                                <div>
                                    <h4 class="font-bold text-white">Language</h4>
                                    <p class="text-xs text-slate-400">Select your preferred interface language.</p>
                                </div>
                                <select v-model="formData.language"
                                    class="select select-sm select-bordered bg-slate-900 text-white border-slate-700">
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Audio Settings -->
                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-violet-500 rounded-full"></span>
                            Audio
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-6">
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-slate-300 font-medium text-sm">Master Volume</span>
                                    <span class="text-emerald-400 font-mono font-bold text-sm">{{
                                        formatVolume(formData.volume) }}</span>
                                </div>
                                <input type="range" min="0" max="1" step="0.05" v-model.number="formData.volume"
                                    class="range range-success range-sm w-full" />
                            </div>

                            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
                                <div class="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-slate-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                    </svg>
                                    <span class="text-slate-300 font-medium text-sm">Mute All Sounds</span>
                                </div>
                                <input type="checkbox" class="toggle toggle-error toggle-sm"
                                    v-model="formData.isMuted" />
                            </div>
                        </div>
                    </div>

                    <!-- Account Settings -->
                    <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span class="w-1 h-6 bg-red-500 rounded-full"></span>
                            Account
                        </h3>
                        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
                            <div
                                class="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                <div class="text-sm text-slate-400">Logged in as:</div>
                                <div class="font-bold text-white font-mono bg-slate-800 px-2 py-1 rounded text-xs">{{
                                    auth.user?.tag }}</div>
                            </div>

                            <button @click="handleLogout"
                                class="btn btn-outline btn-error w-full hover:shadow-lg hover:shadow-red-900/20">
                                Log Out
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-bounce-in {
    animation: bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounceIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(10px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
</style>