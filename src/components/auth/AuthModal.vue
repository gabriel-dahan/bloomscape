<script setup lang="ts">
import { reactive, ref, computed, watch, nextTick } from 'vue'
import { useAuthStore } from '@/stores/auth'
import GoogleLoginBtn from '../buttons/GoogleLoginBtn.vue';
import Form from '../Form.vue';

// Props & Emits
const props = defineProps<{
    isOpen: boolean
    mode?: 'login' | 'signup'
}>()

const emit = defineEmits<{
    'update:isOpen': [value: boolean]
    success: [user: any]
}>()

// State
const mode = ref<'login' | 'signup'>(props.mode || 'login')
const auth = useAuthStore()
const dialogRef = ref<HTMLDialogElement>()

// Form fields
const error = reactive<Record<string, string>>({})

// Watch for isOpen prop changes to control dialog
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

// Clear errors when switching modes
watch(mode, () => {
    Object.keys(error).forEach((key) => (error[key] = ''))
    clearFields()
})

const clearFields = () => {
    formData.tag = ''
    formData.email = ''
    formData.tagOrEmail = ''
    formData.passwd = ''
    formData.passwdConfirm = ''
    formData.rememberMe = false
}

// Close modal
const closeModal = () => {
    emit('update:isOpen', false)
    clearFields()
    Object.keys(error).forEach((key) => (error[key] = ''))
}

// Handle dialog close event (ESC key or backdrop click)
const handleDialogClose = () => {
    closeModal()
}

// Switch between login/signup
const switchMode = () => {
    mode.value = mode.value === 'login' ? 'signup' : 'login'
}

// Login logic
const login = async () => {
    error.general = ''
    try {
        await auth.login(formData.tagOrEmail, formData.passwd, formData.rememberMe)

        emit('success', auth.user)
        closeModal()
    } catch (err: any) {
        if (err.message?.toLowerCase().includes('password')) {
            error.password = err.message
        } else if (
            err.message?.toLowerCase().includes('tag') ||
            err.message?.toLowerCase().includes('email')
        ) {
            error.tagOrEmail = err.message
        } else {
            error.general = err.message || 'Unknown error'
        }
    }
}

// Signup logic
const signUp = async () => {
    error.general = ''
    try {
        await auth.signUp(
            formData.tag.toLowerCase(),
            formData.email.toLowerCase(),
            formData.passwd,
            formData.passwdConfirm,
        )

        // Switch to login after successful signup
        mode.value = 'login'
        formData.tagOrEmail = formData.email // Pre-fill with the email they just used

        // Show success message
        error.general = '✅ Account successfully registered ! You can now login.'
    } catch (err: any) {
        if (err.message?.toLowerCase().includes('password')) {
            error.passwd = err.message
            error.passwdConfirm = err.message
        } else if (err.message?.toLowerCase().includes('email')) {
            error.email = err.message
        } else if (err.message?.toLowerCase().includes('tag')) {
            error.tag = err.message
        } else {
            error.general = err.message || 'Unknown error'
        }
    }
}

// Computed properties for form configuration
const formData = reactive({
    tagOrEmail: '',
    rememberMe: false,
    tag: '',
    email: '',
    passwd: '',
    passwdConfirm: '',
})

const fields = computed(() => {
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
                placeholder: 'Keep it a secret !',
                vmodel: 'passwd',
            },
            {
                label: 'Remember Me ?',
                type: 'checkbox',
                placeholder: 'rememberMe',
                vmodel: 'rememberMe',
            },
        ]
    } else {
        return [
            { label: 'Tag', type: 'text', placeholder: 'comxfan-number1', vmodel: 'tag' },
            { label: 'Email', type: 'email', placeholder: 'comx@fan.me', vmodel: 'email' },
            { label: 'Password', type: 'password', placeholder: 'Keep it a secret !', vmodel: 'passwd' },
            {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'Just to be sure...',
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
    <!-- DaisyUI Dialog Modal -->
    <dialog ref="dialogRef" class="modal modal-middle" @close="handleDialogClose">
        <div class="modal-box w-11/12 max-w-md p-0">
            <!-- Close button -->
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <!-- Modal Content -->
            <div class="space-y-4">
                <!-- Form -->
                <Form method="POST" :title="formConfig.title" :submitButtonText="formConfig.submitButtonText"
                    :submitAction="formConfig.submitAction" :fieldSetBorder="false">
                    <!-- Header -->
                    <template #header>
                        <div v-if="mode === 'signup'" class="text-center text-sm opacity-90">
                            You don't have an account yet ? Sign up now and join the
                            <span class="app-title">COMX</span> community !
                        </div>
                    </template>

                    <!-- General Error/Success -->
                    <div v-if="error.general" :class="[
                        'alert text-sm mb-4',
                        error.general.includes('✅') ? 'alert-success' : 'alert-error',
                    ]">
                        <span>{{ error.general }}</span>
                    </div>

                    <!-- Form Fields -->
                    <template #fields>
                        <div v-for="(field, index) in fields" :key="index" class="flex gap-2"
                            :class="field.type === 'checkbox' ? 'form-control' : 'form-control w-full flex-col'">
                            <label :class="[
                                'label',
                                field.type === 'checkbox' ? 'cursor-pointer justify-start gap-3' : '',
                            ]">
                                {{ field.label }}
                            </label>
                            <input :type="field.type" :class="[
                                field.type === 'checkbox'
                                    ? 'checkbox checkbox-primary'
                                    : 'input input-bordered w-full',
                                error[field.vmodel] && 'input-error',
                            ]" :placeholder="field.type !== 'checkbox' ? field.placeholder : ''"
                                v-model="formData[field.vmodel]" @input="() => (error[field.vmodel] = '')" />
                            <div v-if="error[field.vmodel]" class="label">
                                <span class="label-text-alt text-error">{{ error[field.vmodel] }}</span>
                            </div>
                        </div>
                    </template>

                    <!-- Switch Mode Link -->
                    <template #small>
                        <div class="text-center text-sm">
                            <span v-if="mode === 'login'">
                                Don't have an account ?
                                <button @click="switchMode" class="link link-primary">Sign Up</button>
                            </span>
                            <span v-else>
                                Already have an account ?
                                <button @click="switchMode" class="link link-primary">Login</button>
                            </span>
                        </div>
                    </template>

                    <!-- Additional Buttons (only for login) -->
                    <template #moreBtns v-if="mode === 'login'">
                        <div class="divider text-xs opacity-60">OR</div>
                        <GoogleLoginBtn />
                    </template>
                </Form>
            </div>
        </div>

        <!-- Modal backdrop - closes when clicked -->
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
