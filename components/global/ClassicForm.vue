<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid grid-cols-8 gap-4">
    <div class="col-span-8 lg:col-start-3 lg:col-span-4">
      <!-- End Title -->
      <h3 class="text-center font-bold pb-5">Join Our Waitlist Today</h3>
      <!-- Form -->
      <form action='https://forms.zohopublic.in/machintelsystemspvtltd/form/PartnerExplorer/formperma/VIy1Vh04wirJ5DC7U-fxWiYqffHAGiV_D_oJK8H-uTQ/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
        <input type="hidden" name="zf_referrer_name" value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
<input type="hidden" name="zf_redirect_url" value=""><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
<input type="hidden" name="zc_gad" value=""><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
        <div class="grid gap-4 lg:gap-6">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input type="text" placeholder="First Name" name="Name_First" fieldType=7 class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
            </div>

            <div>
              <input type="text" placeholder="Last Name" name="Name_Last" fieldType=7 class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <input type="email" placeholder="Email" nname="Email" value="" fieldType=9 class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input type="text" placeholder="Company" name="SingleLine" value="" fieldType=1 class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
            </div>

            <div>
              <input type="text" placeholder="Phone" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled=false class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
            </div>
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Grid -->

        <!-- Checkbox -->
        <div class="mt-3 flex">
          <div>
            <label for="remember-me" class="text-xs">By submitting this form I have read and acknowledged the <a class="text-blue-600 decoration-2 underline font-medium" href="https://machintel.com/privacy-policy" target="_blank">Privacy policy</a></label>
          </div>
        </div>
        <!-- End Checkbox -->

        <div class="mt-6 grid">
          <button type="submit" class="btn btn-primary-900">Submit</button>
        </div>
      </form>
    </div>
    <!-- End Col -->
    </div>
</div>
</template>

<script>
    export default {
      name: 'ClassicForm',
      props: {
        data: {
          type: Object,
          required: true,
        },
      },
    };
    </script>