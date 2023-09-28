<template>
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 bg-white border border-colors-primary-900 rounded-3xl">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 max-w-2xl mx-auto text-center">
          <h2 class="font-heading mb-6 text-4xl md:text-5xl text-colors-primary-900 font-bold tracking-tight">Partners and partnerships</h2>
          <p class="text-gray-500">Using the latest intelligent tech drives exceptional results for our customers. These powerful tools should be easy and simple to adopt and make the lives of our customers easier.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="lg:py-5 px-8 text-center h-full bg-gray-100 rounded-3xl">
              <div class="md:max-w-xs mx-auto">
                <h2 class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-colors-primary-900 font-black tracking-tight"><span>{{data.first_number.value}}</span></h2>
                <h3 class="font-heading mb-3.5 text-xl text-colors-primary-900 font-bold">{{data.first_blurb.value}}</h3>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="lg:py-5 px-8 text-center h-full bg-gray-100 rounded-3xl">
              <div class="md:max-w-xs mx-auto">
                <h2 class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-colors-primary-900 font-black tracking-tight"><span>{{data.second_number.value}}</span></h2>
                <h3 class="font-heading mb-3.5 text-xl text-colors-primary-900 font-bold">{{data.second_blurb.value}}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div class="text-center"><h3 class="text-colors-primary-900">Partner Locations</h3></div>
          <div class="text-center"><h3 class="text-colors-primary-900">Business Contacts</h3></div>
          <div class="text-center"><h3 class="text-colors-primary-900">Location Contact Mappings</h3></div>
          <div class="text-center"><h3 class="text-colors-primary-900">Verified Emails</h3></div>
          <div class="text-center"><h3 class="text-colors-primary-900">Verified Phone Numbers</h3></div>
          <div class="text-center"><h3 class="text-colors-primary-900">Omnichannel Linkages</h3></div>
          </div>
      </div>
    </div>
  </div>
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