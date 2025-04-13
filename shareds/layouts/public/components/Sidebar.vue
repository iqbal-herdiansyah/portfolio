<script lang="ts" setup>
import type { Locale, TabsItem } from '@nuxt/ui/runtime/types/index.js';
import type { SidebarProps } from '../types';

defineProps<SidebarProps>();

const router = useRouter();
const { width: windowWidth } = useWindowSize();
const { t, locale, setLocale } = useI18n();

const isOpenSidebar = ref<boolean>(false);

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    isOpenSidebar.value = false;
  }
);

watch(windowWidth, (width) => {
  if (width >= 1024) isOpenSidebar.value = false;
});

const colorModeItems = computed<TabsItem[]>(() => [
  {
    label: t('words.light_mode'),
    icon: 'ph:sun',
    value: 'light'
  },
  {
    label: t('words.dark_mode'),
    icon: 'ph:moon',
    value: 'dark'
  }
]);

const localeItems = computed<TabsItem[]>(() => [
  {
    label: 'Indonesia',
    icon: 'twemoji:flag-indonesia',
    value: 'id'
  },
  {
    label: 'English',
    icon: 'twemoji:flag-england',
    value: 'en'
  }
]);

const localeModel = computed({
  get: () => locale.value,
  set: (value: string) => {
    setLocale(value as 'id' | 'en');
  }
});
</script>

<template>
  <USlideover
    v-model:open="isOpenSidebar"
    :title="t('words.options')"
    description="settings"
    :close="{
      ui: {
        base: 'bg-help rounded-full size-8 flex items-center justify-center hover:bg-help-700 text-white'
      }
    }"
    :ui="{ content: 'bg-background', title: 'text-xl font-semibold', description: 'hidden' }"
  >
    <button
      :class="
        twMerge(
          'bg-help fixed right-5 bottom-10 z-50 flex size-12 items-center justify-center rounded-full text-white',
          $props.class
        )
      "
    >
      <Icon name="fluent:text-align-justify-20-filled" :size="28" />
    </button>

    <template #body>
      <div class="flex flex-col gap-5">
        <ul class="flex flex-col gap-2">
          <li v-for="(item, index) in sectionRouteItems" :key="index">
            <RouterLink :to="item.path" class="text-primary flex items-center gap-2">
              <Icon :name="item.icon" :size="24" />
              <span class="text-lg">{{ item.name }}</span>
            </RouterLink>
          </li>
        </ul>

        <ClientOnly>
          <USeparator />

          <UTabs
            v-model="$colorMode.preference"
            :items="colorModeItems"
            :ui="{
              label: 'text-base',
              leadingIcon: '!size-5',
              trigger: `text-primary [&[data-state='active']]:dark:text-white`,
              indicator: 'bg-help'
            }"
          />
        </ClientOnly>

        <UTabs
          v-model="localeModel"
          :items="localeItems"
          :ui="{
            label: 'text-base',
            leadingIcon: '!size-5',
            trigger: `text-primary [&[data-state='active']]:dark:text-white`,
            indicator: 'bg-help'
          }"
        />
      </div>
    </template>
  </USlideover>
</template>
