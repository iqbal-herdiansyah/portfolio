<script lang="ts" setup>
const { recent_projects } = useProfile();
</script>

<template>
  <div id="recent-project" class="scroll-m-section-margin flex flex-col gap-5">
    <h1 class="section-title">
      <span v-motion-fade-left class="inline-block">
        {{ $t('words.recent_projects').split('\n')[0] }}
      </span>

      <br />

      <span v-motion-fade-right :delay="300" class="text-help-500 inline-block">
        {{ $t('words.recent_projects').split('\n')[1] }}
      </span>
    </h1>

    <MotionGroup is="div" :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :delay="300">
      <NuxtLink
        v-for="(project, index) in recent_projects"
        :key="index"
        target="_blank"
        :to="project.url"
        class="hover:bg-card group relative grid grid-cols-[minmax(0,_min-content)_minmax(0,_1fr)] gap-5 rounded-2xl px-4 py-5 transition-colors duration-400"
      >
        <div class="size-20 overflow-hidden rounded-lg md:size-32">
          <img :src="project.images.preview" class="size-full object-cover" />
        </div>

        <div class="relative flex h-full flex-1 flex-col justify-center gap-5">
          <p class="text-lg font-semibold md:text-2xl">{{ project.name }}</p>

          <div class="absolute bottom-0 flex gap-3">
            <div v-for="(tool, toolIndex) in project.tools" :key="toolIndex">
              <img :src="tool.path" class="size-5 md:size-6" />
            </div>
          </div>
        </div>

        <Icon
          name="ph:arrow-right"
          :size="28"
          class="text-help absolute top-0 right-0 !size-5 -translate-x-5 translate-y-5 -rotate-45 transition-all group-hover:-translate-x-2 group-hover:translate-y-2 md:!size-[28px]"
        />
      </NuxtLink>
    </MotionGroup>
  </div>
</template>
