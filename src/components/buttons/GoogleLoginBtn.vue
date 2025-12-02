<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin'

const auth = useAuthStore()

const onSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
        try {
            await auth.googleLogin(response.credential)
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
    <GoogleSignInButton @success="onSuccess" @error="onError" theme="light" size="medium" text="signin_with"
        shape="pill" />
</template>