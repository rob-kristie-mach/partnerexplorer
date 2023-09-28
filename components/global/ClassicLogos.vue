<template>
<div class="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="mb-5 text-3xl md:text-4xl font-bold font-heading text-center tracking-px-n leading-tight text-colors-primary-900">Trusted By</h2>
    <p class="mb-10 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-xl mx-auto">Our awesome customers we've had the pleasure to work with!</p>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap items-center -m-6 lg:-m-14">
        
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/d0cda79f-ae11-44e4-81c6-059dec180b8e/sp-global.svg" alt="">
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 p-6 lg:p-14">
          <img class="mx-auto" src="https://assets-us-01.kc-usercontent.com:443/814ddc4f-9d27-004b-4203-5fb88ed20501/a393aa72-ee06-48a9-8e33-8111e61629cb/salesforce.svg" alt="">
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
</template>

<script>
export default {
  name: 'ClassicLogos',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
