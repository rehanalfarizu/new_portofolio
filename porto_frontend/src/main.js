// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

// ── v-reveal directive ──
app.directive('reveal', {
  mounted(el, binding) {
    const variant = binding.value || 'fade-up'
    el.setAttribute('data-reveal', variant)

    // If already in viewport (e.g. hash navigation), reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  },
})

app.mount('#app');
