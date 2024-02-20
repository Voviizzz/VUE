<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
})
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <img heigh="70" width="70" :src="imageUrl" alt="cart info image" />
    <h2 class="text-2xl mt-4 font-bold">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
