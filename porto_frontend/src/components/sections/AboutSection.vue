<template>
  <section id="about" class="section">
    <div class="section__inner">
      <div class="section__header">
        <h2 class="section__title">About Me</h2>
      </div>
      <div class="about__content">
        <div class="about__text">
          <p>
            I'm a passionate <strong>Backend & Iot Developer</strong> based in Yogyakarta, Indonesia,
            currently studying at AMIKOM University. I enjoy creating elegant solutions to complex
            problems and building applications that make a real impact.
          </p>
          <p>
            With hands-on experience in modern web technologies — from crafting pixel-perfect UIs
            with <strong>Vue.js</strong> and <strong>React</strong>, to building robust backends with
            <strong>Node.js</strong> and <strong>Python</strong> — I bring ideas to life from concept
            to deployment.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new frameworks, contributing to open source, and
            continuously improving my craft as a developer.
          </p>
          <div class="about__highlights">
            <div class="highlight-item">
              <span class="highlight-number">10+</span>
              <span class="highlight-label">Projects Completed</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-number">2+</span>
              <span class="highlight-label">Years Experience</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-number">5+</span>
              <span class="highlight-label">Technologies</span>
            </div>
          </div>
        </div>
        <div class="about__visual">
          <div class="about__avatar-wrapper">
            <div class="about__avatar">
              <span>RA</span>
            </div>
            <div class="avatar-ring"></div>
          </div>
          <div class="about__info-card">
            <div class="info-row">
              <span class="info-label">Location</span>
              <span class="info-value">Yogyakarta, Indonesia</span>
            </div>
            <div class="info-row">
              <span class="info-label">Availability</span>
              <span class="info-value available">Open to Work</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email</span>
              <span class="info-value">rehanalfarizi@students.amikom.ac.id</span>
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
  border-left: 3px solid #6366f1;
}

.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about__text p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1rem;
}

.about__text strong {
  color: #cbd5e1;
}

.about__highlights {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.15);
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.highlight-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #818cf8;
  line-height: 1;
}

.highlight-label {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.about__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.about__avatar-wrapper {
  position: relative;
  width: 160px;
  height: 160px;
}

.about__avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  position: relative;
  z-index: 1;
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed rgba(99, 102, 241, 0.4);
  animation: rotateSlow 10s linear infinite;
}

@keyframes rotateSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.about__info-card {
  background: rgba(14, 21, 32, 0.9);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.info-label {
  font-size: 0.75rem;
  color: #475569;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  font-size: 0.875rem;
  color: #cbd5e1;
  font-weight: 500;
}

.info-value.available {
  color: #4ade80;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.info-value.available::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px #4ade80;
}

@media (max-width: 768px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .about__visual {
    order: -1;
  }
  .about__highlights {
    gap: 1.25rem;
  }
}
</style>
