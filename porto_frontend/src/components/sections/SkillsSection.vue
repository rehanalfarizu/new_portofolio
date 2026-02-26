<script setup>
const skillCategories = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['Vue.js', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'REST APIs']
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Tools & DevOps',
    icon: '🔧',
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress']
  }
]
</script>

<template>
  <section id="skills" class="section skills-bg">
    <div class="section__inner">
      <div class="section__header">
        <span class="section__tag">02. Skills</span>
        <h2 class="section__title">Technologies I Work With</h2>
      </div>
      <div class="skills__grid">
        <div
          v-for="cat in skillCategories"
          :key="cat.category"
          class="skills__card"
        >
          <div class="card__header">
            <span class="card__icon">{{ cat.icon }}</span>
            <h3 class="card__title">{{ cat.category }}</h3>
          </div>
          <div class="skills__tags">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="skill-tag"
            >
              {{ skill }}
            </span>
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
  background: rgba(30, 41, 59, 0.4);
  border-top: 1px solid rgba(99, 102, 241, 0.08);
  border-bottom: 1px solid rgba(99, 102, 241, 0.08);
}

.section__inner {
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

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skills__card {
  background: #1e293b;
  border: 1px solid rgba(99, 102, 241, 0.12);
  border-radius: 14px;
  padding: 1.75rem;
  transition: border-color 0.3s, transform 0.3s;
}

.skills__card:hover {
  border-color: rgba(129, 140, 248, 0.4);
  transform: translateY(-4px);
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

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: background 0.2s, color 0.2s;
}

.skill-tag:hover {
  background: rgba(99, 102, 241, 0.25);
  color: #c7d2fe;
}

@media (max-width: 640px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}
</style>
