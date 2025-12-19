<template>
    <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="i in 4" :key="i" class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div class="text-slate-500 text-xs uppercase font-bold mb-2">Total Active Users</div>
                <div class="text-3xl font-mono text-white">12,402</div>
                <div class="text-emerald-400 text-xs mt-1">↑ 12% from last week</div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6 h-96">
            <div
                class="bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-600">
                [ CHART: Economy Volume (Sap) ]
            </div>
            <div
                class="bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-600">
                [ CHART: New Registrations ]
            </div>
        </div>
    </div>
</template>