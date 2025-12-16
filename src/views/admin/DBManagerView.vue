<script setup lang="ts">
import { AdminController } from '@/server/controllers/AdminController';

</script>

<template>
    <button @click="AdminController.populateMarket()" class="btn btn-primary">Seed DB</button>
</template>