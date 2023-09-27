<template>
    <!-- Clients -->
<div class="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="mb-6 text-center">
    <div v-html="data.intro.value"/>
  </div>
  <!-- End Title -->

  <div class="grid grid-cols-12 gap-x-6">
    <div v-for="(item,logo) in data.logos.value" :key="logo" class="col-span-3 mt-10">
        <img :src="item.url" :alt="item.description" class="mx-auto h-full"/>
    </div>
  </div>
</div>
<!-- End Clients -->
</template>

<script>
export default {
  name: 'FormHero',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>