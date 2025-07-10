<script setup>
import WelcomeItem from './WelcomeItem.vue'
// Import icons - you might want to create new icons or use existing ones
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

// You can replace these with your actual portfolio data
const portfolioData = {
  name: "muhammad raihan alfarizi",
  title: "Full Stack Developer",
  email: "rehanalfarizi@students.amikom.ac.id",
  github: "https://github.com/rehanalfarizu",
  linkedin: "https://linkedin.com/in/yourprofile"
}

const openProject = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <!-- Hero Section -->
  <div class="hero-section">
    <h1>{{ portfolioData.name }}</h1>
    <p class="subtitle">{{ portfolioData.title }}</p>
    <div class="contact-links">
      <a :href="`mailto:${portfolioData.email}`">Email</a>
      <a :href="portfolioData.github" target="_blank" rel="noopener">GitHub</a>
      <a :href="portfolioData.linkedin" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>

  <!-- About Section -->
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>About Me</template>

    I'm a passionate full-stack developer with expertise in modern web technologies.
    I love creating elegant solutions to complex problems and building user-friendly applications
    that make a difference. With experience in
    <strong>Vue.js, React, Node.js, and Python</strong>, I'm always eager to learn new technologies
    and tackle challenging projects.
  </WelcomeItem>

  <!-- Skills Section -->
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Technical Skills</template>

    <strong>Frontend:</strong> Vue.js, React, TypeScript, HTML5, CSS3, Tailwind CSS, Vite
    <br />
    <strong>Backend:</strong> Node.js, Python, Express.js, FastAPI, REST APIs
    <br />
    <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis
    <br />
    <strong>Tools & Others:</strong> Git, Docker, AWS, Firebase, Jest, Cypress
  </WelcomeItem>

  <!-- Projects Section -->
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Featured Projects</template>

    <div class="project-grid">
      <div class="project-card">
        <h4>E-Commerce Platform</h4>
        <p>Full-stack e-commerce solution built with Vue.js and Node.js</p>
        <div class="project-links">
          <a href="javascript:void(0)" @click="openProject('https://github.com/yourusername/ecommerce')">
            GitHub
          </a>
          <a href="javascript:void(0)" @click="openProject('https://your-ecommerce-demo.com')">
            Live Demo
          </a>
        </div>
      </div>

      <div class="project-card">
        <h4>Task Management App</h4>
        <p>Real-time collaborative task manager with Vue.js and Firebase</p>
        <div class="project-links">
          <a href="javascript:void(0)" @click="openProject('https://github.com/yourusername/task-manager')">
            GitHub
          </a>
          <a href="javascript:void(0)" @click="openProject('https://your-task-app.com')">
            Live Demo
          </a>
        </div>
      </div>

      <div class="project-card">
        <h4>Weather Dashboard</h4>
        <p>Interactive weather app with data visualization and geolocation</p>
        <div class="project-links">
          <a href="javascript:void(0)" @click="openProject('https://github.com/yourusername/weather-dashboard')">
            GitHub
          </a>
          <a href="javascript:void(0)" @click="openProject('https://your-weather-app.com')">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </WelcomeItem>

  <!-- Experience Section -->
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Experience</template>

    <div class="experience-item">
      <h4>Senior Frontend Developer</h4>
      <p class="company">Tech Company Inc. • 2022 - Present</p>
      <p>Led development of responsive web applications using Vue.js and TypeScript.
         Collaborated with cross-functional teams to deliver high-quality user experiences.</p>
    </div>

    <div class="experience-item">
      <h4>Full Stack Developer</h4>
      <p class="company">StartupXYZ • 2020 - 2022</p>
      <p>Built and maintained full-stack applications using modern JavaScript frameworks.
         Implemented RESTful APIs and optimized database performance.</p>
    </div>
  </WelcomeItem>

  <!-- Contact Section -->
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Let's Connect</template>

    I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
    discuss a project, have a question, or just want to connect!
    <br /><br />
    <a :href="`mailto:${portfolioData.email}`" class="contact-button">Get In Touch</a>
  </WelcomeItem>
</template>

<style scoped>
.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.contact-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.contact-links a:hover {
  background: white;
  color: #667eea;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.project-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  background: #f8fafc;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.project-card h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.project-card p {
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #667eea;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.project-links a:hover {
  background: #667eea;
  color: white;
}

.experience-item {
  margin-bottom: 2rem;
}

.experience-item h4 {
  color: #2d3748;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
}

.company {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contact-button {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
