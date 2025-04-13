<script setup lang="ts">
import type { SectionRouteItem } from '@/shareds/layouts/public/types';

import Navbar from '@/shareds/layouts/public/components/Navbar.vue';
import Sidebar from '@/shareds/layouts/public/components/Sidebar.vue';

const { t } = useI18n();

const sectionRouteItems = computed<SectionRouteItem[]>(() => [
  {
    name: t('nav_items.home'),
    path: '/',
    icon: 'fluent:home-24-regular'
  },
  {
    name: t('nav_items.recent_projects'),
    path: '#recent-project',
    icon: 'fluent:web-asset-16-regular'
  },
  {
    name: t('nav_items.experience'),
    path: '#experience',
    icon: 'fluent:align-bottom-24-regular'
  },
  {
    name: t('nav_items.skills'),
    path: '#skills',
    icon: 'fluent:window-dev-tools-24-regular'
  },
  {
    name: t('nav_items.client_comments'),
    path: '#client-comments',
    icon: 'fluent:slide-text-person-24-regular'
  },
  {
    name: t('nav_items.lets_talk'),
    path: '#lets-talk',
    icon: 'fluent:chat-24-regular'
  }
]);
</script>

<template>
  <div>
    <Navbar :section-route-items class="hidden lg:block" />
    <Sidebar :section-route-items class="lg:hidden" />
    <slot />
  </div>
</template>

<style scoped></style>
