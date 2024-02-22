<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import CardList from '@/components/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://508e167b46cfab68.mokky.dev/favorites')
    favorites.value = data.map((obj) => obj.item)
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <div>
    <CardList :items="favorites" @addToCart="onClickAddPLus" @clickToFav="clickToFav" />
  </div>
</template>
