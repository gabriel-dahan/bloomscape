<script setup lang="ts">
const recentLogs = [
    { time: '10:42 AM', type: 'WARN', msg: 'High volatility detected on "Void Tulip" market.' },
    { time: '10:38 AM', type: 'INFO', msg: 'User [Pierre] sold 500 Sap worth of items.' },
    { time: '10:15 AM', type: 'ERROR', msg: 'Failed to sync weather service.' },
]
</script>

<template>
    <div class="space-y-4">
        <div class="mockup-code bg-slate-900 text-slate-300 border border-slate-800">
            <pre v-for="(log, i) in recentLogs" :key="i" data-prefix=">">
        <span :class="log.type === 'ERROR' ? 'text-red-400' : log.type === 'WARN' ? 'text-yellow-400' : 'text-emerald-400'">[{{ log.time }}] {{ log.type }}:</span> {{ log.msg }}
      </pre>
        </div>
    </div>
</template>