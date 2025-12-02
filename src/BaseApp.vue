<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useRoute } from 'vue-router'

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.applyTheme()
})

const route = useRoute()
</script>

<template>
    <Header v-if="!route.meta.hideLayout" />

    <main class="container mx-auto h-full flex flex-col gap-10 items-center justify-center" :class="{
        'p-4 sm:p-8 md:p-20': !route.meta.hideLayout,
    }">
        <slot />
    </main>

    <Footer v-if="!route.meta.hideLayout" />
</template>
