<script setup>
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2023 – Present',
    description:
      'Developing and delivering end-to-end web applications for clients. Building responsive frontends with Vue.js and React, and scalable REST APIs with Node.js and Python/FastAPI.',
    achievements: [
      'Delivered 3+ client projects from design to deployment',
      'Reduced API response times by 40% through query optimization',
      'Implemented CI/CD pipelines using GitHub Actions',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Startup – Yogyakarta',
    period: '2022 – 2023',
    description:
      'Contributed to front-end development of an internal SaaS dashboard product. Collaborated with the design team to implement responsive UI components.',
    achievements: [
      'Built reusable component library using Vue 3 + TypeScript',
      'Improved Lighthouse performance score from 65 to 92',
      'Integrated third-party APIs (payment, maps, analytics)',
    ],
  },
]

const education = {
  degree: 'S1 Informatika',
  institution: 'Universitas Amikom Yogyakarta',
  period: '2021 – Present',
}
</script>

<template>
  <section id="experience" class="section exp-bg">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">Where I've Worked</h2>
      </div>
      <div class="exp__layout">
        <div class="exp__timeline">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="exp__item"
          >
            <div class="exp__dot"></div>
            <div class="exp__body">
              <div class="exp__meta">
                <h3 class="exp__role">{{ exp.role }}</h3>
                <span class="exp__company">{{ exp.company }}</span>
                <span class="exp__period">{{ exp.period }}</span>
              </div>
              <p class="exp__desc">{{ exp.description }}</p>
              <ul class="exp__achievements">
                <li v-for="item in exp.achievements" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp__education">
          <div class="edu__card">
            <div class="edu__icon">🎓</div>
            <h3 class="edu__title">Education</h3>
            <div class="edu__degree">{{ education.degree }}</div>
            <div class="edu__inst">{{ education.institution }}</div>
            <div class="edu__period">{{ education.period }}</div>
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

.exp-bg {
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
  border-left: 3px solid #a78bfa;
}

.exp__layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  align-items: start;
}

.exp__timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(99, 102, 241, 0.2);
}

.exp__item {
  position: relative;
  padding-bottom: 2.5rem;
}

.exp__item:last-child {
  padding-bottom: 0;
}

.exp__dot {
  position: absolute;
  left: -1.72rem;
  top: 0.3rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #6366f1;
  border: 2px solid #080d18;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.exp__body {
  padding-left: 0.5rem;
}

.exp__meta {
  margin-bottom: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
}

.exp__role {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e2e8f0;
}

.exp__company {
  color: #818cf8;
  font-size: 0.9rem;
  font-weight: 600;
}

.exp__period {
  color: #475569;
  font-size: 0.8rem;
  font-weight: 500;
}

.exp__desc {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.exp__achievements {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.exp__achievements li {
  color: #94a3b8;
  font-size: 0.875rem;
  padding-left: 1.25rem;
  position: relative;
}

.exp__achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #6366f1;
}

.exp__education {
  position: sticky;
  top: 6rem;
}

.edu__card {
  background: rgba(8, 13, 24, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 8px;
  padding: 1.75rem;
  text-align: center;
}

.edu__icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.edu__title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.edu__degree {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.4rem;
}

.edu__inst {
  font-size: 0.875rem;
  color: #818cf8;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.edu__period {
  font-size: 0.8rem;
  color: #475569;
}

@media (max-width: 768px) {
  .exp__layout {
    grid-template-columns: 1fr;
  }
  .exp__education {
    position: static;
  }
}
</style>
