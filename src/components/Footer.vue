<script setup lang="ts">
import { ROUTES_ENUM as routes } from '@/routes/routes_enum'
import ThemeSwitcher from './buttons/ThemeSwitcher.vue'

const appTitle = import.meta.env.VITE_APP
const appVersion = import.meta.env.VITE_APP_VERSION

const instagramAccountURL = 'https://instagram.com/comx.app/'
const discordServerURL = 'https://discord.gg/4sJyaynWdW'
</script>

<template>
    <footer class="footer sm:footer-horizontal p-10 bg-base-100 text-base-content items-center justify-between">
        <div class="flex items-center justify-center">
            <span>&copy; {{ new Date().getFullYear() }} <span class="app-title">{{ appTitle }}</span>
                <kbd class="kbd kbd-sm">{{ appVersion }}</kbd></span>
            <!-- <span>powered by <a class="link link-warning engine-title">{{ engineTitle }}</a></span> -->
        </div>
        <nav>
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Advertisement</a>
            <RouterLink class="link link-hover" :to="routes.API_PRESENTATION.path">API for developers</RouterLink>
        </nav>
        <nav>
            <h6 class="footer-title">Company</h6>
            <RouterLink class="link link-hover" :to="routes.ABOUT.path">About us</RouterLink>
            <RouterLink class="link link-hover" :to="routes.FAQ.path">F.A.Q.</RouterLink>
            <RouterLink class="link link-hover" :to="routes.CONTACT.path">Contact</RouterLink>
        </nav>
        <nav>
            <h6 class="footer-title">Social</h6>
            <div class="grid grid-flow-col gap-4">
                <a :href="instagramAccountURL" target="_blank">
                    <InstagramIcon />
                </a>
                <a :href="discordServerURL" target="_blank" disabled>
                    <DiscordIcon />
                </a>
            </div>
        </nav>
        <div>
            <ThemeSwitcher />
        </div>
    </footer>
</template>
