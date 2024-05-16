<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: Object
})
</script>
<template>
  <div>
    <div class="first:mt-16 bg-white mb-8 py-5 px-5 rounded-xl">
      <span class="news__item-dep font-lato text-base text-sidebar">
        {{ props.item.departament }}</span
      >
      <span class="news__item-date float-right pt-2 text-x text-[#848484]">{{
        props.item.date
      }}</span>
      <div class="news__item-title font-ruso text-xl text-[#494747]">
        {{ props.item.newsTitle }}
      </div>
      <p class="news__item-text text-[#494747] text-lg">
        {{ props.item.newsText }}
      </p>
    </div>
  </div>
</template>
