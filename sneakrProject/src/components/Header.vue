<script setup>
const emit = defineEmits(['openDrawer'])
defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-gray-100 px-8 py-8">
    <div class="flex items-center gap-4">
      <img class="w-10" src="/logo.png" alt="Логотип" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue sniakers</h2>
        <p class="text-slate-500">Магазин лучших кросовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-3">
      <li
        @click="emit('openDrawer')"
        class="flex items-center gap-3 text-black-700 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="cart" />
        <span> {{totalPrice}} руб.</span>
      </li>

      <li class="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
        <img src="/heart.svg" alt="cart" />
        <span> Закладки</span>
      </li>

      <li class="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
        <img src="/profile.svg" alt="cart" />
        <span> Профиль</span>
      </li>
    </ul>
  </header>
</template>
<style scoped></style>
