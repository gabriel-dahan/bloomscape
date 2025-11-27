<script setup lang="ts">
import { PropType, Ref } from 'vue'

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
                class="flex flex-col gap-5 fieldset bg-base-100 rounded-box w-xs phone:w-sm sm:w-md p-6 mt-5 mb-5 text-sm"
                :class="{
                    'border border-base-300': fieldSetBorder,
                }">
                <legend class="fieldset-legend">{{ title }}</legend>

                <h2 v-if="$slots.default" class="color-neutral-content">
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
