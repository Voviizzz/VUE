<script setup>
import { ref, onMounted } from 'vue'
import HeaderNotes from './components/HeaderNotes.vue'
import ModalDialog from './components/ModalDialog.vue'

const showModal = ref(false)
const cards = ref([])

const toggleShow = (title) => {
  showModal.value = !showModal.value
  if (title) {
    title.value = ''
  }
}
const addItems = (title, text) => {
  console.log(title, text)
  cards.value.push({
    id: cards.value.length + 1,
    title: title,
    text: text,
    date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
  })
  showModal.value = false
  text = ''
  saveTaskOnLocalStorage()
}

onMounted(() => {
  const checkTaskOnLocalsStorage = JSON.parse(localStorage.getItem('task'))
  if (checkTaskOnLocalsStorage) {
    cards.value = checkTaskOnLocalsStorage
  }
})

const saveTaskOnLocalStorage = () => {
  localStorage.setItem('task', JSON.stringify(cards.value))
}

const removeTask = (id) => {
  cards.value = cards.value.filter((card) => card.id !== id)
  saveTaskOnLocalStorage()
}
</script>

<template>
  <main>
    <ModalDialog @toggle-show="toggleShow" v-if="showModal" @add-items="addItems" />
    <div class="container">
      <HeaderNotes v-on:toggleShow="toggleShow" />
      <div class="cards-container">
        <div class="card" v-for="card in cards" :key="card.id">
          <span class="btn-delete"
            ><img @click="removeTask(card.id)" src="./assets/images/icons/CloseSquare.svg" alt=""
          /></span>
          <div class="main-text">
            <h1>{{ card.title }}</h1>
            <p>{{ card.text }}</p>
          </div>
          <p class="date">{{ card.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
