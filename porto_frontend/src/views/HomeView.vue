<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import GitHubContribution from '../components/GitHubContribution.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>

<template>
  <main>
    <!-- Hero: no reveal, immediately visible -->
    <HeroSection />

    <!-- About: slide in from left -->
    <div v-reveal="'fade-left'">
      <AboutSection />
    </div>

    <!-- Skills: zoom up -->
    <div v-reveal="'zoom-up'">
      <SkillsSection />
    </div>

    <!-- Projects: flip up -->
    <div v-reveal="'flip-up'">
      <ProjectsSection />
    </div>

    <!-- GitHub Activity: fade up -->
    <div v-reveal="'fade-up'">
      <GitHubContribution />
    </div>

    <!-- Experience: slide in from right -->
    <div v-reveal="'fade-right'">
      <ExperienceSection />
    </div>

    <!-- Contact: fade up -->
    <div v-reveal="'fade-up'">
      <ContactSection />
    </div>
  </main>
</template>
