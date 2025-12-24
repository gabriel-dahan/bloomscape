<script setup lang="ts">
import { ref, computed } from 'vue'
import { FlowerRarity } from '@/shared/types'

// --- NAVIGATION STATE ---
type WikiCategory = 'OVERVIEW' | 'TOOLS' | 'ECONOMY' | 'MECHANICS'
const activeCategory = ref<WikiCategory>('OVERVIEW')
const searchQuery = ref('')

// --- MOCK DATA ---

const itemDatabase = [
    { name: 'Rusty Can', type: 'Tool', desc: 'Basic watering can. Holds 10L.', cost: 'Free' },
    { name: 'Cloud Sprinkler', type: 'Tool', desc: 'Automatically waters a 3x3 area.', cost: '5,000 Sap' },
    { name: 'Nutrient Mix', type: 'Consumable', desc: 'Instantly restores soil quality by 20%.', cost: '200 Sap' },
    { name: 'Genetic Analyzer', type: 'Tool', desc: 'Reveals hidden genes of a seed before planting.', cost: '1,500 Sap' },
]

const mechanics = [
    {
        title: 'Soil Quality',
        content: 'Soil quality starts at 100% and degrades by 10% after every harvest. Low quality soil increases the chance of "Withered" flowers. Use Fertilizer to restore it.'
    },
    {
        title: 'Cross-Breeding',
        content: 'Planting two different species next to each other gives a 15% chance to spawn a hybrid seed in an adjacent empty tile. Hybrids often possess higher rarity traits.'
    },
    {
        title: 'Market Fluctuations',
        content: 'Prices update every 4 hours based on global player sales. If everyone sells Moon Roses, their value drops. Scarcity drives profit.'
    }
]

// --- HELPERS ---

const getRarityColor = (rarity: string) => {
    switch (rarity) {
        case 'COMMON': return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
        case 'UNCOMMON': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
        case 'RARE': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        case 'EPIC': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        case 'LEGENDARY': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        default: return 'text-slate-400';
    }
}

</script>

<template>
    <div class="w-screen min-h-screen bg-slate-950 text-slate-200 flex flex-col lg:flex-row">

        <aside
            class="w-full lg:w-64 bg-slate-900 border-r border-slate-800 flex-shrink-0 lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 overflow-y-auto">
            <div class="p-6">
                <h2 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Wiki Navigation</h2>
                <nav class="space-y-1">
                    <button @click="activeCategory = 'OVERVIEW'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'OVERVIEW' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Overview
                    </button>
                    <button @click="activeCategory = 'TOOLS'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'TOOLS' ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Items & Tools
                    </button>
                    <button @click="activeCategory = 'MECHANICS'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'MECHANICS' ? 'bg-purple-500/10 text-purple-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Game Mechanics
                    </button>
                    <button @click="activeCategory = 'ECONOMY'"
                        class="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        :class="activeCategory === 'ECONOMY' ? 'bg-amber-500/10 text-amber-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'">
                        Economy Guide
                    </button>
                </nav>
            </div>

            <div class="px-6 pb-6 mt-auto">
                <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div class="text-xs font-bold text-emerald-400 mb-1">💡 Pro Tip</div>
                    <p class="text-xs text-slate-400">
                        Watering flowers at night reduces evaporation by 30%.
                    </p>
                </div>
            </div>
        </aside>

        <main class="flex-1 p-6 lg:p-10 overflow-y-auto">

            <div
                class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-slate-800">
                <div>
                    <h1 class="text-3xl font-bold text-white mb-2">
                        {{ activeCategory === 'OVERVIEW' ? 'Welcome to BloomScape' :
                            activeCategory === 'TOOLS' ? 'Equipment & Items' :
                                activeCategory === 'MECHANICS' ? 'Advanced Mechanics' : 'Economic Theory' }}
                    </h1>
                    <p class="text-slate-400">The official guide to cultivating your digital paradise.</p>
                </div>
            </div>

            <div v-if="activeCategory === 'OVERVIEW'" class="space-y-8 animate-fade-in">
                <div class="prose prose-invert max-w-none">
                    <p class="text-lg leading-relaxed text-slate-300">
                        BloomScape is a <strong>real-time gardening simulation</strong> connected to a live player
                        economy.
                        Your goal is to transform a barren island into a thriving nursery, discover rare genetic
                        variants,
                        and amass a fortune in <span class="text-emerald-400 font-mono">Sap</span>.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer"
                        @click="activeCategory = 'TOOLS'">
                        <div class="text-4xl mb-4">💧</div>
                        <h3 class="font-bold text-white mb-2">Mastering Tools</h3>
                        <p class="text-sm text-slate-400">From rusty cans to automated irrigation systems.</p>
                    </div>
                    <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-colors cursor-pointer"
                        @click="activeCategory = 'ECONOMY'">
                        <div class="text-4xl mb-4">🪙</div>
                        <h3 class="font-bold text-white mb-2">Making Profit</h3>
                        <p class="text-sm text-slate-400">Understanding supply, demand, and market crashes.</p>
                    </div>
                </div>
            </div>

            <div v-if="activeCategory === 'TOOLS'" class="animate-fade-in">
                <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-slate-950 text-xs uppercase text-slate-500">
                            <tr>
                                <th class="px-6 py-4 font-bold">Item Name</th>
                                <th class="px-6 py-4 font-bold">Type</th>
                                <th class="px-6 py-4 font-bold">Description</th>
                                <th class="px-6 py-4 font-bold text-right">Cost</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800">
                            <tr v-for="item in itemDatabase" :key="item.name"
                                class="hover:bg-slate-800/50 transition-colors">
                                <td class="px-6 py-4 font-bold text-white">{{ item.name }}</td>
                                <td class="px-6 py-4">
                                    <span
                                        class="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                                        {{ item.type }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-400">{{ item.desc }}</td>
                                <td class="px-6 py-4 text-right font-mono text-emerald-400">{{ item.cost }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div v-if="activeCategory === 'MECHANICS'" class="animate-fade-in space-y-6">
                <div v-for="(mech, i) in mechanics" :key="i"
                    class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h3 class="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                        <span
                            class="text-sm bg-purple-500/10 px-2 py-1 rounded text-purple-400 border border-purple-500/20">0{{
                                i + 1 }}</span>
                        {{ mech.title }}
                    </h3>
                    <p class="text-slate-300 leading-relaxed">{{ mech.content }}</p>
                </div>
            </div>

            <div v-if="activeCategory === 'ECONOMY'" class="animate-fade-in">
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                    <div class="text-6xl mb-6">📉 📈</div>
                    <h2 class="text-2xl font-bold text-white mb-4">The Closed Economy</h2>
                    <div class="prose prose-invert max-w-2xl mx-auto text-left">
                        <p>
                            BloomScape operates on a <strong>closed economy model</strong>. This means the game server
                            does not buy flowers infinitely.
                            If you sell a flower, another player (or a limited NPC collector) must buy it.
                        </p>
                        <ul class="list-disc pl-5 space-y-2 mt-4 text-slate-400">
                            <li><strong>Sap</strong> is generated by completing daily quests and selling to NPCs.</li>
                            <li><strong>Inflation</strong> is controlled by land taxes and tool degradation.</li>
                            <li><strong>Prices</strong> are determined by the average of the last 24h of
                                player-to-player trades.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
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

/* Custom Scrollbar for Sidebar */
aside::-webkit-scrollbar {
    width: 6px;
}

aside::-webkit-scrollbar-track {
    background: transparent;
}

aside::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 20px;
}
</style>