<script setup>
import { inject } from 'vue'

const { closeDrawer } = inject('cart')
</script>
<template>
  <div class="flex items-center gap-5 mb-5">
    <img
      @click="() => closeDrawer()"
      class="opacity-50 cursor-pointer rotate-180 hover:opacity-100 transition:opacity-100 hover:-translate-x-1 transition"
      src="/arrow-next.svg"
      alt=""
    />
    <h2 class="text-2xl font-bold">Корзина</h2>
  </div>
</template>
