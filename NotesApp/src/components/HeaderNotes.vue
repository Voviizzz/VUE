<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['toggleShow'])
const toggleShow = () => {
  emit('toggleShow')
}
</script>
<template>
  <div>
    <header>
      <h1>Notes</h1>
      <button class="btn" @click="toggleShow">+</button>
    </header>
  </div>
</template>
