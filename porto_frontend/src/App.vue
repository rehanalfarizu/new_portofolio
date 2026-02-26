<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
#app {
  background-color: #080d18;
  min-height: 100vh;
}
</style>
