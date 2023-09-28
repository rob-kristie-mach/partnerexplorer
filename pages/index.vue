<template>
  <div class="home-page">
    
    <!-- Render components dynamically based on linkedItems
    <div v-for="item in linkedItems" :key="item.system.codename">
      <component :is="componentName(item)" :data="item" :nestedComponents="getNestedComponents(item)" />
      
    </div> -->
    <!-- Hero -->
<div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
    </div>
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl lg:leading-snug md:leading-snug">
        Where you go for partner intelligence
      </h1>
    </div>
    <!-- End Title -->

    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600 dark:text-gray-400">Explore the world’s largest network of partner and channel ecosystems to discover new opportunities for growth.</p>
    </div>

    <!-- Buttons -->
    <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
        
        Join Waitlist
      </a>
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
        
        Contact Us
      </a>
    </div>
    <!-- End Buttons -->
  </div>
</div>
<!-- End Hero -->
<!-- Begin Stats-->
<div class="container mx-auto px-4">
    <div class="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 max-w-2xl mx-auto text-center">
          <h2 class="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">Partners and partnerships</h2>
          <p class="text-gray-500">Using the latest intelligent tech drives exceptional results for our customers. These powerful tools should be easy and simple to adopt and make the lives of our customers easier.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="lg:py-5 px-8 text-center h-full bg-gray-100 rounded-3xl">
              <div class="md:max-w-xs mx-auto">
                <h2 class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight"><span class="text-transparent bg-clip-text bg-gradient-green-dark">90,300+</span></h2>
                <h3 class="font-heading mb-3.5 text-xl text-gray-900 font-bold">Businesses</h3>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="lg:py-5 px-8 text-center h-full bg-gray-100 rounded-3xl">
              <div class="md:max-w-xs mx-auto">
                <h2 class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight"><span class="text-transparent bg-clip-text bg-gradient-orange">300,000+</span></h2>
                <h3 class="font-heading mb-3.5 text-xl text-gray-900 font-bold">Partnerships</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div class="text-center">Partner Locations</div>
          <div class="text-center">Business Contacts</div>
          <div class="text-center">Location Contact Mappings</div>
          <div class="text-center">Verified Emails</div>
          <div class="text-center">Verified Phone Numbers</div>
          <div class="text-center">Omnichannel Linkages</div>
          </div>
      </div>
    </div>
  </div>
  

  


<!-- End Stats-->

<div class="container px-4 mx-auto my-20">
    <h2 class="mb-5 text-3xl md:text-4xl font-bold font-heading text-center tracking-px-n leading-tight">Trusted By</h2>
    <p class="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-xl mx-auto">Our awesome customers we've had the pleasure to work with!</p>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap items-center -m-6 lg:-m-14">
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/a393aa72-ee06-48a9-8e33-8111e61629cb/salesforce.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/d0cda79f-ae11-44e4-81c6-059dec180b8e/sp-global.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/ea7b7dc3-1925-42e7-807a-93a0ac6731e3/aws.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/bce0c586-6986-445e-9bf7-b26b15a4914a/reelaxis.svg" alt="">
        </div>
      </div>
    </div>
    <div class="mb-16 max-w-5xl mx-auto">
      <div class="flex flex-wrap items-center -m-6 lg:-m-11">
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-11">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/8c20fe3b-d8e8-448f-a8c9-fd25fb93fc51/oracle.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-11">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/673338af-901d-4cc5-a9c3-79b1bbc92a4c/microsoft.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-11">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/46185a8e-9707-4060-aafd-14615fe99b3d/broadcom.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-11">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/1a43ed88-f6fa-45dd-9c46-56cbf618cd67/adobe.svg" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-[85rem] px-4 sm:px-6 mx-auto py-20">
      <div class="grid grid-cols-10 gap-4 text-center">
          <div class="col-start-2 col-span-8"><h2 class="mb-5 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight">Enterprises leverage Machintel’s Intelligent Partner Explorer (IPE)</h2><p>to uncover intelligence about businesses in their ecosystem and discover new insights and strategies to spur growth.Machintel’s IPE, powered by advanced, intelligent technology, is globally recognized as the world’s most comprehensive identity graph, detailing companies and their alliances, and allowing you to find opportunities that remain invisible to others.</p></div>
         
          </div>
    </div>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
  <!-- Grid -->
  <div class="grid grid-cols-8 gap-4">
    <div class="col-start-3 col-span-4">
      <!-- End Title -->
      <h3 class="text-center font-bold pb-5">Join Waitlist Today</h3>
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
    </div>
    </div>
  </div>
</template>

<script>
import { DeliveryClient } from '@kentico/kontent-delivery';
import { getButtonColor } from '/utils/dynamicOptions'

export default {

  
  async asyncData({ params }) {
    const deliveryClient = new DeliveryClient({
      projectId: '814ddc4f-9d27-004b-4203-5fb88ed20501', // Replace with your actual Kontent project ID
    });

    try {
      const response = await deliveryClient.item('partner_explorer_home') // Replace with your actual Kontent item codename
        .toPromise();

      return { pageData: response.data.item };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { pageData: {} };
    }
  },
  // Import and resolve components dynamically
  computed: {
    linkedItems() {
      return this.pageData.elements.components.linkedItems;
    },
  },
  methods: {
    // Get the component name based on the system.type
    componentName(item) {
      const type = item.system.type;
      const componentName = type
        .replace(/__/g, '-') // Replace '__' with '-'
        .split('-') // Split by '-'
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(''); // Join words without '-'

      return componentName;
    },

    // Get nested components for a given item
    getNestedComponents(item) {
  const richTextElement = item.elements.components;
  if (!richTextElement || !richTextElement.linkedItems) {
    return []; // Return an empty array if there are no nested components
  }

  const nestedComponents = richTextElement.linkedItems;
  return nestedComponents.map((component) => ({
    componentType: component.system.type,
    componentCodename: component.system.codename,
    data: component.elements,
  }));
},
  },

  head() {
    return {
      title: this.pageData.elements.meta_title.value,
      meta: [
        {
          name: "description",
          property:"description",
          content: this.pageData.elements.meta_description.value,
        },
        {
          property: "og:title",
          content: this.pageData.elements.og_title.value,
        },
        {
          property: "og:description",
          content: this.pageData.elements.og_title.value,
        },
    ]

    }
  }

};
</script>