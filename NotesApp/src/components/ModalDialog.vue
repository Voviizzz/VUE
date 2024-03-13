<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  text: String
})
console.log(props)
// const emit = defineEmits(['addItems'])
</script>
<template>
  <div class="overlay">
    <div class="modal">
      <button class="btn btn-close" @click="$emit('toggleShow')">x</button>
      <input class="input-title" type="text" placeholder="Введите заголовок" :title="title" />
      <textarea name="note" id="note" cols="30" rows="10" :text="text"></textarea>
      <button class="btn btn-add" @click="console.log('ss', title, text)">Add-note</button>
    </div>
  </div>
</template>
