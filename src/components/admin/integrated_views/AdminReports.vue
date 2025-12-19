<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { remult } from 'remult'
import { UserReport } from '@/shared/analytics/UserReport'
import { ReportStatus, ReportType } from '@/shared'

const repo = remult.repo(UserReport)

const reports = ref<UserReport[]>([])
const loading = ref(false)
const filterStatus = ref<string>('ALL') // 'ALL', 'OPEN', 'RESOLVED'

// Modal state for viewing full details
const selectedReport = ref<UserReport | null>(null)

// --- ACTIONS ---

async function fetchReports() {
    loading.value = true
    try {
        const where: any = {}

        if (filterStatus.value === 'OPEN') {
            where.status = { $in: [ReportStatus.OPEN, ReportStatus.IN_PROGRESS] }
        } else if (filterStatus.value === 'RESOLVED') {
            where.status = { $in: [ReportStatus.RESOLVED, ReportStatus.REJECTED] }
        }

        reports.value = await repo.find({
            where,
            include: { reporter: true },
            orderBy: { createdAt: 'desc' },
            limit: 100
        })
    } catch (e) {
        console.error(e)
    } finally {
        loading.value = false
    }
}

async function updateStatus(report: UserReport, status: string) {
    try {
        await repo.save({ ...report, status: status as any, resolvedAt: new Date() })
        await fetchReports()
        if (selectedReport.value?.id === report.id) selectedReport.value = null // Close modal if open
    } catch (e: any) {
        alert(e.message)
    }
}

// --- HELPERS ---

const getTypeColor = (type: string) => {
    switch (type) {
        case ReportType.BUG: return 'text-red-400 bg-red-500/10 border-red-500/20'
        case ReportType.FEATURE: return 'text-purple-400 bg-purple-500/10 border-purple-500/20'
        case ReportType.PLAYER_REPORT: return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
        default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20'
    }
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case ReportStatus.OPEN: return 'badge-info'
        case ReportStatus.IN_PROGRESS: return 'badge-warning'
        case ReportStatus.RESOLVED: return 'badge-success'
        case ReportStatus.REJECTED: return 'badge-error'
        default: return 'badge-ghost'
    }
}

onMounted(fetchReports)
</script>

<template>
    <div class="h-[calc(100vh-8rem)] flex flex-col">

        <div class="flex justify-between items-center mb-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div class="flex gap-2">
                <button @click="filterStatus = 'ALL'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'ALL' ? 'btn-primary' : 'btn-ghost'">
                    All
                </button>
                <button @click="filterStatus = 'OPEN'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'OPEN' ? 'btn-primary' : 'btn-ghost'">
                    Open / In Progress
                </button>
                <button @click="filterStatus = 'RESOLVED'; fetchReports()" class="btn btn-sm"
                    :class="filterStatus === 'RESOLVED' ? 'btn-primary' : 'btn-ghost'">
                    Archives
                </button>
            </div>
            <button @click="fetchReports" class="btn btn-sm btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 4.992l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
        </div>

        <div class="flex-1 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative flex flex-col">

            <div v-if="loading"
                class="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-20 backdrop-blur-sm">
                <span class="loading loading-spinner text-emerald-500 loading-lg"></span>
            </div>

            <div class="overflow-y-auto custom-scrollbar flex-1">
                <table class="table table-sm w-full">
                    <thead class="bg-slate-950 text-slate-400 sticky top-0 z-10">
                        <tr>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Subject</th>
                            <th>Reporter</th>
                            <th>Date</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="report in reports" :key="report.id"
                            class="hover:bg-slate-800/50 border-slate-800 group">

                            <td>
                                <span class="px-2 py-1 rounded text-[10px] font-bold border uppercase tracking-wider"
                                    :class="getTypeColor(report.type)">
                                    {{ report.type }}
                                </span>
                            </td>

                            <td>
                                <div class="badge badge-xs gap-1" :class="getStatusBadge(report.status)">
                                    {{ report.status }}
                                </div>
                            </td>

                            <td class="max-w-xs">
                                <div class="font-bold text-slate-200 truncate">{{ report.title }}</div>
                                <div class="text-xs text-slate-500 truncate">{{ report.description }}</div>
                            </td>

                            <td>
                                <div class="flex items-center gap-2">
                                    <div class="avatar placeholder">
                                        <div class="bg-slate-800 text-slate-400 rounded-full w-6">
                                            <span class="text-xs">{{ report.reporter?.tag.slice(0, 2).toUpperCase()
                                            }}</span>
                                        </div>
                                    </div>
                                    <span class="text-xs font-mono text-slate-400">{{ report.reporter?.tag || 'Unknown'
                                    }}</span>
                                </div>
                            </td>

                            <td class="text-xs font-mono text-slate-500">
                                {{ new Date(report.createdAt!).toLocaleDateString() }}
                            </td>

                            <td class="text-right">
                                <button @click="selectedReport = report" class="btn btn-xs btn-ghost text-emerald-400">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="reports.length === 0 && !loading" class="p-10 text-center text-slate-500">
                    No reports found for this filter.
                </div>
            </div>
        </div>

        <div v-if="selectedReport"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            @click.self="selectedReport = null">
            <div
                class="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">

                <div class="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-start">
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="px-2 py-1 rounded text-[10px] font-bold border uppercase"
                                :class="getTypeColor(selectedReport.type)">
                                {{ selectedReport.type }}
                            </span>
                            <span class="text-xs text-slate-500 font-mono">{{ selectedReport.id }}</span>
                        </div>
                        <h2 class="text-xl font-bold text-white">{{ selectedReport.title }}</h2>
                    </div>
                    <button @click="selectedReport = null" class="btn btn-sm btn-circle btn-ghost">✕</button>
                </div>

                <div class="p-6 overflow-y-auto flex-1 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {{ selectedReport.description }}
                </div>

                <div class="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
                    <div class="text-xs text-slate-500">
                        Reported by <span class="text-white">{{ selectedReport.reporter?.tag }}</span> on {{ new
                            Date(selectedReport.createdAt!).toLocaleString() }}
                    </div>

                    <div class="flex gap-2"
                        v-if="selectedReport.status === ReportStatus.OPEN || selectedReport.status === ReportStatus.IN_PROGRESS">
                        <button @click="updateStatus(selectedReport, ReportStatus.IN_PROGRESS)"
                            class="btn btn-sm btn-warning btn-outline">
                            Mark In Progress
                        </button>
                        <button @click="updateStatus(selectedReport, ReportStatus.REJECTED)"
                            class="btn btn-sm btn-error btn-outline">
                            Reject
                        </button>
                        <button @click="updateStatus(selectedReport, ReportStatus.RESOLVED)"
                            class="btn btn-sm btn-success">
                            Resolve
                        </button>
                    </div>
                    <div v-else class="badge badge-lg badge-outline">
                        {{ selectedReport.status }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>