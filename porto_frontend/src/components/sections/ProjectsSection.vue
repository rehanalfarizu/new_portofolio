<script setup>
const tagIconMap = {
  'Laravel':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Vue.js 3':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Tailwind CSS':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'MySQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Heroku':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg',
  'Cloudinary':     'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cloudinary.svg',
  'PHP 8.4':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'Azure IoT Hub':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Azure Functions':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Python ML':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Babylon.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babylonjs/babylonjs-original.svg',
  'ESP32':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg',
  'MQTT':           null,
  'React':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'REST API':       null,
  'Chart.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg',
}

const monoIcons = new Set(['Cloudinary', 'MQTT'])

const projects = [
  {
    title: 'Itqom Education 🎓',
    description:
      'ITQoM Platform adalah platform education bootcamp yang menyediakan pembelajaran komprehensif seputar frontend & backend development, UI/UX design, dan fullstack development. Dibangun dengan Laravel + Vue.js 3, di-deploy ke Heroku dengan custom domain, dan dilengkapi Cloudinary untuk media management serta JawsDB MySQL sebagai database.',
    tags: ['Laravel', 'Vue.js 3', 'Tailwind CSS', 'MySQL', 'Heroku', 'Cloudinary', 'PHP 8.4'],
    github: 'https://github.com/rehanalfarizu/itqom-education',
    demo: 'https://itqom-platform.tech',
    featured: true,
  },
  {
    title: 'TwinSpace - Digital Twin Dashboard 🏢',
    description:
      'Sistem Digital Twin untuk monitoring energi dan kondisi ruangan secara real-time. Menampilkan visualisasi 3D interaktif (Babylon.js), deteksi orang via YOLO + Webcam, serta rekomendasi suhu AC optimal berbasis Machine Learning (Random Forest & Gradient Boosting). Terintegrasi dengan Azure IoT Hub, Azure Functions, HiveMQ MQTT, dan Azure Storage.',
    tags: ['Vue.js 3', 'Azure IoT Hub', 'Azure Functions', 'Python ML', 'MQTT', 'Babylon.js', 'ESP32'],
    github: 'https://github.com/rehanalfarizu/dashboard_digitaltwin',
    demo: 'https://dashboard-digitaltwin.vercel.app/',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with data visualization, geolocation support, and 7-day forecast.',
    tags: ['React', 'REST API', 'Chart.js'],
    github: 'https://github.com/rehanalfarizu/weather-dashboard',
    demo: null,
    featured: false,
  },
]

const openLink = (url) => {
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="projects" class="section">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">Featured Work</h2>
      </div>
      <div class="projects__grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
          :class="{ 'project-card--featured': project.featured }"
        >
          <div class="project-card__top">
            <div class="project-card__folder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="34" height="34">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
              </svg>
            </div>
            <div class="project-card__links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                title="View Source"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                aria-label="Live Demo"
                title="Live Demo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__desc">{{ project.description }}</p>
          <div class="project-card__tags">
            <template v-for="tag in project.tags" :key="tag">
              <img
                v-if="tagIconMap[tag]"
                :src="tagIconMap[tag]"
                :alt="tag"
                :title="tag"
                class="tag-icon"
                :class="{ 'tag-icon--mono': monoIcons.has(tag) }"
              />
              <span v-else :title="tag" class="tag-text">{{ tag }}</span>
            </template>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 3rem;
}

.section__tag {
  color: #818cf8;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.5rem;
}

.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #f59e0b;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: rgba(8, 13, 24, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.project-card:hover {
  border-color: #6366f1;
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.15);
}

.project-card--featured {
  border-color: rgba(99, 102, 241, 0.2);
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-card__folder { color: #6366f1; }

.project-card__links {
  display: flex;
  gap: 0.75rem;
}

.project-card__links a {
  color: #64748b;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
}

.project-card__links a:hover {
  color: #818cf8;
  transform: translateY(-2px);
}

.project-card__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #f0f6fc;
}

.project-card__desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.7;
  flex: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: grayscale(20%);
  transition: filter 0.2s, transform 0.2s;
  border-radius: 3px;
}

.tag-icon:not(.tag-icon--mono):hover {
  filter: grayscale(0%) drop-shadow(0 0 4px rgba(99,102,241,0.6));
  transform: scale(1.2);
}

.tag-icon--mono {
  filter: invert(1) brightness(1.8) sepia(1) saturate(3) hue-rotate(195deg);
}

.tag-icon--mono:hover {
  filter: invert(1) brightness(2) sepia(1) saturate(5) hue-rotate(195deg) drop-shadow(0 0 4px rgba(99,102,241,0.6));
  transform: scale(1.2);
}

.tag-text {
  font-size: 0.65rem;
  color: #818cf8;
  font-weight: 600;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.25);
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
