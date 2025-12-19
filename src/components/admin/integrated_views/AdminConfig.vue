<template>
    <div class="space-y-6 max-w-2xl">
        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 class="font-bold text-white mb-6">Economy Parameters</h3>

            <div class="form-control w-full mb-4">
                <label class="label"><span class="label-text">Global Growth Speed Multiplier</span></label>
                <input type="number" value="1.0" class="input input-bordered bg-slate-950" />
            </div>

            <div class="form-control w-full mb-4">
                <label class="label"><span class="label-text">Market Tax Rate (%)</span></label>
                <input type="number" value="5" class="input input-bordered bg-slate-950" />
            </div>

            <button class="btn btn-primary bg-emerald-600 mt-4">Save Configuration</button>
        </div>
    </div>
</template>