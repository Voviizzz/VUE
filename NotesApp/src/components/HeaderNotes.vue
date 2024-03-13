<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['toggleShow'])
</script>
<template>
  <div>
    <header>
      <h1>Notes</h1>
      <button class="btn" @click="() => emit('toggleShow')">+</button>
    </header>
  </div>
</template>
