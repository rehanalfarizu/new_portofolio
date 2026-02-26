<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (href) => {
  isMobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled }"
  >
    <div class="navbar__inner">
      <a class="navbar__brand" href="#" @click.prevent="scrollTo('#hero')">
        <span class="brand-dot">&lt;</span>RA<span class="brand-dot">/&gt;</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.href">
          <a @click.prevent="scrollTo(link.href)" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <button class="navbar__hamburger" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': isMobileMenuOpen }">
      <ul>
        <li v-for="link in navLinks" :key="link.href">
          <a @click.prevent="scrollTo(link.href)" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
}

.navbar--scrolled {
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
}

.navbar__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f1f5f9;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.brand-dot {
  color: #818cf8;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;
}

.navbar__links a:hover {
  color: #818cf8;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #94a3b8;
  transition: all 0.3s;
  transform-origin: center;
}

.navbar__hamburger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger span.open:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__mobile {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(15, 23, 42, 0.97);
}

.navbar__mobile--open {
  max-height: 300px;
}

.navbar__mobile ul {
  list-style: none;
  padding: 1rem 1.5rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid rgba(99, 102, 241, 0.15);
}

.navbar__mobile a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.navbar__mobile a:hover {
  color: #818cf8;
}

@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
  .navbar__mobile {
    display: block;
  }
}
</style>
