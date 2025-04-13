<script lang="ts" setup>
const profile = useProfile();
</script>

<template>
  <div class="bg-card flex h-fit w-full flex-col items-center gap-6 rounded-2xl px-5 py-10">
    <div class="aspect-square size-60 overflow-hidden rounded-2xl">
      <img :src="profile.data.images.profile_path" class="size-full object-cover" />
    </div>

    <div class="flex flex-col gap-6 lg:gap-10">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 text-center">
          <p class="text-3xl font-bold md:text-4xl">{{ profile.data.name }}</p>
          <p class="text-secondary text-base md:text-lg">{{ profile.data.title }}</p>
          <p class="text-secondary text-base md:text-lg">
            {{ profile.getSelectedLocation(['city', 'province', 'country']) }}
          </p>
        </div>

        <div class="flex justify-center gap-4">
          <ButtonScale
            v-for="(socialMedia, index) in profile.data.social_media"
            :key="index"
            type="router-link"
            :text="socialMedia.name"
            :to="socialMedia.url"
            target="_blank"
            class="hover:text-white"
          >
            <Icon :name="socialMedia.icon" :size="24" />
          </ButtonScale>
        </div>
      </div>

      <RouterLink
        to="#lets-talk"
        type="button"
        class="bg-help hover:bg-help-700 text-help-button-label mx-auto flex h-11 w-44 cursor-pointer items-center justify-center rounded-lg"
      >
        {{ $t('words.lets_talk') }}
      </RouterLink>
    </div>
  </div>
</template>
