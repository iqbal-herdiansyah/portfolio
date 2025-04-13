<script setup lang="ts">
import type { InputProps } from '@nuxt/ui/runtime/types/index.js';

defineProps<InputProps>();

const placeholder = inject('placeholder') as string;
</script>

<template>
  <UInput
    v-bind="$props"
    :ui="{
      base: 'bg-input ring-input focus-visible:ring-help placeholder:text-secondary rounded-xl p-3 text-sm ring-1 outline-0'
    }"
    :placeholder="$props.placeholder ?? placeholder"
  />
</template>

<style scoped></style>
