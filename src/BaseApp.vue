<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useRoute } from 'vue-router'
import { remult } from 'remult'
import { UserController } from './server/controllers/UserController'

let heartbeatInterval: number | null = null

const themeStore = useThemeStore()

onMounted(() => {
    themeStore.applyTheme()

    if (remult.user) {
        UserController.heartbeat()

        heartbeatInterval = window.setInterval(() => {
            UserController.heartbeat()
        }, 30 * 1000)
    }
})

onUnmounted(() => {
    if (heartbeatInterval) window.clearInterval(heartbeatInterval)
})

const route = useRoute()
</script>

<template>
    <Header v-if="!route.meta.hideLayout" />

    <main class="container mx-auto h-full flex flex-col gap-10 items-center justify-center">
        <slot />
    </main>

    <Footer v-if="!route.meta.hideLayout" />
</template>
