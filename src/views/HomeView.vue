<script setup lang="ts">
import HomeMarketTicker from '@/components/HomeMarketTicker.vue';


// Logic for styling the Rarity cards specific to this page
const getRarityGlowStyle = (rarity: string) => {
    const colors: Record<string, string> = {
        'COMMON': '#94a3b8',
        'UNCOMMON': '#34d399',
        'RARE': '#60a5fa',
        'EPIC': '#c084fc',
        'LEGENDARY': '#fbbf24'
    };
    const color = colors[rarity] || colors['COMMON'];
    return {
        boxShadow: `0 0 30px ${color}20`,
        borderColor: `${color}60`,
        color: color
    };
};
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden selection:bg-emerald-500/30">

        <header class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div class="absolute top-20 right-10 w-96 h-96 bg-emerald-500/30 rounded-full blur-[100px]"></div>
                <div class="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div class="space-y-8">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/50 text-xs font-medium text-emerald-400 shadow-sm">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Closed Economy Alpha Live
                    </div>

                    <h1 class="text-5xl lg:text-7xl font-bold leading-tight text-white">
                        Cultivate your <br>
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital
                            Paradise</span>
                    </h1>

                    <p class="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Plant seeds, nurture rare flowers, and trade them in a fully player-driven economy.
                        Design your island and discover the secrets of botany in BloomScape.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <button
                            class="btn btn-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 border-none font-bold px-8 shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 hover:-translate-y-1">
                            Start Your Garden
                        </button>
                        <button
                            class="btn btn-lg btn-outline border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
                            Explore Market
                        </button>
                    </div>

                    <div class="pt-8 flex items-center gap-8 border-t border-slate-800/60">
                        <div>
                            <div class="text-2xl font-bold text-white">12k+</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Active Plots</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">850k</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Sap Traded</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">142</div>
                            <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">Species</div>
                        </div>
                    </div>
                </div>

                <div class="relative group perspective-1000 hidden lg:block">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div
                        class="relative bg-slate-900 border border-slate-700/80 rounded-2xl p-3 shadow-2xl transform rotate-y-12 rotate-x-6 transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-3">
                        <div class="aspect-[4/3] bg-slate-950 rounded-xl overflow-hidden relative shadow-inner">
                            <div class="absolute inset-0"
                                style="background-image: linear-gradient(rgba(51, 65, 85, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.3) 1px, transparent 1px); background-size: 40px 40px; transform: scale(1.5) rotateX(45deg) rotateZ(45deg); opacity: 0.5;">
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="relative">
                                    <div class="text-8xl filter drop-shadow-lg animate-float">🌻</div>
                                    <div
                                        class="absolute -top-4 -right-8 bg-slate-900/90 backdrop-blur border border-emerald-500/30 text-emerald-400 text-xs px-2 py-1 rounded shadow-lg">
                                        Ready!
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4 right-4 flex justify-between">
                                <div class="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-emerald-500 w-2/3"></div>
                                </div>
                                <div
                                    class="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-mono rounded border border-amber-500/20">
                                    5,420 Sap
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <HomeMarketTicker />

        <section class="py-24 bg-slate-950 relative">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Grow, Gather, Gain</h2>
                    <p class="text-slate-400 max-w-2xl mx-auto">
                        BloomScape isn't just about clicking flowers. It's a complex ecosystem where soil quality, water
                        levels, and real-time market trends determine your success.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div
                        class="group p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            💧
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                            Dynamic Gardening</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Every tile matters. Manage water levels and soil quality to boost the purity of your
                            flowers. Higher quality means higher selling prices.
                        </p>
                    </div>

                    <div
                        class="group p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            📈
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Live
                            Economy</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            The market never sleeps. Prices fluctuate based on player supply and demand. Buy low, sell
                            high, and try to corner the market.
                        </p>
                    </div>

                    <div
                        class="group p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20">
                        <div
                            class="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                            🧬
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                            Genetics System</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            From Common daisies to Legendary void-flowers. Cross-breed species to discover secret
                            combinations and unlock value.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-32 relative overflow-hidden bg-slate-900/30 border-y border-slate-800/50">
            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div class="md:w-1/2">
                        <h2 class="text-4xl font-bold text-white mb-6 leading-tight">
                            Collect the <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Unattainable</span>
                        </h2>
                        <p class="text-slate-400 mb-8 text-lg leading-relaxed">
                            Some flowers are wild, others must be engineered. Will you be the first botanist to
                            stabilize the genome of the Legendary <span class="text-amber-400 font-bold">Solar
                                Lotus</span>?
                        </p>
                        <div class="space-y-4">
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg font-bold">
                                    1</div>
                                <h4 class="text-white font-bold text-sm">Harvest Seeds</h4>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg font-bold">
                                    2</div>
                                <h4 class="text-white font-bold text-sm">Cross-Breed</h4>
                            </div>
                            <div
                                class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <div
                                    class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg font-bold">
                                    3</div>
                                <h4 class="text-white font-bold text-sm">Profit</h4>
                            </div>
                        </div>
                    </div>

                    <div class="md:w-1/2 relative h-96 w-full flex items-center justify-center perspective-1000">
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 bg-slate-800 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 hover:translate-y-[-120px] hover:rotate-0 hover:z-30 cursor-pointer shadow-xl"
                            style="transform: translate(-60px, 10px) rotate(-12deg);"
                            :style="getRarityGlowStyle('EPIC')">
                            <div class="text-6xl mb-4 opacity-90">🌸</div>
                            <div class="font-bold text-purple-400">Lunar Orchid</div>
                            <div class="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">EPIC</div>
                        </div>

                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-80 bg-slate-900 rounded-2xl border flex flex-col items-center justify-center shadow-2xl z-20 hover:scale-105 transition-all duration-300"
                            :style="getRarityGlowStyle('LEGENDARY')">
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent rounded-2xl pointer-events-none">
                            </div>
                            <div class="text-7xl mb-6 drop-shadow-2xl filter brightness-110 animate-float">⚜️</div>
                            <div class="font-bold text-amber-400 text-2xl font-serif">Golden Rose</div>
                            <div
                                class="mt-4 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] text-amber-300 font-bold tracking-[0.2em]">
                                LEGENDARY</div>
                        </div>

                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-72 bg-slate-800 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 hover:translate-y-[-120px] hover:rotate-0 hover:z-30 cursor-pointer shadow-xl"
                            style="transform: translate(60px, 10px) rotate(12deg);" :style="getRarityGlowStyle('RARE')">
                            <div class="text-6xl mb-4 opacity-90">🌺</div>
                            <div class="font-bold text-blue-400">Frost Hibiscus</div>
                            <div class="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">RARE</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
/* Page-specific animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 4s ease-in-out infinite;
}

.perspective-1000 {
    perspective: 1000px;
}

.rotate-y-12 {
    transform: rotateY(-12deg) rotateX(5deg);
}
</style>