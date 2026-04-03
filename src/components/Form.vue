<script setup lang="ts">
import { defineComponent } from 'vue'
import type { PropType, Ref } from 'vue'

const props = defineProps({
    method: {
        type: String,
        default: 'POST',
    },
    title: {
        type: String,
        default: 'Form Title',
    },
    submitButtonText: {
        type: String,
        default: 'Submit',
    },
    submitAction: {
        type: Function as PropType<(payload?: any) => void>,
        default: () => {
            console.warn('No submit action provided')
        },
    },
    fieldSetBorder: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <form :method="method" @submit.prevent="submitAction">
        <div class="flex justify-center">
            <fieldset
                class="flex flex-col gap-5 fieldset bg-white rounded-box w-xs phone:w-sm sm:w-md p-6 mt-5 mb-5 text-sm text-slate-900"
                :class="{
                    'border border-slate-200': fieldSetBorder,
                }">
                <legend class="fieldset-legend text-slate-900">{{ title }}</legend>

                <h2 v-if="$slots.default" class="text-slate-800 font-medium">
                    <slot name="header"></slot>
                </h2>

                <slot name="fields"></slot>

                <div class="flex w-full items-center mt-4">
                    <button class="btn btn-primary rounded-2xl flex-1">{{ submitButtonText }}</button>
                    <slot name="moreBtns"></slot>
                </div>

                <p class="label">
                    <slot name="small"></slot>
                </p>
            </fieldset>
        </div>
    </form>
</template>
