<script setup>
const portfolioData = {
  name: 'Muhammad Raihan Alfarizi',
  title: 'Full Stack Developer',
  tagline: 'I build scalable web applications with modern technologies.',
  email: 'rehanalfarizi@students.amikom.ac.id',
  github: 'https://github.com/rehanalfarizu',
  linkedin: 'https://linkedin.com/in/yourprofile',
}

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToProjects = () => {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__content">
      <p class="hero__greeting">Hi, my name is</p>
      <h1 class="hero__name">{{ portfolioData.name }}</h1>
      <h2 class="hero__title">{{ portfolioData.title }}</h2>
      <p class="hero__tagline">{{ portfolioData.tagline }}</p>
      <div class="hero__actions">
        <button class="btn btn--primary" @click="scrollToProjects">View My Work</button>
        <button class="btn btn--outline" @click="scrollToContact">Get In Touch</button>
      </div>
      <div class="hero__socials">
        <a :href="portfolioData.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a :href="portfolioData.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a :href="`mailto:${portfolioData.email}`" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="hero__scroll-hint">
      <span>Scroll down</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 7rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.hero__greeting {
  color: #818cf8;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.hero__name {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.hero__title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #64748b;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero__tagline {
  font-size: 1.05rem;
  color: #94a3b8;
  max-width: 500px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 2px solid transparent;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn--primary {
  background: #818cf8;
  color: #0f172a;
  border-color: #818cf8;
}

.btn--primary:hover {
  background: #6366f1;
  border-color: #6366f1;
  transform: translateY(-2px);
}

.btn--outline {
  background: transparent;
  color: #818cf8;
  border-color: #818cf8;
}

.btn--outline:hover {
  background: rgba(129, 140, 248, 0.1);
  transform: translateY(-2px);
}

.hero__socials {
  display: flex;
  gap: 1.25rem;
}

.hero__socials a {
  color: #64748b;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
}

.hero__socials a:hover {
  color: #818cf8;
  transform: translateY(-3px);
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, #475569, transparent);
  animation: scrollDown 1.5s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 640px) {
  .hero__scroll-hint { display: none; }
}
</style>
