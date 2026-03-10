<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <!-- Skip to main content (accessibility) -->
  <a href="#hero" class="skip-link">Skip to main content</a>
  <Navbar />
  <RouterView />
</template>

<style>
/* Base font: Inter from Google Fonts (loaded in index.html) */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background-color: #080d18;
  min-height: 100vh;
}

/* Accessibility: skip link */
.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  z-index: 9999;
  background: #6366f1;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0 0 8px 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
  outline: 2px solid #a5b4fc;
  outline-offset: 2px;
}
</style>
