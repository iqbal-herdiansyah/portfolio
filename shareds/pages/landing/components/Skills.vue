<script lang="ts" setup>
const { skills } = useProfile();
</script>

<template>
  <div id="skills" class="scroll-m-section-margin flex flex-col gap-5">
    <h1 class="section-title">
      <span v-motion-fade-left class="inline-block">
        {{ $t('words.programming_skills').split('\n')[0] }}
      </span>

      <br />

      <span v-motion-fade-right :delay="300" class="text-help-500 inline-block">
        {{ $t('words.programming_skills').split('\n')[1] }}
      </span>
    </h1>

    <MotionGroup
      is="div"
      :initial="{ opacity: 0, translate: '0px, 50px' }"
      :visible-once="{ opacity: 1, translate: '0px, 0px' }"
      class="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="bg-card flex w-full gap-2 rounded-md p-4 md:gap-4 md:rounded-[10px]"
      >
        <div
          class="bg-background dark:bg-primary flex size-7 items-center justify-center overflow-hidden rounded-lg md:size-12"
        >
          <img :src="skill.image" class="size-1/2 object-cover" />
        </div>

        <div class="flex flex-col justify-center">
          <p class="text-sm md:text-xl">{{ skill.title }}</p>
        </div>
      </div>
    </MotionGroup>
  </div>
</template>
