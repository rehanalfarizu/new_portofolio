<script setup>
const skillCategories = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: '#38bdf8',
    skills: [
      { name: 'Vue.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#a78bfa',
    skills: [
      { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'FastAPI',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    ]
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#34d399',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#f59e0b',
    skills: [
      { name: 'Azure',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
      { name: 'Git',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Heroku',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg' },
      { name: 'Vercel',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    ]
  },
  {
    category: 'IoT & ML',
    icon: '🤖',
    color: '#fb7185',
    skills: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Keras',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
      { name: 'Jupyter',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
      { name: 'Arduino',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
      { name: 'Spark',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg' },
    ]
  },
]
</script>

<template>
  <section id="skills" class="section skills-bg">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">Technologies I Work With</h2>
      </div>
      <div class="skills__grid">
        <div
          v-for="cat in skillCategories"
          :key="cat.category"
          class="skills__card"
          :style="{ '--cat-color': cat.color }"
        >
          <div class="card__header">
            <span class="card__icon">{{ cat.icon }}</span>
            <h3 class="card__title">{{ cat.category }}</h3>
          </div>
          <div class="skills__tags">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="skill-item"
              :title="skill.name"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="skill-item__icon"
                loading="lazy"
                width="22"
                height="22"
                @error="(e) => e.target.style.display = 'none'"
              />
              <span class="skill-item__name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6rem 1.5rem;
}

.skills-bg {
  background: #0a1020;
  border-top: 1px solid rgba(99, 102, 241, 0.12);
  border-bottom: 1px solid rgba(99, 102, 241, 0.12);
}

.section__inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 3rem;
}

.section__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.5px;
  padding-left: 0.75rem;
  border-left: 3px solid #8b5cf6;
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.skills__card {
  background: rgba(8, 13, 24, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.75rem;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.skills__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--cat-color, #6366f1);
  opacity: 0;
  transition: opacity 0.3s;
}

.skills__card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.12);
}

.skills__card:hover::before {
  opacity: 1;
}

.card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.card__icon {
  font-size: 1.5rem;
}

.card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
}

/* ── Skill items with icon + label ── */
.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(99, 102, 241, 0.07);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 8px;
  padding: 0.3rem 0.65rem;
  cursor: default;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}

.skill-item:hover {
  background: rgba(99, 102, 241, 0.16);
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
}

.skill-item__icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 3px;
}

.skill-item__name {
  font-size: 0.78rem;
  font-weight: 500;
  color: #94a3b8;
  white-space: nowrap;
}

.skill-item:hover .skill-item__name {
  color: #c7d2fe;
}

@media (max-width: 640px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}
</style>
