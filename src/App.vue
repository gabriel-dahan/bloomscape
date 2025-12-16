<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Base from './BaseApp.vue'
import { onMounted } from 'vue'
import AuthModal from './components/auth/AuthModal.vue'
import { useAuthModal } from '@/components/auth/logic/useAuthModal'

import GlobalModal from './components/GlobalModal.vue'

const auth = useAuthStore()

const { isOpen, mode, handleSuccess } = useAuthModal()

onMounted(async () => {
  await auth.fetchSessionUser()
})
</script>

<template>
  <AuthModal v-model:is-open="isOpen" :mode="mode" @success="handleSuccess" />
  <GlobalModal />

  <Base>
    <RouterView />
  </Base>
</template>
