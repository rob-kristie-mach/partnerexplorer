<template>
    <section class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto mb-10">
      <h2 class="mb-5 font-heading font-semibold text-center text-4xl sm:text-4xl">Partners and partnerships data stats</h2>
      <p class="text-base text-center text-gray-600">Using the latest intelligent tech drives exceptional results for our customers. These powerful tools should be easy and simple to adopt and make the lives of our customers easier.</p>
    </div>
    <div class="max-w-3xl mx-auto">
      <div class="flex flex-wrap justify-center -m-6 md:-m-16">
        <div class="w-full md:w-1/2 p-6 md:p-16">
          <h2 class="mb-3 font-heading font-bold sm:text-3xl md:text-4xl xl:text-6xl text-center">90,300+</h2>
          <h3 class="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">Businesses</h3>
       
        </div>
        <div class="w-full md:w-1/2 p-6 md:p-16">
          <h2 class="mb-3 font-heading font-bold sm:text-3xl md:text-4xl xl:text-6xl text-center">300,000+</h2>
          <h3 class="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">Partnerships</h3>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 mx-auto mt-10">
      <div class="text-center text-xl font-medium">Partner locations</div>
      <div class="text-center text-xl font-medium">Business contacts</div>
      <div class="text-center text-xl font-medium">Location contact mappings</div>
      <div class="text-center text-xl font-medium">Verified emails</div>
      <div class="text-center text-xl font-medium">Verified phone numbers</div>
      <div class="text-center text-xl font-medium">Omnichannel linkages</div>
    </div>
  </div> 
</section> 
</template>

<script>
export default {
  name: 'SidebysideStats',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>