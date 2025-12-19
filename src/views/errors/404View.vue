<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="w-screen min-h-[50vw] bg-slate-950 relative flex items-center justify-center overflow-hidden font-sans">

        <div class="absolute inset-0 pointer-events-none">
            <div
                class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] animate-drift-slow opacity-60">
            </div>
            <div
                class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.8)_0%,transparent_70%)]">
            </div>
            <div class="particle p1"></div>
            <div class="particle p2"></div>
            <div class="particle p3"></div>
        </div>

        <div class="relative z-10 text-center px-6">

            <div class="mb-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
                    class="w-48 h-48 text-emerald-500/80 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-float">
                    <path fill="currentColor" d="M100 160l-60-30v-40l60-30 60 30v40z" class="text-slate-800" />
                    <path fill="currentColor" d="M40 90l60 30 60-30-60-30z" class="text-slate-700" />
                    <path fill="currentColor" d="M110 60l20-10 10 20-20 10z" class="text-slate-600 animate-pulse-slow"
                        style="animation-delay: 0.5s" />
                    <path fill="currentColor" d="M60 100l-20 10-10-20 20-10z"
                        class="text-slate-600 animate-pulse-slow" />
                    <path fill="currentColor" d="M140 130l15-5 5 15-15 5z" class="text-slate-700 animate-pulse-slow"
                        style="animation-delay: 1s" />
                    <path stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"
                        d="M100 70l-10 20 15 10-20 30 5 15" class="text-emerald-400" />
                </svg>
            </div>

            <h1
                class="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 via-emerald-600 to-slate-900 drop-shadow-2xl">
                404
            </h1>

            <h2 class="text-2xl md:text-3xl font-bold text-white mt-6 tracking-wide uppercase">
                Uncharted Territory
            </h2>

            <p class="text-slate-400 mt-4 max-w-md mx-auto text-lg leading-relaxed">
                You've sailed past the known world. This island seems to have crumbled into the void, or perhaps it
                never existed on our charts at all.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                <button @click="router.push('/')"
                    class="btn bg-emerald-600 hover:bg-emerald-500 text-white border-none font-bold px-8 shadow-lg shadow-emerald-900/50 group relative overflow-hidden">
                    <span class="relative z-10">Return to Safety</span>
                    <div
                        class="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10">
                    </div>
                </button>

                <button @click="router.go(-1)" class="btn btn-ghost text-slate-300 hover:text-white hover:bg-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Go Back
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Custom animations not provided by default Tailwind */

/* Floating effect for the main icon */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Slow pulse for broken parts */
@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.6;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.05);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
}

/* Background fog drifting */
@keyframes drift {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }

    50% {
        transform: translate(-5%, -5%) rotate(2deg);
    }

    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}

.animate-drift-slow {
    animation: drift 30s ease-in-out infinite;
}

/* Tiny floating particles in background */
.particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.3);
    /* Emeraldish */
    animation: float-up linear infinite;
}

.p1 {
    width: 4px;
    height: 4px;
    left: 20%;
    bottom: -10px;
    animation-duration: 15s;
}

.p2 {
    width: 6px;
    height: 6px;
    left: 60%;
    bottom: -20px;
    animation-duration: 20s;
    animation-delay: 2s;
    opacity: 0.2;
}

.p3 {
    width: 3px;
    height: 3px;
    left: 80%;
    bottom: -10px;
    animation-duration: 12s;
    animation-delay: 5s;
}

@keyframes float-up {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }

    10% {
        opacity: 0.5;
    }

    90% {
        opacity: 0.5;
    }

    100% {
        transform: translateY(-100vh) translateX(20px);
        opacity: 0;
    }
}
</style>