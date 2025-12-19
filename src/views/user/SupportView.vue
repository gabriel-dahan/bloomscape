<script setup lang="ts">
import { ref } from 'vue';
import { ReportController } from '@/server/controllers/ReportController';
import { ReportType } from '@/shared/types';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
// const repo = remult.repo(UserReport); // Supprimé

// --- STATE ---
const isSubmitting = ref(false);
const submitStatus = ref<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
const errorMessage = ref('');

const formData = ref({
    type: ReportType.BUG,
    title: '',
    description: ''
});

// --- CONFIG ---
const REPORT_TYPES = [
    { id: ReportType.BUG, label: 'Report Bug', icon: '🐛', desc: 'Something is broken', color: 'text-red-400 border-red-500/30 peer-checked:bg-red-500/10' },
    { id: ReportType.FEATURE, label: 'Feature Request', icon: '✨', desc: 'I have an idea', color: 'text-purple-400 border-purple-500/30 peer-checked:bg-purple-500/10' },
    { id: ReportType.PLAYER_REPORT, label: 'Report Player', icon: '🛡️', desc: 'Bad behavior', color: 'text-amber-400 border-amber-500/30 peer-checked:bg-amber-500/10' },
    { id: ReportType.OTHER, label: 'Other Inquiry', icon: '📝', desc: 'General contact', color: 'text-slate-400 border-slate-500/30 peer-checked:bg-slate-500/10' },
];

const FAQS = [
    { q: 'How do I earn Sap?', a: 'Sap is earned by selling flowers to other players or completing daily objectives.' },
    { q: 'Can I move my plots?', a: 'Once a plot is purchased, it is fixed to the grid. You cannot move it, but you can change the soil type later.' },
    { q: 'I found a bug!', a: 'Please use the form on the right to report it. Include as much detail as possible.' },
];

// --- ACTIONS ---
async function submitForm() {
    if (!auth.user) {
        submitStatus.value = 'ERROR';
        errorMessage.value = 'You must be logged in to submit a ticket.';
        return;
    }

    isSubmitting.value = true;
    submitStatus.value = 'IDLE';
    errorMessage.value = '';

    try {
        // APPEL AU CONTROLLER BACKEND
        await ReportController.submitReport({
            type: formData.value.type,
            title: formData.value.title,
            description: formData.value.description
        });

        submitStatus.value = 'SUCCESS';

        // Reset form
        formData.value.title = '';
        formData.value.description = '';
        formData.value.type = ReportType.BUG;

    } catch (e: any) {
        submitStatus.value = 'ERROR';
        errorMessage.value = e.message || 'An error occurred.';
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-200 pt-24 pb-12 px-4 phone:px-8 relative overflow-hidden">

        <div
            class="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none">
        </div>
        <div
            class="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto relative z-10">

            <div class="text-center mb-16 animate-fade-in">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Support Center</h1>
                <p class="text-slate-400 max-w-2xl mx-auto text-lg">
                    Need help with your garden? Have a suggestion for the economy?
                    Our team is here to help.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                <div class="space-y-12 animate-slide-right">

                    <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                        <h3 class="text-xl font-bold text-white mb-4">Community Channels</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <a href="#"
                                class="btn btn-outline border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white gap-2">Discord</a>
                            <a href="#"
                                class="btn btn-outline border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white gap-2">Twitter</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                        <div class="space-y-2">
                            <div v-for="(item, i) in FAQS" :key="i"
                                class="collapse collapse-arrow bg-slate-900 border border-slate-800 rounded-xl">
                                <input type="radio" name="my-accordion-2" :checked="i === 0" />
                                <div class="collapse-title text-sm font-medium text-slate-200">{{ item.q }}</div>
                                <div class="collapse-content text-sm text-slate-400">
                                    <p>{{ item.a }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animate-slide-left">
                    <div
                        class="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">

                        <div v-if="submitStatus === 'SUCCESS'"
                            class="absolute inset-0 z-20 bg-slate-900 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                            <div
                                class="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 text-4xl">
                                ✓</div>
                            <h3 class="text-2xl font-bold text-white mb-2">Report Submitted</h3>
                            <p class="text-slate-400 mb-8">Thanks for your feedback.</p>
                            <button @click="submitStatus = 'IDLE'"
                                class="btn btn-outline border-slate-700 text-white">Send Another</button>
                        </div>

                        <h2 class="text-2xl font-bold text-white mb-6">Submit a Ticket</h2>

                        <form @submit.prevent="submitForm" class="space-y-6">
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-slate-500 uppercase">Category</label>
                                <div class="grid grid-cols-2 gap-3">
                                    <label v-for="type in REPORT_TYPES" :key="type.id"
                                        class="cursor-pointer relative group">
                                        <input type="radio" :value="type.id" v-model="formData.type"
                                            class="peer sr-only" />
                                        <div class="p-4 rounded-xl border border-slate-700 bg-slate-950/50 hover:border-slate-500 transition-all flex flex-col items-start gap-2 h-full"
                                            :class="type.color + (formData.type === type.id ? ' border-opacity-100 ring-1 ring-inset ring-current bg-opacity-20' : '')">
                                            <div class="text-2xl mb-1">{{ type.icon }}</div>
                                            <div>
                                                <div class="text-sm font-bold text-slate-200">{{ type.label }}</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div class="form-control">
                                <label class="label"><span
                                        class="text-xs font-bold text-slate-500 uppercase">Subject</span></label>
                                <input type="text" v-model="formData.title"
                                    class="input input-bordered bg-slate-950 border-slate-700 focus:border-emerald-500 text-slate-200" />
                            </div>

                            <div class="form-control">
                                <label class="label"><span
                                        class="text-xs font-bold text-slate-500 uppercase">Description</span></label>
                                <textarea v-model="formData.description" rows="5"
                                    class="textarea textarea-bordered bg-slate-950 border-slate-700 focus:border-emerald-500 text-slate-200 leading-relaxed"></textarea>
                            </div>

                            <div v-if="submitStatus === 'ERROR'" class="alert alert-error text-sm py-2 rounded-lg">
                                <span>{{ errorMessage }}</span>
                            </div>

                            <div class="pt-2">
                                <button type="submit" :disabled="isSubmitting"
                                    class="btn btn-primary w-full text-white shadow-lg shadow-emerald-500/20">
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                    <span v-else>Submit Ticket</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-right {
    animation: slideRight 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 0.2s;
}

.animate-slide-left {
    animation: slideLeft 0.6s ease-out forwards;
    opacity: 0;
    animation-delay: 0.4s;
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

@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideLeft {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>