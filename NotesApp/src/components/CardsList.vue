<script setup>
import { defineProps, defineEmits } from 'vue'
import Card from './Card.vue'
const props = defineProps({
  cards: {
    type: Array
  }
})
const emit = defineEmits(['removeTask'])
console.log(props.cards)
</script>
<template>
  <div class="cards-container">
    <Card
      class="card"
      v-for="card in props.cards"
      :key="card.id"
      :card="card"
      @remove-task="emit('removeTask', card.id)"
    />
  </div>
</template>
