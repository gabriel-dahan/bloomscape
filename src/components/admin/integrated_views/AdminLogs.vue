<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { remult } from 'remult'
import { SystemLog, LogLevel, LogSource } from '@/shared/analytics/SystemLog'
import { AdminController } from '@/server/controllers/AdminController'

const logs = ref<SystemLog[]>([])
const loading = ref(false)
const downloading = ref(false)

const filters = ref({
    level: 'ALL',
    source: 'ALL',
    userId: '',
    startDate: new Date(Date.now() - 24 * 60 * 60 * 1000 * 7).toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10)
})

const fetchLogs = async () => {
    loading.value = true
    try {
        const repo = remult.repo(SystemLog)
        const where: any = {}

        if (filters.value.level !== 'ALL') where.level = filters.value.level
        if (filters.value.source !== 'ALL') where.source = filters.value.source
        if (filters.value.userId) where.userId = { $contains: filters.value.userId }
        
        // Dates
        let start = new Date(filters.value.startDate)
        let end = new Date(filters.value.endDate)
        end.setHours(23, 59, 59, 999)

        where.createdAt = { $gte: start, $lte: end }

        logs.value = await repo.find({
            where,
            orderBy: { createdAt: 'desc' },
            limit: 100
        })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

const exportCSV = async () => {
    downloading.value = true
    try {
        let start = new Date(filters.value.startDate)
        let end = new Date(filters.value.endDate)
        end.setHours(23, 59, 59, 999)

        const csvData = await AdminController.exportLogs(
            start, end, 
            [filters.value.level], 
            [filters.value.source], 
            filters.value.userId
        )

        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement("a")
        const url = URL.createObjectURL(blob)
        link.setAttribute("href", url)
        link.setAttribute("download", `bloomscape_logs_${Date.now()}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    } catch (e) {
        console.error("Export failed", e)
    } finally {
        downloading.value = false
    }
}

watch(filters, fetchLogs, { deep: true })
onMounted(fetchLogs)
</script>

<template>
    <div class="space-y-4">
        <!-- Controls -->
        <div class="flex flex-wrap gap-4 items-end bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md">
            <div class="form-control w-full max-w-[150px]">
                <label class="label py-1"><span class="label-text text-slate-300">Level</span></label>
                <select class="select select-bordered select-sm bg-slate-900 border-slate-700" v-model="filters.level">
                    <option value="ALL">All Levels</option>
                    <option v-for="level in Object.values(LogLevel)" :key="level" :value="level">{{ level }}</option>
                </select>
            </div>
            
            <div class="form-control w-full max-w-[150px]">
                <label class="label py-1"><span class="label-text text-slate-300">Source</span></label>
                <select class="select select-bordered select-sm bg-slate-900 border-slate-700" v-model="filters.source">
                    <option value="ALL">All Sources</option>
                    <option v-for="source in Object.values(LogSource)" :key="source" :value="source">{{ source }}</option>
                </select>
            </div>

            <div class="form-control w-full max-w-[150px]">
                <label class="label py-1"><span class="label-text text-slate-300">Start Date</span></label>
                <input type="date" class="input input-bordered input-sm bg-slate-900 border-slate-700 text-slate-300" v-model="filters.startDate" />
            </div>

            <div class="form-control w-full max-w-[150px]">
                <label class="label py-1"><span class="label-text text-slate-300">End Date</span></label>
                <input type="date" class="input input-bordered input-sm bg-slate-900 border-slate-700 text-slate-300" v-model="filters.endDate" />
            </div>

            <div class="form-control w-full max-w-[200px]">
                <label class="label py-1"><span class="label-text text-slate-300">User ID</span></label>
                <input type="text" placeholder="Filter by User ID" class="input input-bordered input-sm bg-slate-900 border-slate-700" v-model="filters.userId" />
            </div>

            <div class="flex-grow"></div>

            <button class="btn btn-primary btn-sm mb-[2px]" @click="exportCSV" :disabled="downloading">
                <span v-if="downloading" class="loading loading-spinner loading-xs"></span>
                Export CSV
            </button>
        </div>

        <!-- Data -->
        <div class="overflow-x-auto bg-slate-800 border border-slate-700 shadow-md rounded-xl">
            <table class="table table-zebra table-sm">
                <thead class="bg-slate-900 text-slate-300 border-b border-slate-700">
                    <tr>
                        <th>Date</th>
                        <th>Level</th>
                        <th>Source</th>
                        <th>Message</th>
                        <th>User ID</th>
                        <th>Target ID</th>
                    </tr>
                </thead>
                <tbody v-if="!loading && logs.length > 0">
                    <tr v-for="log in logs" :key="log.id" class="border-slate-700">
                        <td class="whitespace-nowrap">{{ new Date(log.createdAt || '').toLocaleString() }}</td>
                        <td>
                            <div class="badge badge-sm font-bold shadow-sm" :class="{
                                'badge-info': log.level === LogLevel.INFO,
                                'badge-warning': log.level === LogLevel.WARN,
                                'badge-error': log.level === LogLevel.ERROR,
                                'badge-success': log.level === LogLevel.SUCCESS
                            }">{{ log.level }}</div>
                        </td>
                        <td>
                            <div class="badge badge-outline badge-sm border-slate-500 text-slate-300">{{ log.source }}</div>
                        </td>
                        <td class="w-full text-slate-300">{{ log.message }}</td>
                        <td class="font-mono text-[10px] text-slate-400 max-w-[100px] truncate" :title="log.userId || ''">{{ log.userId || '-' }}</td>
                        <td class="font-mono text-[10px] text-slate-400 max-w-[100px] truncate" :title="log.targetId || ''">{{ log.targetId || '-' }}</td>
                    </tr>
                </tbody>
                <tbody v-else-if="loading">
                    <tr>
                        <td colspan="6" class="text-center py-12">
                            <span class="loading loading-spinner loading-md text-primary"></span>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="6" class="text-center py-12 text-slate-500 font-medium tracking-wide">
                            No logs found matching these criteria.
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="logs.length === 100" class="p-3 text-center text-xs text-slate-400 bg-slate-900 border-t border-slate-700">
                Displaying the top 100 most recent results. Export to CSV to retrieve the complete dataset.
            </div>
        </div>
    </div>
</template>