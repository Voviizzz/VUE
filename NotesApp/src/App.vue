<script setup>
import { ref, onMounted } from 'vue'
import HeaderNotes from './components/HeaderNotes.vue'
import ModalDialog from './components/ModalDialog.vue'
import CardsList from './components/CardsList.vue'

const showModal = ref(false)
const cards = ref([])

const toggleShow = () => {
  showModal.value = !showModal.value
}
const addItems = ({ title, text }) => {
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
      <CardsList :cards="cards" @remove-task="removeTask" />
    </div>
  </main>
</template>

<style scoped></style>
