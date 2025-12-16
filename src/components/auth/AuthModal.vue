<script setup lang="ts">
import { reactive, ref, computed, watch, nextTick } from 'vue'
import { useAuthStore } from '@/stores/auth'
import GoogleLoginBtn from '../buttons/GoogleLoginBtn.vue' // Adjust path if needed
import Form from '../Form.vue' // Adjust path if needed

// --- TYPES ---
// Define keys to ensure type safety in v-for loops
interface FieldConfig {
    label: string
    type: string
    placeholder: string
    vmodel: keyof typeof formData
}

// --- PROPS & EMITS ---
const props = defineProps<{
    isOpen: boolean
    mode?: 'login' | 'signup'
}>()

const emit = defineEmits<{
    'update:isOpen': [value: boolean]
    success: [user: any]
}>()

// --- STATE ---
const mode = ref<'login' | 'signup'>(props.mode || 'login')
const auth = useAuthStore()
const dialogRef = ref<HTMLDialogElement>()

// Reactive form data
const formData = reactive({
    tagOrEmail: '',
    rememberMe: false,
    tag: '',
    email: '',
    passwd: '',
    passwdConfirm: '',
})

// Error state
const error = reactive<Record<string, string>>({})

// --- WATCHERS ---

// Control Dialog Visibility
watch(
    () => props.isOpen,
    (newValue) => {
        nextTick(() => {
            if (newValue && dialogRef.value) {
                dialogRef.value.showModal()
            } else if (!newValue && dialogRef.value) {
                dialogRef.value.close()
            }
        })
    },
    { immediate: true },
)

// Reset state when mode changes
watch(mode, () => {
    resetForm()
})

// --- ACTIONS ---

const resetForm = () => {
    // Clear errors
    Object.keys(error).forEach((key) => delete error[key])

    // Clear fields
    formData.tag = ''
    formData.email = ''
    formData.tagOrEmail = ''
    formData.passwd = ''
    formData.passwdConfirm = ''
    formData.rememberMe = false
}

const closeModal = () => {
    emit('update:isOpen', false)
    resetForm()
}

const handleDialogClose = () => {
    closeModal()
}

const switchMode = () => {
    mode.value = mode.value === 'login' ? 'signup' : 'login'
}

// --- API LOGIC ---

const login = async () => {
    error.general = ''
    try {
        await auth.login(
            formData.tagOrEmail.trim(), // Sanitize input
            formData.passwd,
            formData.rememberMe
        )

        emit('success', auth.user)
        closeModal()
    } catch (err: any) {
        handleApiError(err)
    }
}

const signUp = async () => {
    error.general = ''

    // 1. Frontend Validation
    if (formData.passwd !== formData.passwdConfirm) {
        error.passwdConfirm = "Passwords do not match"
        return
    }

    try {
        // 2. API Call
        await auth.signUp(
            formData.tag.toLowerCase().trim(),
            formData.email.toLowerCase().trim(),
            formData.passwd,
            formData.passwdConfirm,
        )

        // 3. Success Handling
        mode.value = 'login'
        formData.tagOrEmail = formData.email // Auto-fill login
        error.general = '✅ Account successfully registered! You can now login.'

    } catch (err: any) {
        handleApiError(err)
    }
}

const handleApiError = (err: any) => {
    const msg = err.message?.toLowerCase() || ''

    if (msg.includes('password')) {
        error.passwd = err.message
        error.passwdConfirm = err.message
    } else if (msg.includes('email')) {
        error.email = err.message
        error.tagOrEmail = err.message
    } else if (msg.includes('tag')) {
        error.tag = err.message
        error.tagOrEmail = err.message
    } else {
        error.general = err.message || 'Unknown error'
    }
}

// --- CONFIGURATION ---

const fields = computed<FieldConfig[]>(() => {
    if (mode.value === 'login') {
        return [
            {
                label: 'Tag or Email',
                type: 'text',
                placeholder: 'comx-fan or comx@fan.me',
                vmodel: 'tagOrEmail',
            },
            {
                label: 'Password',
                type: 'password',
                placeholder: 'Keep it a secret!',
                vmodel: 'passwd',
            },
            {
                label: 'Remember Me?',
                type: 'checkbox',
                placeholder: '',
                vmodel: 'rememberMe',
            },
        ]
    } else {
        return [
            { label: 'Tag', type: 'text', placeholder: 'comxfan-number1', vmodel: 'tag' },
            { label: 'Email', type: 'email', placeholder: 'comx@fan.me', vmodel: 'email' },
            { label: 'Password', type: 'password', placeholder: 'Create a password', vmodel: 'passwd' },
            {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'Repeat password',
                vmodel: 'passwdConfirm',
            },
        ]
    }
})

const formConfig = computed(() => {
    return {
        title: mode.value === 'login' ? 'Login' : 'Sign Up',
        submitButtonText: mode.value === 'login' ? 'Login' : 'Sign Up',
        submitAction: mode.value === 'login' ? login : signUp,
    }
})
</script>

<template>
    <dialog ref="dialogRef" class="modal modal-middle" @close="handleDialogClose">
        <div class="modal-box w-11/12 max-w-md p-0">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div class="space-y-4">

                <Form method="POST" :title="formConfig.title" :submitButtonText="formConfig.submitButtonText"
                    :submitAction="formConfig.submitAction" :fieldSetBorder="false">
                    <template #header>
                        <div v-if="mode === 'signup'" class="text-center text-sm opacity-90">
                            You don't have an account yet? Sign up now and join the
                            <span class="font-bold text-primary">COMX</span> community!
                        </div>
                    </template>

                    <div v-if="error.general" :class="[
                        'alert text-sm mb-4',
                        error.general.includes('✅') ? 'alert-success' : 'alert-error',
                    ]">
                        <span>{{ error.general }}</span>
                    </div>

                    <template #fields>
                        <div v-for="field in fields" :key="field.vmodel" class="flex gap-2"
                            :class="field.type === 'checkbox' ? 'form-control' : 'form-control w-full flex-col'">
                            <label :class="[
                                'label',
                                field.type === 'checkbox' ? 'cursor-pointer justify-start gap-3' : '',
                            ]">
                                <span class="label-text">{{ field.label }}</span>
                            </label>

                            <input :type="field.type" :class="[
                                field.type === 'checkbox'
                                    ? 'checkbox checkbox-primary'
                                    : 'input input-bordered w-full',
                                error[field.vmodel] && 'input-error',
                            ]" :placeholder="field.type !== 'checkbox' ? field.placeholder : ''"
                                v-model="formData[field.vmodel]" @input="() => delete error[field.vmodel]" />

                            <div v-if="error[field.vmodel]" class="label">
                                <span class="label-text-alt text-error">{{ error[field.vmodel] }}</span>
                            </div>
                        </div>
                    </template>

                    <template #small>
                        <div class="text-center text-sm mt-2">
                            <span v-if="mode === 'login'">
                                Don't have an account?
                                <button type="button" @click="switchMode" class="link link-primary">Sign Up</button>
                            </span>
                            <span v-else>
                                Already have an account?
                                <button type="button" @click="switchMode" class="link link-primary">Login</button>
                            </span>
                        </div>
                    </template>

                    <template #moreBtns v-if="mode === 'login'">
                        <div class="divider text-xs opacity-60">OR</div>
                        <GoogleLoginBtn />
                    </template>
                </Form>
            </div>
        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>