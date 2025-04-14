<script lang="ts" setup>
import type { SuperiorityItem } from '../types';

const { t } = useI18n();
const { data: profile } = useProfile();

const superiorityItems = computed<SuperiorityItem[]>(() => [
  {
    title: `+${profile.about.years_of_experience}`,
    description: t('profile.superiority.years_of_experience')
  },
  {
    title: `+${profile.about.projects_completed}`,
    description: t('profile.superiority.projects_completed')
  }
]);

const downloadCV = (): void => {
  const element: HTMLAnchorElement = document.createElement('a');
  element.href = '/cv/cv.pdf';
  element.download = 'iqbal-herdiansyah-cv.pdf';
  element.click();
};
</script>

<template>
  <div v-motion-fade-down>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2.5">
        <h1
          class="text-center text-5xl leading-14 font-semibold md:text-7xl lg:text-start lg:leading-none"
        >
          Frontend
          <span class="text-help-500">Developer</span>
        </h1>

        <p class="text-secondary text-center text-base md:text-lg lg:text-start">
          {{ $t('profile.about') }}
        </p>
      </div>

      <div class="flex justify-center gap-13 lg:justify-start lg:gap-14">
        <div
          v-for="(superiority, index) in superiorityItems"
          :key="index"
          class="flex flex-col gap-1 lg:w-40 lg:gap-0"
        >
          <p class="text-center text-5xl font-semibold md:text-7xl lg:text-start">
            {{ superiority.title }}
          </p>
          <p class="text-secondary max-w-40 text-center text-base uppercase lg:text-start">
            {{ superiority.description.split('\n')[0] }}
            <br />
            {{ superiority.description.split('\n')[1] }}
          </p>
        </div>
      </div>

      <div class="flex flex-col-reverse items-center gap-4 md:mx-auto md:flex-row lg:mx-0">
        <button
          type="button"
          class="bg-help hover:bg-help-700 text-help-button-label flex h-11 w-44 cursor-pointer items-center justify-center rounded-lg"
          @click="downloadCV"
        >
          {{ $t('words.cv_download') }}
        </button>

        <RouterLink to="#recent-project" type="button" class="flex items-center gap-1">
          {{ $t('words.my_work') }}
          <Icon name="ph:arrow-right" :size="20" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
