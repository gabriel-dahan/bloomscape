<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
    content: string;
}>();

const renderedContent = computed(() => {
    if (!props.content) return '';
    return marked(props.content);
});
</script>

<template>
    <div class="prose prose-invert prose-emerald max-w-none text-slate-300" v-html="renderedContent"></div>
</template>

<style scoped>
/* Custom prose overrides if needed */
:deep(a) {
    color: #34d399;
    text-decoration: underline;
}

:deep(h1),
:deep(h2),
:deep(h3) {
    color: #e2e8f0;
    font-weight: 700;
}

:deep(p) {
    margin-bottom: 0.75em;
}

:deep(ul),
:deep(ol) {
    margin-left: 1.5em;
    list-style-type: disc;
}
</style>
