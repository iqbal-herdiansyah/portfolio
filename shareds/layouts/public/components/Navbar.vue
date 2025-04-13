<script lang="ts" setup>
import type { NavbarProps } from '../types';

defineProps<NavbarProps>();

const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="bg-card fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-lg px-5 py-2 shadow">
    <div class="flex items-center gap-3">
      <ul class="flex items-center gap-1">
        <li v-for="(item, index) in sectionRouteItems" :key="index">
          <ButtonScale
            type="router-link"
            :to="item.path"
            :text="item.name"
            class="hover:text-help-button-label"
          >
            <Icon :name="item.icon" :size="20" />
          </ButtonScale>
        </li>
      </ul>

      <ClientOnly>
        <USeparator orientation="vertical" :ui="{ border: 'border-secondary' }" class="h-4" />

        <ButtonScale
          :text="$colorMode.preference === 'dark' ? t('words.light_mode') : t('words.dark_mode')"
          class="hover:text-help-button-label"
          @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
        >
          <Icon :name="$colorMode.preference === 'dark' ? 'ph:sun' : 'ph:moon'" :size="20" />
        </ButtonScale>
      </ClientOnly>

      <USeparator orientation="vertical" :ui="{ border: 'border-secondary' }" class="h-4" />

      <ButtonScale
        :text="locale === 'en' ? 'Indonesia' : 'English'"
        @click="(setLocale(locale === 'id' ? 'en' : 'id'), $dayjs.locale('id'))"
      >
        <Icon
          :name="locale === 'en' ? 'twemoji:flag-indonesia' : 'twemoji:flag-england'"
          :size="24"
        />
      </ButtonScale>
    </div>
  </div>
</template>
