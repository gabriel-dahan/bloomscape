<script setup lang="ts">
import { ROUTES_ENUM as ROUTES } from '../routes/routes_enum'
import GoogleLoginBtn from './buttons/GoogleLoginBtn.vue';
</script>

<template>
    <header>
        <nav class="flex items-center p-4 bg-base-100 gap-4 md:gap-10">
            <!-- <AppTitle /> -->
            <div class="flex grow items-center gap-4">
                <!-- <SearchBar /> -->
                <GoogleLoginBtn />
                <div class="grow"></div>
                <!-- <NavBar /> -->
            </div>
        </nav>
    </header>
</template>
