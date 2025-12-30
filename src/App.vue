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

const auth = useAuthStore()
const socket = useSocketStore()

const { isOpen, mode, handleSuccess } = useAuthModal()

onMounted(async () => {
  await auth.fetchSessionUser()
})

watch(
  () => auth.user,
  (user) => {
    if (user) {
      socket.connect()
    } else {
      socket.disconnect()
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