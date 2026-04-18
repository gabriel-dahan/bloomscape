<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin'

const auth = useAuthStore()

const emit = defineEmits(['success'])

const onSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
        try {
            const user = await auth.googleLogin(response.credential)
            emit('success', user)
        } catch (error) {
            console.error(error)
        }
    }
}

const onError = () => {
    console.error('Google Sign-In failed')
}
</script>

<template>
    <GoogleSignInButton @success="onSuccess" @error="onError" theme="outline" size="medium" text="signin_with"
        shape="pill" />
</template>