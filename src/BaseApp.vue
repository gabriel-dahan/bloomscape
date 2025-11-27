<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.applyTheme()
})
</script>

<template>
    <Header />

    <main class="container mx-auto p-4 sm:p-8 md:p-20 h-full flex flex-col gap-10 items-center justify-center">
        <slot />
    </main>

    <Footer />
</template>
