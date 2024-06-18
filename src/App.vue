<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from './components/NavBar/leftNav.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <LeftNav></LeftNav>
    <v-app-bar title="BookHub"></v-app-bar>
    <buttonManajemen></buttonManajemen>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>