<script lang="ts" setup>
import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js';

import { FormContactSchema } from '../schemas';

const { send } = useEmailJS();
const { t } = useI18n();
const toast = useToast();

const formContact = reactive<FormContactSchema>({
  email: '',
  message: '',
  name: ''
});

const loadingSubmit = ref<boolean>(false);

const resetFormContact = (): void => {
  formContact.email = '';
  formContact.message = '';
  formContact.name = '';
};

const onSubmit = async (): Promise<void> => {
  loadingSubmit.value = true;

  const response: string = await send(formContact);
  const isSuccess: boolean = typeof response === 'string' && response.toLowerCase() === 'ok';

  const successMessage: Pick<Partial<Toast>, 'title' | 'description'> = {
    title: t('toast.send_message.title.success'),
    description: t('toast.send_message.description.success')
  };

  const failedMessage: Pick<Partial<Toast>, 'title' | 'description'> = {
    title: t('toast.send_message.title.failed'),
    description: t('toast.send_message.description.failed')
  };

  toast.add({
    title: isSuccess ? successMessage.title : failedMessage.title,
    description: isSuccess ? successMessage.description : failedMessage.description,
    ui: {
      progress: 'bg-help'
    }
  });

  if (isSuccess) {
    resetFormContact();
  }

  loadingSubmit.value = false;
};
</script>

<template>
  <div id="lets-talk" class="scroll-m-section-margin flex flex-col gap-5">
    <h1 class="section-title md:text-5xl">
      <span v-motion-fade-left class="inline-block">
        {{ $t('words.lets_create_something_amazing').split('\n')[0] }}
      </span>

      <br />

      <span v-motion-fade-right :delay="300" class="text-help-500 inline-block">
        {{ $t('words.lets_create_something_amazing').split('\n')[1] }}
      </span>
    </h1>

    <UForm
      :schema="FormContactSchema"
      :state="formContact"
      :validate-on="[]"
      :disabled="loadingSubmit"
      class="bg-card flex flex-col gap-5 rounded-2xl p-5"
      @submit.prevent="onSubmit"
    >
      <CustomFormField field="name" required>
        <CustomInput v-model="formContact.name" />
      </CustomFormField>

      <CustomFormField field="email" required>
        <CustomInput v-model="formContact.email" />
      </CustomFormField>

      <CustomFormField field="message">
        <CustomTextArea v-model="formContact.message" :rows="6" />
      </CustomFormField>

      <UButton
        :loading="loadingSubmit"
        type="submit"
        :label="$t('form.action.send')"
        :ui="{
          base: '!bg-help hover:bg-help-700 text-help-button-label h-10 justify-center rounded-xl p-0'
        }"
      />
    </UForm>
  </div>
</template>
