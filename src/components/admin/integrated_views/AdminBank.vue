<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { remult } from 'remult'
import { GlobalBank, GLOBAL_BANK_ID } from '@/shared'

const bankRepo = remult.repo(GlobalBank)
const bank = ref<GlobalBank | null>(null)
const loading = ref(true)

const modifySap = ref(0)
const modifyRubies = ref(0)
const actionLoading = ref(false)

async function fetchBank() {
    loading.value = true
    try {
        let b = await bankRepo.findFirst()
        if (!b) {
            b = await bankRepo.insert({ id: GLOBAL_BANK_ID, sap: 1000000, rubies: 0 })
        }
        bank.value = b
    } catch (err: any) {
        console.error(err)
    } finally {
        loading.value = false
    }
}

async function updateFunds() {
    if (!bank.value) return
    actionLoading.value = true

    try {
        bank.value.sap += modifySap.value
        bank.value.rubies += modifyRubies.value
        await bankRepo.save(bank.value)

        modifySap.value = 0
        modifyRubies.value = 0
        alert('Global Bank funds updated successfully!')
        await fetchBank()
    } catch (err: any) {
        alert(err.message)
    } finally {
        actionLoading.value = false
    }
}

onMounted(() => {
    fetchBank()
})
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col relative space-y-6">
        <div class="flex justify-between items-center bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
            <div>
                <h1 class="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    <span class="text-yellow-500">🏦</span> Global Bank Reserve
                </h1>
                <p class="text-slate-400 text-sm mt-1">Manage the central system reserves for Sap and Rubies.</p>
            </div>
        </div>

        <div v-if="loading" class="flex justify-center items-center py-20">
            <span class="loading loading-spinner loading-lg text-emerald-500"></span>
        </div>

        <div v-else-if="bank" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Current Reserves -->
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
                <h2 class="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Current Balances</h2>
                
                <div class="space-y-6">
                    <div class="flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-emerald-900/40">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center p-2 border border-emerald-500/20">
                                <img src="/game/sap_drop.png" alt="Sap" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Sap Reserve</p>
                                <p class="text-3xl font-mono text-emerald-400 font-bold mt-1 shadow-emerald-500/20 drop-shadow-lg">{{ bank.sap.toLocaleString() }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-rose-900/40">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center p-2 border border-rose-500/20">
                                <img src="/game/ruby.png" alt="Ruby" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Ruby Reserve</p>
                                <p class="text-3xl font-mono text-rose-400 font-bold mt-1 shadow-rose-500/20 drop-shadow-lg">{{ bank.rubies.toLocaleString() }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Manual Adjustment Tools -->
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg flex flex-col">
                <h2 class="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Inject or Burn Policy</h2>
                <div class="text-xs text-slate-400 mb-6 bg-slate-950 p-3 rounded-lg border border-slate-800">
                    Use negative numbers to burn (remove) currency from the global circulation, and positive numbers to print (inject) artificial currency into the bank.
                </div>

                <div class="space-y-4 flex-1">
                    <div>
                        <label class="label text-sm font-bold text-emerald-500">Inject/Burn Sap Amount</label>
                        <input type="number" v-model.number="modifySap"
                            class="input input-lg w-full bg-slate-950 border-slate-700 focus:border-emerald-500 font-mono text-lg text-emerald-400"
                            placeholder="e.g. 50000 or -1000" />
                    </div>

                    <div>
                        <label class="label text-sm font-bold text-rose-500">Inject/Burn Ruby Amount</label>
                        <input type="number" v-model.number="modifyRubies"
                            class="input input-lg w-full bg-slate-950 border-slate-700 focus:border-rose-500 font-mono text-lg text-rose-400"
                            placeholder="e.g. 1000 or -50" />
                    </div>
                </div>

                <button @click="updateFunds" :disabled="actionLoading || (modifySap === 0 && modifyRubies === 0)"
                    class="btn btn-primary mt-6 w-full text-lg h-14 shadow-lg shadow-primary/20">
                    <span v-if="actionLoading" class="loading loading-spinner"></span>
                    <span v-else>Execute Transaction</span>
                </button>
            </div>
        </div>
    </div>
</template>
