<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['addItems', 'toggleShow'])

function toggleShow() {
  emit('toggleShow')
}
</script>
<template>
  <div
    class="overlay fixed top-0 left-0 w-screen h-screen bg-sidebar/25 z-10 items-center flex justify-center"
  >
    <div class="modal">
      <button class="btn btn-close" @click="toggleShow">x</button>
      <form class="form flex flex-col" @submit.prevent="addItems">
        <input class="input-title" type="text" placeholder="Введите заголовок" v-model="title" />
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Текст заметки"
          v-model="text"
        ></textarea>
        <button @click="logMessage" class="btn btn-add">Add-note</button>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
<!-- --shadow: rgba(0, 0, 0, 0.4);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center; -->
