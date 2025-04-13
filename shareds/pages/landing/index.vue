<script lang="ts" setup>
import ProfileCard from './components/ProfileCard.vue';
import Hero from './components/Hero.vue';
import RecentProjects from './components/RecentProjects.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import ClientComments from './components/ClientComments.vue';
import FormContact from './components/FormContact.vue';
</script>

<template>
  <div>
    <div
      class="container mx-auto my-10 max-w-7xl grid-cols-[minmax(0,_384px)_minmax(0,_1fr)] gap-20 px-5 lg:my-36 lg:grid"
    >
      <ProfileCard v-motion-fade-right class="sticky top-20 hidden lg:flex" />

      <div class="flex flex-col gap-10 lg:gap-28">
        <ProfileCard v-motion-fade-right class="lg:hidden" />
        <Hero />
        <RecentProjects />
        <Experience />
        <Skills />
        <ClientComments />
        <FormContact />
      </div>
    </div>
  </div>
</template>
