<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Base from './BaseApp.vue'
import { onMounted, watch } from 'vue'
import AuthModal from './components/auth/AuthModal.vue'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

import GlobalModal from './components/GlobalModal.vue'
import GlobalChatDrawer from './components/chat/GlobalChatDrawer.vue'
import { useSocketStore } from '@/stores/socket'
import NotificationsContainer from './components/notifications/NotificationsContainer.vue'
import { UserController } from './server/controllers/UserController'

const auth = useAuthStore()
const socket = useSocketStore()

const { isOpen, mode, handleSuccess } = useAuthModal()

let heartbeatInterval: any = null

const startHeartbeat = () => {
  if (heartbeatInterval) clearInterval(heartbeatInterval)
  heartbeatInterval = setInterval(async () => {
    if (auth.user) {
      try {
        await UserController.heartbeat()
      } catch (e) {
        console.error('Heartbeat failed', e)
      }
    }
  }, 60000)
}

onMounted(async () => {
  await auth.fetchSessionUser()
  if (auth.user) startHeartbeat()
})

watch(
  () => auth.user,
  (user) => {
    if (user) {
      socket.connect()
      startHeartbeat()
    } else {
      socket.disconnect()
      if (heartbeatInterval) clearInterval(heartbeatInterval)
    }
  },
  { immediate: true }
)
</script>

<template>
  <AuthModal v-model:is-open="isOpen" :mode="mode" @success="handleSuccess" />
  <GlobalModal />
  <GlobalChatDrawer />

  <NotificationsContainer />

  <Base>
    <RouterView />
  </Base>
</template>