<script setup lang="ts">
interface ButtonScaleProps {
  type?: 'button' | 'router-link';
  text?: string;
  class?: string;
}

withDefaults(defineProps<ButtonScaleProps>(), {
  type: 'button',
  text: undefined,
  class: ''
});
</script>

<template>
  <UTooltip :text :delay-duration="0" :ui="{ content: !text ? 'hidden' : '' }">
    <button
      v-if="type === 'button'"
      type="button"
      :class="
        twMerge('group relative flex aspect-square items-center justify-center p-1.5', $props.class)
      "
    >
      <div
        class="bg-help absolute -z-10 size-full scale-0 rounded-md transition-all group-hover:scale-100"
      ></div>

      <slot />
    </button>

    <NuxtLink
      v-else
      :class="
        twMerge('group relative flex aspect-square items-center justify-center p-1.5', $props.class)
      "
    >
      <div
        class="bg-help absolute size-full scale-0 rounded-md transition-all group-hover:scale-100"
      ></div>

      <slot />
    </NuxtLink>
  </UTooltip>
</template>
