<script setup lang="ts">
import { User } from '@/shared/entities'
import { useAuthStore } from '@/stores/auth'
import { remult } from 'remult'
import slugify from 'slugify'
import { onMounted } from 'vue'

interface GoogleUserPayload {
    aud: string
    azp: string
    email: string
    email_verified: boolean
    exp: number
    family_name: string
    given_name: string
    iat: number
    iss: string
    jti: string
    name: string
    nbf: number
    picture: string
    sub: string
}

const userRepo = remult.repo(User)

const props = defineProps<{
    componentId?: string // Prop pour rendre le composant unique
}>()

// Générer un ID unique si pas fourni
const uniqueId = props.componentId || `google-login-${Math.random().toString(36).substring(2, 15)}`
const auth = useAuthStore()

const onSignIn = async (response: any) => {
    const credential = response.credential
    const payload = parseJwt(credential) as GoogleUserPayload
    console.log('JWT Payload:', payload)

    const email = payload.email.toLowerCase()
    const tag = slugify(payload.name).toLowerCase()

    const user = await userRepo.findOne({
        where: {
            email: email,
        },
    })

    if (user) {
        await auth.login()
    } else {
        await auth.googleSignUp(tag, email, payload.name)
    }
}

function parseJwt(token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join(''),
    )
    return JSON.parse(jsonPayload)
}

onMounted(() => {
    if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
            client_id: '579705986163-mjskbv45008c2htk2ji8qtl4an7o24iq.apps.googleusercontent.com',
            callback: onSignIn,
        })

        // Render le bouton avec l'ID unique
        window.google.accounts.id.renderButton(document.getElementById(uniqueId), {
            theme: 'outline',
            type: 'icon',
            size: 'medium',
            text: 'sign_in_with',
            shape: 'pill',
            logo_alignment: 'left',
            locale: 'en',
        })
    }
})
</script>

<template>
    <div>
        <div :id="uniqueId" style="color-scheme: light"></div>
    </div>
</template>
