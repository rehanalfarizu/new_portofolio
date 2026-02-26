<script setup>
const email = 'rehanalfarizi@students.amikom.ac.id'
const github = 'https://github.com/rehanalfarizu'
const linkedin = 'https://linkedin.com/in/yourprofile'
</script>

<template>
  <section id="contact" class="section">
    <div class="section__inner">
      <div class="section__header">
        <span class="section__tag">05. Contact</span>
        <h2 class="section__title">Get In Touch</h2>
      </div>
      <div class="contact__content">
        <p class="contact__text">
          I'm currently open to new opportunities — whether it's a full-time role,
          freelance project, or just a friendly chat about tech. My inbox is always open.
        </p>
        <a :href="`mailto:${email}`" class="contact__btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Say Hello
        </a>
        <div class="contact__socials">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a :href="linkedin" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <footer class="site-footer">
        <p>Designed & Built by <strong>Muhammad Raihan Alfarizi</strong></p>
        <p class="footer-tech">Built with Vue 3 + Vite + Tailwind CSS</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 6rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section__header {
  margin-bottom: 2rem;
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

.contact__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 550px;
  margin: 0 auto 5rem;
  gap: 2rem;
}

.contact__text {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.75;
}

.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2.25rem;
  background: transparent;
  color: #818cf8;
  border: 2px solid #818cf8;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.contact__btn:hover {
  background: rgba(129, 140, 248, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
}

.contact__socials {
  display: flex;
  gap: 1.5rem;
}

.contact__socials a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s, transform 0.2s;
}

.contact__socials a:hover {
  color: #818cf8;
  transform: translateY(-2px);
}

.site-footer {
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.site-footer p {
  color: #475569;
  font-size: 0.8rem;
}

.site-footer strong {
  color: #64748b;
}

.footer-tech {
  color: #334155;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}
</style>
