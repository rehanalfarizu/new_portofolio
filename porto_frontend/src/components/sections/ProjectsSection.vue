<script setup>
const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with product catalog, cart management, payment integration, and admin dashboard.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/rehanalfarizu/ecommerce',
    demo: null,
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaborative task manager with drag-and-drop boards, team workspaces, and live notifications.',
    tags: ['Vue.js', 'Firebase', 'TypeScript'],
    github: 'https://github.com/rehanalfarizu/task-manager',
    demo: null,
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
        <span class="section__tag">03. Projects</span>
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
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
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
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -0.5px;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: #1e293b;
  border: 1px solid rgba(99, 102, 241, 0.12);
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  border-color: rgba(129, 140, 248, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
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

.project-card__folder {
  color: #818cf8;
}

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
  font-size: 1.1rem;
  font-weight: 700;
  color: #e2e8f0;
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
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  color: #818cf8;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.tag:not(:last-child)::after {
  content: ' ·';
  color: #475569;
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
