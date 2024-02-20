<script setup>
// import { inject } from 'vue'

import Card from './Card.vue'

// const onClickFavourite = () => {
//   item.isFavourite = true
// }

defineProps({
  items: Array
})

//Для работы с прокидывающимеся пропсами
const emit = defineEmits( ['addToCart'], ['onclickToFav'])

//вытаскиеваем функцию addToFavorite из родительского компонента
// const addToFavorite = inject('addToFavorite')
</script>
<template>
  <div class="mt-3 grid grid-cols-4 gap-8" v-auto-animate>
    <!-- передаем props в компонент Card -->
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :addToCart="() => emit('addToCart', item)"
      :clickToFav="() => emit('clickToFav', item)"
      :is-added="item.isAdded"
      :is-favourite="item.isFavorite"
    />
  </div>
</template>
