<script setup lang="ts">
import { ROUTES_ENUM as routes } from '@/routes/routes_enum'
import ThemeSwitcher from './buttons/ThemeSwitcher.vue'
import DiscordIcon from './icons/DiscordIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'

const appTitle = import.meta.env.VITE_APP
const appVersion = import.meta.env.VITE_APP_VERSION

const instagramAccountURL = 'https://instagram.com/comx.app/'
const discordServerURL = 'https://discord.gg/4sJyaynWdW'
</script>

<template>
    <footer class="footer sm:footer-horizontal p-10 bg-slate-950 text-slate-400 border-t border-slate-800">
        <aside>
            <div class="flex items-center gap-2 mb-1">
                <div
                    class="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-slate-900 text-xs font-bold shadow-lg shadow-emerald-500/20">
                    B
                </div>
                <span class="text-xl font-bold text-white tracking-tight">{{ appTitle }}</span>
            </div>

            <div class="flex items-center gap-2 mt-1">
                <span class="text-sm">&copy; {{ new Date().getFullYear() }}</span>
                <kbd class="kbd kbd-sm bg-slate-900 border-slate-700 text-emerald-400 font-mono text-xs">
                    v{{ appVersion }}
                </kbd>
            </div>
        </aside>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Services</h6>
            <a class="link link-hover hover:text-emerald-400 transition-colors">Advertisement</a>
            <a class="link link-hover hover:text-emerald-400 transition-colors">Market API</a>
        </nav>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Company</h6>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.ABOUT.path">
                About us
            </RouterLink>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.WIKI.path">
                Wiki
            </RouterLink>
            <RouterLink class="link link-hover hover:text-emerald-400 transition-colors" :to="routes.CONTACT.path">
                Contact
            </RouterLink>
        </nav>

        <nav>
            <h6 class="footer-title text-white opacity-100 mb-2">Community</h6>
            <div class="grid grid-flow-col gap-4">
                <a :href="instagramAccountURL" target="_blank"
                    class="hover:text-emerald-400 hover:-translate-y-1 transition-all">
                    <InstagramIcon class="w-6 h-6" />
                </a>
                <a :href="discordServerURL" target="_blank"
                    class="hover:text-emerald-400 hover:-translate-y-1 transition-all">
                    <DiscordIcon class="w-6 h-6" />
                </a>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
/* Optional: Ensure footer links don't have default underlining until hover */
.link {
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>