<script setup>
import { defineEmits, ref } from 'vue'

const title = ref('')
const text = ref('')

const emit = defineEmits(['addItems', 'toggleShow'])

const toggleShow = () => {
  emit('toggleShow')
  title.value = ''
}

const addItems = () => {
  emit('addItems', { title, text })
}
</script>
<template>
  <div class="overlay">
    <div class="modal">
      <button class="btn btn-close" @click="toggleShow">x</button>
      <form class="form" @submit.prevent="addItems">
        <input class="input-title" type="text" placeholder="Введите заголовок" v-model="title" />
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Текст заметки"
          v-model="text"
        ></textarea>
        <button class="btn btn-add">Add-note</button>
      </form>
    </div>
  </div>
</template>
