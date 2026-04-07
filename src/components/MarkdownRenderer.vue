<script setup lang="ts">
import { computed } from 'vue';
import { Marked } from 'marked';
import { Role } from '@/shared/types';

const props = defineProps<{
    content: string;
    roles?: Role[] | string;
}>();

// Full renderer for Admins/Developers (still blocks images and raw HTML)
const fullMarked = new Marked({
    renderer: {
        heading({ tokens }) {
            return `<p><strong>${this.parser.parseInline(tokens)}</strong></p>\n`;
        },
        image() { return ''; },
        html() { return ''; }
    }
});

const escapeHtml = (text: string) => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

const sunbeamParse = (text: string) => {
    let html = escapeHtml(text);
    // Restore <u> tags (case insensitive)
    html = html.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/gi, '<u>$1</u>');
    // Simple markdown bold/italic
    html = html.replace(/\*\*\*([\s\S]*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([\s\S]*?)\*/g, '<em>$1</em>');
    html = html.replace(/___([\s\S]*?)___/g, '<strong><em>$1</em></strong>');
    html = html.replace(/__([\s\S]*?)__/g, '<strong>$1</strong>');
    html = html.replace(/_([\s\S]*?)_/g, '<em>$1</em>');
    
    // Convert newlines to <br> for better formatting of plain-text notes
    return html.replace(/\n/g, '<br>');
};

const renderedContent = computed(() => {
    if (!props.content) return '';

    let roles: Role[] = [];
    if (Array.isArray(props.roles)) {
        roles = props.roles;
    } else if (typeof props.roles === 'string') {
        try {
            roles = JSON.parse(props.roles);
        } catch (e) {
            roles = [];
        }
    }
    const isAdminOrDev = roles.some(r => r === Role.ADMIN || r === Role.DEVELOPER);
    const isSunbeam = roles.some(r => r === Role.SUNBEAM);

    if (isAdminOrDev) {
        return fullMarked.parse(props.content);
    }

    if (isSunbeam) {
        return sunbeamParse(props.content);
    }

    // Default: Regular users get plain text (escaped)
    return escapeHtml(props.content).replace(/\n/g, '<br>');
});
</script>

<template>
    <div class="prose prose-invert prose-emerald max-w-none text-slate-300" v-html="renderedContent"></div>
</template>

<style scoped>
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
