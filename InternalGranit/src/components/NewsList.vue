<script setup>
import { defineProps } from 'vue'
import NewsListItem from './NewsListItem.vue'

const props = defineProps({
  newsList: Array
})

</script>
<template>
  <div class="news__list">
    <NewsListItem v-for="item in props.newsList" :key="item.id" :item="item" />
  </div>

</template>
