<template>
    <div class="classic-hero" :style ="{backgroundImage: 'linear-gradient(rgba(24, 120, 142, 0.8), rgba(24, 120, 142, 0.8)), url(' + data.background_image.value[0].url + ')'}">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
    </div>
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl lg:leading-snug md:leading-snug">
        {{data.heading.value}}
      </h1>
    </div>
    <!-- End Title -->

    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p v-html="data.sub_heading.value" class="text-lg text-gray-600 dark:text-gray-400"></p>
    </div>

    <!-- Buttons -->
    <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
      <a class="inline-flex justify-center items-center gap-x-3 text-center btn-primary-900 text-sm font-medium rounded-full px-4 py-3" :href="data.left_button_link.value">
        {{data.left_button_text.value}}
      </a>
    </div>
    <!-- End Buttons -->
  </div>

    </div>
</template>

<script>
export default {
  name: 'ClassicHero',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

