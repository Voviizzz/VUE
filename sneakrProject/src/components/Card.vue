<script setup>
// import { inject } from 'vue'

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavourite: Boolean,
  isAdded: Boolean,
  clickToFav: Function,
  addToCart: Function
})
// const clickToFav = inject('clickToFav')

</script>
<template>
  <div
    class="relative border border-slate-200 rounded-3xl p-8 cursor-pointer hover: transform hover:scale-105 transition hover:shadow-xl"
  >
    <img
    v-if="clickToFav"
      @click="clickToFav"
      :src="!isFavourite ? '/like-1.svg' : '/like-2.svg'"
      alt="like"
      class="absolute top-8 left-8"
    />

    <img :src="imageUrl" alt="Sneaker" />
    <p>{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена</span>
        <b>{{ price }} руб.</b>
      </div>
      <img @click="addToCart" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" />
    </div>
  </div>
</template>
