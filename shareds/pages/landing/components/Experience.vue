<script lang="ts" setup>
const dayjs = useDayjs();
const { data: profile, experiences } = useProfile();

const formatCompanyPeriod = (date: string | null): string => {
  const isValidDate: boolean = dayjs(date).isValid();
  const format: string = 'MMM YYYY';
  const dateFormatted: string = isValidDate ? dayjs(date).format(format) : 'Present';

  return dateFormatted;
};
</script>

<template>
  <div id="experience" class="scroll-m-section-margin flex flex-col gap-5">
    <h1 class="section-title">
      <span v-motion-fade-left class="inline-block">
        {{ profile.about.years_of_experience }}
        {{ $t('words.years_of_experience').split('\n')[0] }}
      </span>

      <br />

      <span v-motion-fade-right :delay="300" class="text-help-500 inline-block">
        {{ $t('words.years_of_experience').split('\n')[1] }}
      </span>
    </h1>

    <div>
      <ClientOnly>
        <UStepper
          orientation="vertical"
          :items="experiences"
          :ui="{
            item: 'h-28 gap-5 [&>div:nth-child(2)]:mt-1',
            trigger: 'overflow-hidden'
          }"
          class="w-full"
        >
          <template #title="{ item }">
            <p class="text-primary text-xl font-semibold md:text-2xl">
              {{ item.company.name }}
            </p>
          </template>

          <template #description="{ item }">
            <div class="text-secondary flex flex-col gap-3">
              <p class="text-base md:text-lg">{{ item.position }}</p>
              <p class="text-sm md:text-base">
                {{ formatCompanyPeriod(item.time_period.start) }} -
                {{ formatCompanyPeriod(item.time_period.end) }}
              </p>
            </div>
          </template>

          <template #indicator="{ item }">
            <img :src="item.company.image" class="size-full" />
          </template>
        </UStepper>
      </ClientOnly>
    </div>
  </div>
</template>
