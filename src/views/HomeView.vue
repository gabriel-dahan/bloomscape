<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';


const auth = useAuthStore();

onMounted(async () => {
    await auth.fetchSessionUser();
});
</script>

<template>
    <p v-if="auth.user">User connected : {{ auth.user }}</p>
    <p v-else>No user connected.</p>
</template>