<template>
    <div class="border-colors-grey border-2 shadow-md bg-colors-grey p-3 my-3">
      <div class="grid grid-cols-4 gap-4 text-base justify-center items-center">
        <div class="col-span-3"><p class="antialiased">{{ content }}</p></div>
        <div><a class="btn btn-primary text-xs" :href="button_link">{{ button_text }}</a></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['content', 'button_text', 'button_link']);
  </script>
  