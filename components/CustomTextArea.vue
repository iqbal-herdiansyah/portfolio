<script setup lang="ts">
import type { TextareaProps } from '@nuxt/ui/runtime/types/index.js';

defineProps<TextareaProps>();

const placeholder = inject('placeholder') as string;
</script>

<template>
  <UTextarea
    v-bind="$props"
    :ui="{
      base: 'bg-input ring-input focus-visible:ring-help placeholder:text-secondary rounded-xl p-3 text-sm ring-1 outline-0'
    }"
    :placeholder="$props.placeholder ?? placeholder"
  />
</template>

<style scoped></style>
