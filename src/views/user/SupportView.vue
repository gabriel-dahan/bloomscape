<script setup lang="ts">
import { ref } from 'vue';
import { ReportController } from '@/server/controllers/ReportController';
import { ReportType } from '@/shared/types';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

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
    {
        id: ReportType.BUG,
        label: 'Bug Report',
        desc: 'Glitches & Errors',
        activeClass: 'border-red-500/50 bg-red-500/10 text-red-400 ring-1 ring-red-500/50',
        iconPath: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' // Warning Triangle
    },
    {
        id: ReportType.FEATURE,
        label: 'Feature Idea',
        desc: 'Feedback & Suggestions',
        activeClass: 'border-purple-500/50 bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/50',
        iconPath: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' // Lightbulb
    },
    {
        id: ReportType.PLAYER_REPORT,
        label: 'Player Report',
        desc: 'Conduct & Abuse',
        activeClass: 'border-amber-500/50 bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/50',
        iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' // Shield Check
    },
    {
        id: ReportType.OTHER,
        label: 'General Inquiry',
        desc: 'Other questions',
        activeClass: 'border-blue-500/50 bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/50',
        iconPath: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' // Chat
    },
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
        await ReportController.submitReport({
            type: formData.value.type,
            title: formData.value.title,
            description: formData.value.description
        });

        submitStatus.value = 'SUCCESS';
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
                                class="btn btn-outline border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                                </svg>
                                Discord
                            </a>
                            <a href="#"
                                class="btn btn-outline border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:border-sky-500 hover:text-white gap-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                Twitter
                            </a>
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
                        class="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">

                        <div v-if="submitStatus === 'SUCCESS'"
                            class="absolute inset-0 z-20 bg-slate-900 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                            <div
                                class="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-2">Report Submitted</h3>
                            <p class="text-slate-400 mb-8 max-w-sm">Thanks for your feedback. We will review it shortly.
                            </p>
                            <button @click="submitStatus = 'IDLE'"
                                class="btn btn-outline border-slate-700 text-white hover:bg-slate-800">Send
                                Another</button>
                        </div>

                        <h2 class="text-2xl font-bold text-white mb-2">Submit a Ticket</h2>
                        <p class="text-slate-500 text-sm mb-6">Select a category and describe your issue.</p>

                        <form @submit.prevent="submitForm" class="space-y-6">

                            <div class="grid grid-cols-2 gap-3">
                                <label v-for="type in REPORT_TYPES" :key="type.id"
                                    class="cursor-pointer relative group">
                                    <input type="radio" :value="type.id" v-model="formData.type" class="peer sr-only" />

                                    <div class="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 flex flex-col gap-3 h-full"
                                        :class="formData.type === type.id ? type.activeClass : 'text-slate-400'">

                                        <div
                                            class="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    :d="type.iconPath" />
                                            </svg>
                                        </div>

                                        <div>
                                            <div class="text-sm font-bold"
                                                :class="formData.type === type.id ? 'text-white' : 'text-slate-300'">{{
                                                    type.label }}</div>
                                            <div class="text-[10px] opacity-70 leading-tight">{{ type.desc }}</div>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div class="space-y-6">
                                <div class="group">
                                    <label
                                        class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                                        Subject
                                    </label>
                                    <input type="text" v-model="formData.title" placeholder="Brief summary..."
                                        class="input w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200" />
                                </div>

                                <div class="group">
                                    <label
                                        class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">
                                        Description
                                    </label>
                                    <textarea v-model="formData.description" rows="5" placeholder="Provide details..."
                                        class="textarea w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 leading-relaxed focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"></textarea>
                                </div>
                            </div>

                            <div v-if="submitStatus === 'ERROR'"
                                class="alert alert-error text-sm py-2 rounded-lg bg-red-900/20 border border-red-500/20 text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ errorMessage }}</span>
                            </div>

                            <div class="pt-2">
                                <button type="submit" :disabled="isSubmitting"
                                    class="btn btn-primary w-full text-slate-900 font-bold shadow-lg shadow-emerald-500/10 border-none hover:bg-emerald-400">
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