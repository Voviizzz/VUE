<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  total: Number
})
</script>
<template>
  <div class="container">
    <h4>Your Balance</h4>
    <h1 id="balance">$ {{ props.total }}</h1>
  </div>
</template>
