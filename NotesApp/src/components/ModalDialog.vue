<script setup>
import { defineEmits, ref } from 'vue'

const title = ref('')
const text = ref('')

const emit = defineEmits(['addItems', 'toggleShow'])
</script>
<template>
  <div class="overlay">
    <div class="modal">
      <button class="btn btn-close" @click="() => emit('toggleShow', title)">x</button>
      <input class="input-title" type="text" placeholder="Введите заголовок" v-model="title" />
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        placeholder="Текст заметки"
        v-model="text"
      ></textarea>
      <button class="btn btn-add" @click="() => emit('addItems', title, text)">Add-note</button>
    </div>
  </div>
</template>
