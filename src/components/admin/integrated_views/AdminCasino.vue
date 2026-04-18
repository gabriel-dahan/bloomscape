<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { remult } from 'remult'
import { RoulettePrize } from '@/shared/economy/RoulettePrize'

const prizes = ref<RoulettePrize[]>([])
const loading = ref(true)
const saving = ref(false)

const prizeRepo = remult.repo(RoulettePrize)

const loadPrizes = async () => {
    loading.value = true
    try {
        prizes.value = await prizeRepo.find({ orderBy: { probability: 'asc' } })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

const totalProbability = computed(() => {
    const sum = prizes.value.reduce((acc, p) => acc + (p.probability || 0), 0)
    return Math.round(sum * 1000) / 1000 // Fix floating point precision
})

const isTotalValid = computed(() => Math.abs(totalProbability.value - 1) < 0.001)

onMounted(loadPrizes)

const addNewPrize = () => {
    prizes.value.push({
        id: `prize_${Date.now()}`,
        type: 'SAP',
        value: 'sap',
        amount: 100,
        probability: 0,
        dailyLimit: -1
    } as RoulettePrize)
}

const savePrize = async (p: RoulettePrize) => {
    saving.value = true
    try {
        await prizeRepo.save(p)
    } catch (e: any) {
        alert("Error saving prize: " + e.message)
    } finally {
        saving.value = false
    }
}

const saveAll = async () => {
    if (!isTotalValid.value) {
        alert(`Total probability must be exactly 100% (currently ${Number((totalProbability.value * 100).toFixed(4))}%)`)
        return
    }
    saving.value = true
    try {
        for (const p of prizes.value) {
            await prizeRepo.save(p)
        }
        await loadPrizes()
        alert("All prizes saved successfully!")
    } catch (e: any) {
        alert("Error saving all prizes: " + e.message)
    } finally {
        saving.value = false
    }
}

const deletePrize = async (p: RoulettePrize) => {
    if (!confirm('Are you sure you want to delete this prize?')) return
    saving.value = true
    try {
        if (p.id) {
            await prizeRepo.delete(p.id)
        }
        prizes.value = prizes.value.filter(prize => prize.id !== p.id)
    } catch (e: any) {
        alert("Error deleting prize: " + e.message)
    } finally {
        saving.value = false
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-center bg-slate-900 border border-emerald-900/50 p-6 rounded-2xl shadow-xl gap-4">
            <div>
                <h3 class="text-xl font-bold text-emerald-400 mb-1">Casino Prizes Setup</h3>
                <p class="text-sm text-slate-400">Configure the rewards and weights for the flower prizes wheel.</p>
            </div>
            
            <div class="flex flex-wrap items-center gap-4">
                <div class="flex items-center gap-2 px-4 py-2 bg-slate-950 rounded-xl border" 
                     :class="isTotalValid ? 'border-emerald-500/50 text-emerald-400' : 'border-rose-500/50 text-rose-400'">
                    <span class="text-xs font-bold uppercase tracking-widest opacity-60">Total Probability:</span>
                    <span class="font-mono font-black text-lg">{{ Number((totalProbability * 100).toFixed(4)) }}%</span>
                    <svg v-if="isTotalValid" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex gap-2">
                    <button @click="addNewPrize" class="btn btn-sm cursor-pointer bg-slate-800 hover:bg-slate-700 border-none text-white px-4">
                        Add New
                    </button>
                    <button @click="saveAll" :disabled="saving || !isTotalValid" 
                            class="btn btn-sm cursor-pointer bg-emerald-600 hover:bg-emerald-500 border-none text-white px-6 shadow-lg shadow-emerald-900/20 disabled:grayscale">
                        {{ saving ? 'Saving...' : 'Save All Changes' }}
                    </button>
                </div>
            </div>
        </div>

        <div v-if="loading" class="flex justify-center p-12">
            <span class="loading loading-spinner loading-lg text-emerald-500"></span>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="p in prizes" :key="p.id" class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                <div class="flex items-center gap-2 mb-4">
                    <select v-model="p.type" class="select select-sm select-bordered w-full max-w-xs bg-slate-900 border-slate-600">
                        <option value="SAP">Sap</option>
                        <option value="RUBY">Ruby</option>
                        <option value="TOKEN">Token</option>
                        <option value="FLOWER">Flower (Jackpot)</option>
                    </select>
                </div>
                
                <div class="space-y-3">
                    <div class="form-control">
                        <label class="label"><span class="label-text text-slate-400 text-xs">Value (Slug for Flower, 'sap', etc.)</span></label>
                        <input type="text" v-model="p.value" class="input input-sm input-bordered bg-slate-900 border-slate-600" />
                    </div>
                    
                    <div class="flex gap-3">
                        <div class="form-control w-1/2">
                            <label class="label"><span class="label-text text-slate-400 text-xs text-nowrap">Amount</span></label>
                            <input type="number" v-model.number="p.amount" class="input input-sm input-bordered bg-slate-900 border-slate-600 w-full" />
                        </div>
                        <div class="form-control w-1/2">
                            <label class="label"><span class="label-text text-slate-400 text-xs text-nowrap">Probability (0-1)</span></label>
                            <input type="number" step="0.001" v-model.number="p.probability" class="input input-sm input-bordered bg-slate-900 border-slate-600 w-full" />
                        </div>
                    </div>

                    <div class="form-control">
                        <label class="label"><span class="label-text text-slate-400 text-xs">Daily Limit (-1 = ∞)</span></label>
                        <input type="number" v-model.number="p.dailyLimit" class="input input-sm input-bordered bg-slate-900 border-slate-600" />
                    </div>
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button @click="deletePrize(p)" :disabled="saving" class="btn btn-sm cursor-pointer btn-ghost text-red-400 hover:bg-red-950/30">Delete</button>
                    <button @click="savePrize(p)" :disabled="saving" class="btn btn-sm cursor-pointer bg-slate-700 hover:bg-slate-600 border-none text-white">
                        {{ saving ? 'Saving...' : 'Save' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
