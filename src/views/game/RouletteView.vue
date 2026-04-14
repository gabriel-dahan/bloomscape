<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { remult } from 'remult';
import { FlowerSpecies } from '@/shared/flowers/FlowerSpecies';
import { RouletteController } from '@/server/controllers/RouletteController';
import { useAuthStore } from '@/stores/auth';
import FlowerImage from '@/components/FlowerImage.vue';
import PixelatedImage from '@/components/icons/PixelImageViewer.vue';

const auth = useAuthStore();
const activeTab = ref<'prizes' | 'blackred' | 'shop'>('prizes');

// --- Prizes State ---
const dailyState = ref<any>(null);
const isLoading = ref(true);
const spinning = ref(false);
const wonPrize = ref<any>(null);
const prizes = ref<any[]>([]);
const hoveredIndex = ref<number | null>(null);
const flowerSpeciesList = ref<FlowerSpecies[]>([]);

const sortedPrizes = computed(() => {
    return [...prizes.value].sort((a, b) => a.probability - b.probability);
});

function getPrizeName(p: any) {
    if (p.type === 'FLOWER') {
        const species = flowerSpeciesList.value.find(s => s.slugName === p.value);
        return species ? species.name : p.value;
    }
    return p.value;
}

const numSegments = computed(() => prizes.value.length);
const sliceAngle = computed(() => numSegments.value > 0 ? 360 / numSegments.value : 0);
const wheelRotation = ref(0);

function getPetalPath(angle: number, isBack = false) {
    if (!angle) return '';
    const halfAngle = (angle * Math.PI) / 180 / 2;
    const innerR = isBack ? 70 : 90;
    const outerR = isBack ? 340 : 310; // Doubled radii

    // Base points
    const p1x = innerR * Math.sin(-halfAngle * 0.6);
    const p1y = -innerR * Math.cos(-halfAngle * 0.6);
    const p4x = innerR * Math.sin(halfAngle * 0.6);
    const p4y = -innerR * Math.cos(halfAngle * 0.6);

    // Mid shoulder points
    const midR = isBack ? 260 : 220;
    const p2x = midR * Math.sin(-halfAngle * 1.4);
    const p2y = -midR * Math.cos(-halfAngle * 1.4);
    const p3x = midR * Math.sin(halfAngle * 1.4);
    const p3y = -midR * Math.cos(halfAngle * 1.4);

    return `M ${p1x} ${p1y} C ${p2x} ${p2y}, 0 ${-outerR - 60}, ${p3x} ${p3y} L ${p4x} ${p4y} Z`;
}

// --- Black/Red State ---
const betAmount = ref(1);
const selectedColor = ref<'red' | 'black' | null>(null);
const brSpinning = ref(false);
const brResult = ref<any>(null);
const brRecentResults = ref<any[]>([]);

const brSegments = 12;
const brSlice = 360 / brSegments;
const brWheelRotation = ref(0);
const ballRotation = ref(0);

const brGradient = computed(() => {
    let g = 'conic-gradient(';
    for (let i = 0; i < brSegments; i++) {
        const color = i % 2 === 0 ? '#e11d48' : '#18181b';
        g += `${color} ${i * brSlice}deg ${(i + 1) * brSlice}deg${i === brSegments - 1 ? '' : ', '}`;
    }
    return g + ')';
});

// --- Shop State ---
const buyAmount = ref(1);
const shopLoading = ref(false);

const todayUtc = new Date().toISOString().substring(0, 10);
const isFreePlay = computed(() => (auth.user as any)?.lastFreeRouletteDate !== todayUtc);
const paidPlaysLeft = computed(() => 5 - ((auth.user as any)?.dailyRoulettePlays || 0));

async function loadData() {
    isLoading.value = true;
    try {
        const fetched = await RouletteController.getPrizesConfig();
        // Simple shuffle
        prizes.value = fetched.sort(() => Math.random() - 0.5);
        if (flowerSpeciesList.value.length === 0) {
            flowerSpeciesList.value = await remult.repo(FlowerSpecies).find();
        }
        dailyState.value = await RouletteController.getDailyState();
        brRecentResults.value = await RouletteController.getRecentCasinoResults('BlackAndRed');
        await auth.fetchSessionUser();
    } catch (e) {
        console.error(e);
    } finally {
        isLoading.value = false;
    }
}

async function spinPrizes() {
    if (spinning.value) return;
    if (!isFreePlay.value && paidPlaysLeft.value <= 0) return alert("Daily limit reached.");
    if (!isFreePlay.value && (auth.user as any).rouletteCoins < 1) return alert("Insufficient Coins!");

    spinning.value = true;
    wonPrize.value = null;

    try {
        const res = await RouletteController.playPrizesRoulette();
        const prizeIndex = prizes.value.findIndex(p => p.id === res.prizeId);

        // Align to the exact center of the petal (at index * sliceAngle)
        const centerAngle = prizeIndex * sliceAngle.value;
        let targetRotation = 360 - centerAngle;

        const currentMod = wheelRotation.value % 360;
        let delta = targetRotation - currentMod;
        if (delta < 0) delta += 360;

        wheelRotation.value += delta + 2160; // spin clockwise 6 times

        setTimeout(async () => {
            wonPrize.value = res;
            await loadData();
            spinning.value = false;
        }, 4000);

    } catch (e: any) {
        alert(e.message);
        spinning.value = false;
    }
}

async function spinBlackRed() {
    if (brSpinning.value) return;
    if (!selectedColor.value) return alert("Select a color.");
    if (betAmount.value < 1 || betAmount.value > 10 || !Number.isInteger(betAmount.value)) return alert("Invalid bet (Max 10).");
    if ((auth.user as any).rouletteCoins < betAmount.value) return alert("Insufficient coins.");

    brSpinning.value = true;
    brResult.value = null;

    try {
        const res = await RouletteController.playBlackAndRed(betAmount.value, selectedColor.value as any);

        const possibleIndices = [];
        for (let i = 0; i < brSegments; i++) {
            if ((i % 2 === 0 && res.resultColor === 'red') || (i % 2 !== 0 && res.resultColor === 'black')) {
                possibleIndices.push(i);
            }
        }
        const winIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
        const centerAngle = winIndex * brSlice + (brSlice / 2);

        // Wheel spins clockwise 4 times.
        const currentWSpins = Math.floor(brWheelRotation.value / 360);
        brWheelRotation.value = (currentWSpins * 360) + 1440;

        // Ball rotates counter-clockwise
        const currentRemainder = ballRotation.value % 360;
        let delta = centerAngle - currentRemainder;
        if (delta > 0) delta -= 360;

        ballRotation.value += delta - 2160; // -6 spins + delta

        setTimeout(async () => {
            brResult.value = res;
            await auth.fetchSessionUser();
            brRecentResults.value = await RouletteController.getRecentCasinoResults('BlackAndRed');
            brSpinning.value = false;
        }, 4000);

    } catch (e: any) {
        alert(e.message);
        brSpinning.value = false;
    }
}

async function buyCoins() {
    if (shopLoading.value) return;
    if (buyAmount.value < 1) return;
    const cost = buyAmount.value * 10;
    if ((auth.user as any).rubies < cost) return alert("Not enough rubies!");

    shopLoading.value = true;
    try {
        await RouletteController.buyRouletteCoins(buyAmount.value);
        await auth.fetchSessionUser();
        alert(`Successfully bought ${buyAmount.value} coins!`);
    } catch (e: any) {
        alert(e.message);
    } finally {
        shopLoading.value = false;
    }
}

function getLimitText(p: any) {
    if (p.dailyLimit === -1) return "Unlimited";
    if (!dailyState.value?.prizesRemaining) return "Loading...";
    return (dailyState.value.prizesRemaining[p.id] ?? p.dailyLimit) + " remaining today";
}

function getPrizeImage(p: any) {
    if (p.type === 'SAP') return '/game/sap_drop.png';
    if (p.type === 'RUBY') return '/game/ruby.png';
    if (p.type === 'TOKEN') return '/game/roulette_coin.png';
    return '';
}

onMounted(() => {
    loadData();
});
</script>

<template>
    <div
        class="w-screen min-h-screen bg-[rgb(18,5,5)] text-slate-200 overflow-y-auto relative flex flex-col justify-center">
        <!-- Background decorative blobs -->
        <div
            class="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-red-950/80 via-rose-950/40 to-transparent pointer-events-none z-0">
        </div>
        <div class="fixed top-20 right-20 w-96 h-96 bg-red-800/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>
        <div
            class="fixed bottom-20 left-40 w-[500px] h-[500px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none z-0">
        </div>

        <div class="max-w-6xl w-full mx-auto px-6 py-12 relative z-10">

            <header class="text-center mb-12">
                <h1
                    class="page-title text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 drop-shadow-sm uppercase tracking-wider">
                    Bloom Casino
                </h1>
                <p class="text-indigo-200/80 max-w-xl mx-auto text-lg">
                    Test your luck. Win exclusive flowers, bountiful sap, shiny rubies, and more.
                </p>

                <!-- Personal Balances -->
                <div v-if="auth.user" class="mt-8 flex flex-wrap justify-center gap-4">
                    <div
                        class="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl shadow-black/50">
                        <PixelatedImage src="/game/roulette_coin.png" width="24px" height="24px" />
                        <div class="flex flex-col text-left">
                            <span class="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Coins</span>
                            <span class="text-amber-400 font-mono font-bold text-lg leading-none">{{ (auth.user as
                                any).rouletteCoins?.toLocaleString() || 0 }}</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl shadow-black/50">
                        <PixelatedImage src="/game/ruby.png" width="24px" height="24px" />
                        <div class="flex flex-col text-left">
                            <span class="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Rubies</span>
                            <span class="text-rose-400 font-mono font-bold text-lg leading-none">{{ (auth.user as
                                any).rubies?.toLocaleString() || 0 }}</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Navigation Tabs -->
            <div class="flex justify-center mb-10">
                <div
                    class="bg-slate-900/60 p-1.5 rounded-full border border-white/10 flex flex-wrap shadow-lg backdrop-blur-sm gap-1">
                    <button @click="activeTab = 'prizes'"
                        class="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
                        :class="activeTab === 'prizes' ? 'bg-red-700 text-white shadow-md shadow-red-700/30' : 'text-slate-400 hover:text-white hover:bg-white/5'">
                        Prizes Wheel
                    </button>
                    <button @click="activeTab = 'blackred'"
                        class="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
                        :class="activeTab === 'blackred' ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' : 'text-slate-400 hover:text-white hover:bg-white/5'">
                        Black & Red
                    </button>
                    <button @click="activeTab = 'shop'"
                        class="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
                        :class="activeTab === 'shop' ? 'bg-amber-500 text-slate-900 shadow-md shadow-amber-500/30' : 'text-slate-400 hover:text-white hover:bg-white/5'">
                        Exchange
                    </button>
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="flex justify-center py-20">
                <span class="loading loading-ring loading-lg text-red-500"></span>
            </div>

            <div v-else>
                <!-- Prizes Wheel Tab -->
                <transition name="fade" mode="out-in">
                    <div v-if="activeTab === 'prizes'" class="animate-fade-in">
                        <div class="glass-panel p-8 md:p-12 text-center relative overflow-hidden group">

                            <!-- Result Overlay -->
                            <div v-if="wonPrize"
                                class="absolute inset-0 bg-slate-950/90 z-20 backdrop-blur-md flex flex-col items-center justify-center animate-zoom-in">
                                <h2
                                    class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 mb-6 drop-shadow-lg">
                                    You Won!</h2>

                                <div
                                    class="w-32 h-32 rounded-3xl bg-slate-800/80 border border-amber-500/50 flex items-center justify-center text-6xl shadow-[0_0_40px_rgba(245,158,11,0.3)] mb-6">
                                    <template v-if="['SAP', 'RUBY', 'TOKEN'].includes(wonPrize.prizeType)">
                                        <PixelatedImage :src="getPrizeImage(wonPrize)" width="80px" height="80px"
                                            class="drop-shadow-xl" />
                                    </template>
                                    <template v-else>
                                        <FlowerImage :slug="wonPrize.prizeValue" status="GROWING2" type="icon"
                                            class="w-24 h-24 drop-shadow-xl" />
                                    </template>
                                </div>

                                <p class="text-3xl font-extrabold text-white mb-2">{{ wonPrize.prizeAmount > 1 ?
                                    wonPrize.prizeAmount + ' ' : '' }}{{
                                        getPrizeName({ type: wonPrize.prizeType, value: wonPrize.prizeValue }) }}</p>
                                <button @click="wonPrize = null"
                                    class="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold transition-all">Close</button>
                            </div>

                            <div class="relative z-10">

                                <div class="relative w-[760px] h-[760px] mx-auto mb-10 overflow-visible">
                                    <!-- Decorative backdrop glow -->
                                    <div
                                        class="absolute inset-0 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none">
                                    </div>

                                    <!-- SVG Visual Wheel -->
                                    <svg viewBox="-400 -400 800 800"
                                        class="absolute inset-0 w-full h-full overflow-visible drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                                        <defs>
                                            <linearGradient id="jackpotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stop-color="#f59e0b" />
                                                <stop offset="60%" stop-color="#d97706" />
                                                <stop offset="100%" stop-color="#78350f" />
                                            </linearGradient>
                                            <linearGradient id="darkGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stop-color="#4b5563" />
                                                <stop offset="100%" stop-color="#111827" />
                                            </linearGradient>
                                            <linearGradient id="darkGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stop-color="#374151" />
                                                <stop offset="100%" stop-color="#030712" />
                                            </linearGradient>
                                            <linearGradient id="backPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stop-color="#7c2d12" />
                                                <stop offset="100%" stop-color="#450a0a" />
                                            </linearGradient>
                                            <filter id="petalGlow">
                                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                            <radialGradient id="pollenGrad">
                                                <stop offset="0%" stop-color="#fbbf24" />
                                                <stop offset="70%" stop-color="#92400e" />
                                                <stop offset="100%" stop-color="#451a03" />
                                            </radialGradient>
                                        </defs>

                                        <!-- Background Petals (Static Depth) -->
                                        <g :style="{ transform: `rotate(${wheelRotation * 0.5}deg)`, transition: 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)' }"
                                            class="opacity-40">
                                            <path v-for="i in prizes.length" :key="'back-' + i"
                                                :d="getPetalPath(sliceAngle, true)" fill="url(#backPetalGrad)"
                                                stroke="rgba(0,0,0,0.3)" stroke-width="1"
                                                :style="{ transform: `rotate(${i * sliceAngle + (sliceAngle / 2)}deg)` }" />
                                        </g>

                                        <!-- Rotatable Petals Group -->
                                        <g
                                            :style="{ transform: `rotate(${wheelRotation}deg)`, transition: 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)' }">
                                            <g v-for="(p, i) in prizes" :key="p.id"
                                                :style="{ transform: `rotate(${i * sliceAngle}deg)` }"
                                                class="transition-transform duration-300 transform-gpu cursor-pointer"
                                                :class="hoveredIndex === i ? 'scale-[1.08]' : 'scale-100'"
                                                @mouseenter="hoveredIndex = i" @mouseleave="hoveredIndex = null">
                                                <path :d="getPetalPath(sliceAngle)"
                                                    :fill="p.type === 'FLOWER' ? 'url(#jackpotGrad)' : (i % 2 === 0 ? 'url(#darkGrad1)' : 'url(#darkGrad2)')"
                                                    :stroke="p.type === 'FLOWER' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.1)'"
                                                    stroke-width="2"
                                                    :filter="p.type === 'FLOWER' ? 'url(#petalGlow)' : ''"
                                                    class="transition-all duration-300 hover:brightness-125" />
                                            </g>
                                        </g>
                                    </svg>

                                    <!-- Wheel Icons & Text HTML Layer (Rotates with the wheel) -->
                                    <div class="absolute inset-0 pointer-events-none"
                                        :style="{ transform: `rotate(${wheelRotation}deg)`, transition: 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)' }">

                                        <div v-for="(p, i) in prizes" :key="'label-' + p.id"
                                            class="absolute top-1/2 left-1/2 flex flex-col items-center justify-start origin-bottom w-48 -ml-24"
                                            :style="{
                                                height: '360px',
                                                transform: `rotate(${i * sliceAngle}deg)`,
                                                marginTop: '-360px'
                                            }">
                                            <div class="flex flex-col items-center pt-20 gap-3 transition-transform duration-300"
                                                :class="hoveredIndex === i ? 'scale-110 -translate-y-4' : ''">
                                                <div class="w-20 h-20 flex items-center justify-center">
                                                    <PixelatedImage v-if="p.type !== 'FLOWER'" :src="getPrizeImage(p)"
                                                        width="56px" height="56px"
                                                        class="drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]" />
                                                    <FlowerImage v-else :slug="p.value" status="GROWING2" type="icon"
                                                        class="w-20 h-20 drop-shadow-[0_0_25px_rgba(245,158,11,0.8)] animate-pulse" />
                                                </div>
                                                <span
                                                    class="text-[14px] font-black text-white px-2 tracking-wide text-center uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight max-w-[160px]">
                                                    {{ p.amount > 1 ? p.amount + ' ' : '' }}{{ getPrizeName(p) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Center Hub (Pistil) -->
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-slate-950 rounded-full border-[8px] border-amber-600/60 flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.9)] z-[60] backdrop-blur-md pointer-events-auto overflow-hidden">
                                        <div class="absolute inset-0 rounded-full opacity-50"
                                            style="background: radial-gradient(circle, #fbbf24 0%, #92400e 70%, #451a03 100%)">
                                        </div>
                                        <div
                                            class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-amber-400/20 to-transparent">
                                        </div>
                                        <div
                                            class="absolute inset-4 rounded-full border-2 border-amber-500/30 border-dashed animate-[spin_20s_linear_infinite]">
                                        </div>
                                        <div
                                            class="absolute inset-10 rounded-full bg-amber-500/10 blur-2xl animate-pulse">
                                        </div>
                                        <span
                                            class="relative z-10 text-amber-500 font-black text-xl tracking-[0.3em] leading-none uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">Bloom</span>
                                    </div>

                                    <!-- Pointer (Sleek Crystal Needle - Doubled size and adjusted) -->
                                    <div
                                        class="absolute -top-20 left-1/2 -translate-x-1/2 z-[70] flex flex-col items-center pointer-events-none group filter drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                                        <div
                                            class="w-10 h-10 bg-slate-900 border-4 border-amber-500 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                                            <div
                                                class="w-4 h-4 bg-amber-400 rounded-full animate-pulse shadow-[0_0_15px_#fbbf24]">
                                            </div>
                                        </div>
                                        <div
                                            class="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[60px] border-t-amber-500 -mt-3">
                                        </div>
                                        <div
                                            class="absolute top-[40px] w-[4px] h-[35px] bg-white/60 blur-[1px] rounded-full">
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center justify-center gap-4">
                                    <button @click="spinPrizes" :disabled="spinning"
                                        class="relative overflow-hidden group px-12 py-4 rounded-full font-black text-xl tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        :class="isFreePlay ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]' : 'bg-red-700 text-white hover:bg-red-600 hover:shadow-[0_0_30px_rgba(185,28,28,0.4)]'">
                                        <span class="relative z-10">{{ isFreePlay ? 'SPIN FOR FREE' : 'SPIN (1 COIN)'
                                        }}</span>
                                        <div
                                            class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                        </div>
                                    </button>
                                    <p v-if="!isFreePlay" class="text-sm font-medium"
                                        :class="paidPlaysLeft > 0 ? 'text-rose-300' : 'text-rose-400'">
                                        {{ paidPlaysLeft }} paid plays remaining today
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Prizes List -->
                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-white mb-6 uppercase tracking-wider text-center">Today's
                                Prize Pool</h3>
                            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                <div v-for="p in sortedPrizes" :key="p.id"
                                    class="glass-panel p-4 flex flex-col items-center justify-center text-center gap-3 transition-transform hover:-translate-y-1">
                                    <div
                                        class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">
                                        <template v-if="['SAP', 'RUBY', 'TOKEN'].includes(p.type)">
                                            <PixelatedImage :src="getPrizeImage(p)" width="32px" height="32px" />
                                        </template>
                                        <template v-else>
                                            <FlowerImage :slug="p.value" status="GROWING2" type="icon"
                                                class="w-10 h-10 drop-shadow-md" />
                                        </template>
                                    </div>
                                    <div>
                                        <p class="font-bold text-white text-sm"
                                            :class="{ 'text-amber-400': p.type === 'FLOWER' }">
                                            {{ p.amount }} {{ getPrizeName(p) }}
                                        </p>
                                        <p
                                            class="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-0.5">
                                            {{ Number((p.probability * 100).toFixed(6)) }}% Chance
                                        </p>
                                        <p class="text-[10px] text-slate-400">
                                            {{ getLimitText(p) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- Black & Red Tab -->
                <transition name="fade" mode="out-in">
                    <div v-if="activeTab === 'blackred'" class="animate-fade-in max-w-5xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                            <!-- Main Game Area -->
                            <div class="col-span-1 lg:col-span-2 text-center relative">
                                <h2 class="text-4xl font-black text-white mb-2 tracking-wide uppercase">Roulette</h2>
                                <p class="text-slate-400 mb-12">Guess the correct color to double your bet.</p>

                                <!-- The Result Display Overlay -->
                                <div v-if="brResult"
                                    class="absolute inset-0 z-40 bg-slate-950/80 backdrop-blur-md p-6 flex flex-col items-center justify-center animate-zoom-in rounded-3xl">
                                    <h3 class="text-4xl font-extrabold mb-4"
                                        :class="brResult.won ? 'text-emerald-400' : 'text-rose-400 drop-shadow-[0_0_20px_rgba(225,29,72,0.4)]'">
                                        {{ brResult.won ? 'You Won!' : 'You Lost!' }}
                                    </h3>
                                    <div
                                        class="bg-zinc-900 border border-white/20 px-8 py-6 rounded-3xl shadow-xl flex flex-col items-center gap-2 mb-6">
                                        <span class="text-slate-400 uppercase text-xs font-bold tracking-widest">Winning
                                            Color</span>
                                        <span class="text-4xl font-black uppercase"
                                            :class="brResult.resultColor === 'red' ? 'text-rose-500' : 'text-slate-100'">
                                            {{ brResult.resultColor }}
                                        </span>
                                    </div>
                                    <p class="text-slate-300 font-mono text-lg flex items-center gap-2">
                                        New Balance: <span class="font-bold border-b border-dashed">{{
                                            brResult.newBalance
                                            }}</span>
                                        <PixelatedImage src="/game/roulette_coin.png" width="20px" height="20px" />
                                    </p>
                                    <button @click="brResult = null"
                                        class="mt-8 px-10 py-3 bg-white hover:bg-slate-200 text-slate-900 rounded-full font-bold transition-all shadow-lg">Play
                                        Again</button>
                                </div>

                                <div class="relative w-80 h-80 mx-auto mb-12">
                                    <!-- Black/Red Visual Wheel -->
                                    <div class="absolute inset-0 rounded-full border-[8px] border-amber-600/80 overflow-hidden shadow-2xl"
                                        :style="{ background: brGradient, transform: `rotate(${brWheelRotation}deg)`, transition: 'transform 4s cubic-bezier(0.2, 0.8, 0.3, 1)' }">

                                        <div v-for="i in brSegments" :key="i"
                                            class="absolute top-0 left-1/2 -translate-x-1/2 w-8 flex flex-col items-center pt-2 origin-bottom text-white/50 font-black text-xs"
                                            :style="{ height: '50%', transform: `rotate(${(i - 1) * brSlice + brSlice / 2}deg)` }">
                                            {{ i }}
                                        </div>

                                    </div>

                                    <!-- Center Hub -->
                                    <div
                                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-zinc-900 rounded-full border-8 border-amber-600/50 flex flex-col items-center justify-center shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] z-20 pointer-events-auto gap-3">
                                        <span
                                            class="text-amber-500 font-bold opacity-50 text-[10px] tracking-widest leading-none uppercase">Select
                                            Color</span>
                                        <div class="flex gap-4">
                                            <button @click="selectedColor = 'black'"
                                                class="w-12 h-12 rounded-full border-[3px] bg-zinc-950 transition-all hover:scale-110 cursor-pointer shadow-lg"
                                                :class="selectedColor === 'black' ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'border-zinc-700 hover:border-zinc-500'">
                                            </button>
                                            <button @click="selectedColor = 'red'"
                                                class="w-12 h-12 rounded-full border-[3px] bg-rose-600 transition-all hover:scale-110 cursor-pointer shadow-lg"
                                                :class="selectedColor === 'red' ? 'border-white shadow-[0_0_15px_rgba(225,29,72,0.6)]' : 'border-rose-900 hover:border-rose-400'">
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Ball rotating logic -->
                                    <div
                                        class="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
                                        <div class="absolute inset-0"
                                            :style="{ transform: `rotate(${ballRotation}deg)`, transition: 'transform 4s cubic-bezier(0.2, 1, 0.3, 1)' }">
                                            <!-- Actual ball dot. Distance translates outwards: from hub to pocket -->
                                            <!-- Pocket radius is ~125px -->
                                            <div class="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-slate-50 shadow-[0_0_12px_rgba(255,255,255,0.9)] z-40 transition-all ease-[cubic-bezier(0.4,0,0.1,1)]"
                                                :style="{ transform: `translate(-50%, -50%) translateY(-${brResult || brSpinning ? 122 : 148}px)`, transitionDuration: '4s' }">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center justify-center gap-6">
                                    <div
                                        class="bg-black/30 p-2 rounded-full border border-white/5 inline-flex items-center w-full max-w-sm relative">
                                        <span class="pl-6 text-xl tracking-widest text-slate-500">BET</span>
                                        <input type="number" v-model="betAmount" min="1" max="10"
                                            class="bg-transparent border-none outline-none text-center font-mono text-2xl font-bold flex-1 text-amber-400 w-full z-10 relative" />
                                        <div
                                            class="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 z-0 opacity-50 pointer-events-none">
                                            <PixelatedImage src="/game/roulette_coin.png" />
                                        </div>
                                    </div>

                                    <button @click="spinBlackRed" :disabled="brSpinning || !selectedColor"
                                        class="px-12 py-4 rounded-full font-black text-xl tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-slate-900 hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                        <span v-if="brSpinning" class="loading loading-spinner"></span>
                                        <span v-else>PLACE BET</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Recent Results feed -->
                            <div
                                class="col-span-1 glass-panel p-6 overflow-hidden flex flex-col max-h-[600px] lg:max-h-full">
                                <h3
                                    class="text-xl font-bold text-white mb-4 uppercase tracking-wider sticky top-0 bg-slate-900/0 backdrop-blur pb-2 z-10 border-b border-white/10 text-center">
                                    Your Recent Activity</h3>
                                <div class="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                    <div v-for="r in brRecentResults" :key="r.id"
                                        class="bg-black/30 rounded-xl p-3 flex flex-col border border-white/5">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-slate-300 font-bold text-sm">You</span>
                                            <span class="text-[10px] text-slate-500">{{ new
                                                Date(r.createdAt).toLocaleTimeString() }}</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex gap-1 items-center">
                                                <span class="text-xs text-slate-400">Bet:</span>
                                                <span class="text-amber-400 font-mono text-sm font-bold">{{ r.betAmount
                                                }}</span>
                                                <PixelatedImage src="/game/roulette_coin.png" width="12px"
                                                    height="12px" />
                                            </div>

                                            <div class="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                                                :class="r.resultPayload === 'red' ? 'bg-rose-600' : 'bg-zinc-950'">
                                            </div>
                                        </div>

                                        <div class="mt-2 text-right">
                                            <span v-if="r.won"
                                                class="text-emerald-400 text-xs font-bold tracking-wider uppercase">+{{
                                                    r.winAmount }} COINS</span>
                                            <span v-else
                                                class="text-rose-400/70 text-xs font-bold tracking-wider uppercase">LOST</span>
                                        </div>
                                    </div>
                                    <div v-if="brRecentResults.length === 0"
                                        class="text-center py-10 text-slate-500 text-sm">
                                        No recent games.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- Shop Tab -->
                <transition name="fade" mode="out-in">
                    <div v-if="activeTab === 'shop'" class="animate-fade-in max-w-2xl mx-auto">
                        <div class="glass-panel p-8 md:p-12 flex flex-col items-center text-center">
                            <div
                                class="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                                <PixelatedImage src="/game/roulette_coin.png" width="40px" height="40px"
                                    class="drop-shadow-lg" />
                            </div>
                            <h2 class="text-3xl font-black text-white mb-2 tracking-wide">Coin Exchange</h2>
                            <p class="text-slate-400 mb-8 max-w-sm">Convert your Rubies into Roulette Coins. Rate: 10
                                Rubies = 1 Coin.
                            </p>

                            <div
                                class="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md bg-black/40 p-6 rounded-3xl border border-white/5 mb-8">
                                <div class="flex-1 flex flex-col items-center">
                                    <span class="text-xs uppercase font-bold text-slate-500 mb-2">You Pay</span>
                                    <div class="flex items-center gap-2 text-rose-400 font-mono text-2xl font-bold">
                                        <PixelatedImage src="/game/ruby.png" width="24px" height="24px" />
                                        <span>{{ buyAmount * 10 }}</span>
                                    </div>
                                </div>

                                <span class="text-2xl text-slate-600">→</span>

                                <div class="flex-1 flex flex-col items-center relative">
                                    <span class="text-xs uppercase font-bold text-slate-500 mb-2">You Get</span>
                                    <div class="flex items-center bg-white/5 rounded-lg px-2 py-1 max-w-[120px]">
                                        <input type="number" v-model="buyAmount" min="1" max="1000"
                                            class="bg-transparent border-none outline-none text-right font-mono text-xl font-bold w-full text-amber-400" />
                                        <PixelatedImage src="/game/roulette_coin.png" width="24px" height="24px"
                                            class="ml-2" />
                                    </div>
                                </div>
                            </div>

                            <button @click="buyCoins" :disabled="shopLoading"
                                class="px-10 py-3 rounded-full font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] disabled:opacity-50">
                                <span v-if="shopLoading" class="loading loading-spinner loading-sm"></span>
                                <span v-else>Complete Exchange</span>
                            </button>
                        </div>
                    </div>
                </transition>

            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-panel {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 2rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

.animate-zoom-in {
    animation: zoomIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Chrome, Safari, Edge, Opera hide spin arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox hide spin arrows */
input[type=number] {
    -moz-appearance: textfield;
}
</style>
