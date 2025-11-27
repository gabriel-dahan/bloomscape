<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import Base from './BaseApp.vue'
import { onMounted } from 'vue'
import AuthModal from './components/AuthModal.vue'
import { useAuthModal } from '@/components/logic/useAuthModal'

const auth = useAuthStore()

const { isOpen, mode, handleSuccess } = useAuthModal()

onMounted(async () => {
  await auth.fetchSessionUser()
})
</script>

<template>
  <AuthModal v-model:is-open="isOpen" :mode="mode" @success="handleSuccess" />
  <Base>
  <RouterView />
  </Base>
</template>
