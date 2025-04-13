<script lang="ts" setup>
const { client_comments } = useProfile();
</script>

<template>
  <div id="client-comments" class="scroll-m-section-margin flex flex-col gap-5">
    <h1 class="section-title md:text-5xl">
      <span v-motion-fade-left class="inline-block">
        {{ $t('words.what_clients_say').split('\n')[0] }}
      </span>

      <br />

      <span v-motion-fade-right :delay="300" class="text-help-500 inline-block">
        {{ $t('words.what_clients_say').split('\n')[1] }}
      </span>
    </h1>

    <div>
      <UCarousel
        v-slot="{ item: client }"
        autoplay
        loop
        arrows
        :prev="{
          ui: { base: 'bg-help ring-help-700 text-help-button-label hidden lg:inline-flex' }
        }"
        :next="{
          ui: { base: 'bg-help ring-help-700 text-help-button-label hidden lg:inline-flex' }
        }"
        :items="client_comments"
        class="mx-auto w-full"
      >
        <div class="bg-card flex flex-col gap-5 rounded-xl p-5">
          <div class="flex items-center gap-5">
            <div class="size-10 overflow-hidden rounded-full md:size-16">
              <img :src="client.images.profile" class="size-full object-cover" />
            </div>

            <div class="flex-1">
              <p class="line-clamp-1 text-lg font-medium md:text-xl">{{ client.name }}</p>
              <p class="text-secondary line-clamp-2 text-sm md:text-base">
                {{ client.roles.join(' | ') }}
              </p>
            </div>
          </div>

          <p class="text-secondary text-sm md:text-lg">{{ client.comment }}</p>
        </div>
      </UCarousel>
    </div>
  </div>
</template>
