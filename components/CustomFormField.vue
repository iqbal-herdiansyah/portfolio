<script setup lang="ts">
import type { FormFieldProps } from '@nuxt/ui/runtime/types/index.js';

interface CustomFormFieldInterface extends FormFieldProps {
  field?: string;
}

interface LocaleField {
  model: string;
  label: string;
  placeholder: string;
}

const props = defineProps<CustomFormFieldInterface>();

const { t } = useI18n();

const locale = computed<LocaleField>(() => ({
  label: t(`form.${props.field}.label`),
  model: t(`form.${props.field}.model`),
  placeholder: t(`form.${props.field}.placeholder`)
}));

const isUseLocale = computed<boolean>(() => (props.field && props.field.length >= 1) as boolean);

provide(
  'placeholder',
  computed(() => locale.value.placeholder)
);
</script>

<template>
  <UFormField
    v-bind="$props"
    :ui="{
      root: 'flex flex-col gap-2.5',
      container: 'mt-0 [&>div]:w-full',
      label: 'text-secondary'
    }"
    :label="isUseLocale ? locale.label : $props.label"
    :name="isUseLocale ? locale.model : $props.name"
  >
    <slot />
  </UFormField>
</template>

<style scoped></style>
