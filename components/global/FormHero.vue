<template>
<div style="background-color:#eadcc6">

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
        <div v-html="data.content.value" class="text-colors-primary-900"/>
      <!-- End Title -->

      <!-- Form -->
      <form>
        <div class="grid gap-4 lg:gap-6">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input type="text" placeholder="First Name" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm">
            </div>

            <div>
              <input type="text" placeholder="Last Name" name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <input type="email" placeholder="Email" name="hs-work-email-hire-us-2" id="hs-work-email-hire-us-2" autocomplete="email" class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm">
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input type="text" placeholder="Company" name="hs-company-hire-us-2" id="hs-company-hire-us-2" class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm">
            </div>

            <div>
              <input type="text" placeholder="Phone" name="hs-company-website-hire-us-2" id="hs-company-website-hire-us-2" class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm">
            </div>
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Grid -->

        <!-- Checkbox -->
        <div class="mt-3 flex">
          <div>
            <label for="remember-me" class="text-xs">By submitting this form I have read and acknowledged the <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">Privacy policy</a></label>
          </div>
        </div>
        <!-- End Checkbox -->

        <div class="mt-6 grid">
          <button type="submit" class="btn btn-primary-900">Submit</button>
        </div>
      </form>
    </div>
    <!-- End Col -->

    <div class="relative ml-4">
      <img class="w-full rounded-3xl"  :src="data.image.value[0].url" alt="Image Description">


    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hero -->
    
<!-- End Hero -->
</div>
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