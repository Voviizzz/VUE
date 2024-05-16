<script setup>
import CloseSquare from '../assets/images/icons/CloseSquare.svg'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  card: {
    type: Object
  }
})

const emit = defineEmits(['removeTask'])
const removeTask = (card) => {
  emit('removeTask', card.id)
}
</script>
<template>
  <div>
    <span class="btn-delete"><img @click="removeTask" :src="CloseSquare" alt="" /></span>
    <div class="main-text">
      <h1>{{ card.title }}</h1>
      <p>{{ card.text }}</p>
    </div>
    <p class="date">{{ props.date }}</p>
  </div>
</template>
