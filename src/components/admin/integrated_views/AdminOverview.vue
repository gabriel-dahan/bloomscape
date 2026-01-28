<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'
import { AdminController, DashboardData } from '@/server/controllers/AdminController'

const loading = ref(true)
const data = ref<DashboardData | null>(null)

const economyChartEl = ref<HTMLCanvasElement | null>(null)
const regChartEl = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
    try {
        data.value = await AdminController.getDashboardData()
        renderCharts()
    } catch (e) {
        console.error("Failed to load admin stats", e)
    } finally {
        loading.value = false
    }
})

function renderCharts() {
    if (!data.value) return

    if (economyChartEl.value) {
        new Chart(economyChartEl.value, {
            type: 'line',
            data: {
                labels: data.value.charts.economy.map(d => d.date),
                datasets: [{
                    label: 'Sap Volume',
                    data: data.value.charts.economy.map(d => d.value),
                    borderColor: '#10b981', // emerald-500
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        })
    }

    if (regChartEl.value) {
        new Chart(regChartEl.value, {
            type: 'bar',
            data: {
                labels: data.value.charts.registrations.map(d => d.date),
                datasets: [{
                    label: 'New Users',
                    data: data.value.charts.registrations.map(d => d.value),
                    backgroundColor: '#3b82f6', // blue-500
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        })
    }
}
</script>

<template>
    <div v-if="loading" class="text-white">Loading stats...</div>

    <div v-else-if="data" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">Active Users (24h)</div>
                <div class="text-3xl font-mono text-white">{{ data.stats.activeUsers }}</div>
                <div class="text-slate-600 text-xs mt-1">Total: {{ data.stats.totalUsers }}</div>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">Market Volume (24h)</div>
                <div class="text-3xl font-mono text-white">{{ data.stats.marketVolume24h }} <span
                        class="text-emerald-500 text-sm">SAP</span></div>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">Sap in Circulation</div>
                <div class="text-3xl font-mono text-white">{{ data.stats.totalSap.toLocaleString() }}</div>
            </div>
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">System Status</div>
                <div class="text-3xl font-mono text-emerald-400">ONLINE</div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-96">
            <div class="bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col">
                <h3 class="text-slate-400 text-sm font-bold mb-4">Market Volume History</h3>
                <div class="flex-1 relative">
                    <canvas ref="economyChartEl"></canvas>
                </div>
            </div>

            <div class="bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col">
                <h3 class="text-slate-400 text-sm font-bold mb-4">New User Registrations</h3>
                <div class="flex-1 relative">
                    <canvas ref="regChartEl"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>