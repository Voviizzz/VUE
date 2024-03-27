<script setup>
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { ref, onMounted } from 'vue'
// import {PulseLoader}  from 'vue-spinner/dist/vue-spinner.min.js'
import Spinner from './components/Spinner.vue'
import NewsHeader from './components/NewsHeader.vue'
import NewsList from './components/NewsList.vue'
import SideBar from './components/SideBar.vue'
// import ModalAddNewItem from './components/ModalAddNewItem.vue'

const isActive = ref(false)
const toast = useToast()
const loading = ref(true)
const newsList = ref([])

//********************Toastification *******************/

//ToggleBtn
const toggleBtn = () => {
  isActive.value = !isActive.value
}

onMounted(() => {
  getNews()
})
//Запрос на сервер
async function getNews() {
  loading.value = true
  try {
    await axios.get('https://73df57f40683f5ec.mokky.dev/news').then((response) => {
      newsList.value = response.data.reverse()
    })
  } catch {
    toast.error('')
  } finally {
    loading.value = false
  }
}

/* Добавление новости */ async function addNews({ departament, newsTitle, newsText, formActive }) {
  if (departament.value === '' || newsTitle === '' || newsText === '') {
    toast.error('Заполните поля')
  } else {
    newsList.value.push({
      id: newsList.value.length + 1,
      departament: departament.value,
      newsTitle: newsTitle.value,
      newsText: newsText.value,
      date: new Date().toLocaleDateString()
    })
    await axios.post('https://73df57f40683f5ec.mokky.dev/news', {
      departament: departament.value,
      newsTitle: newsTitle.value,
      newsText: newsText.value,
      date: new Date().toLocaleDateString()
    })

    toast.success('Новость добавлена')
    departament.value = ''
    newsTitle.value = ''
    newsText.value = ''
    formActive.value = false
    console.log(newsList)
    newsList.value.reverse()
  }
}

// const toast = useToast()
</script>

<template>
  <div class="wrapper flex">
    <ModalAddNewItem />
    <transition name="menu">
      <SideBar v-if="isActive" />
    </transition>
    <!-- ********************Main Section********************* -->

    <div class="right-section px-8 py-6 bg-[#F4F6FA] text-2xl w-screen">
      <NewsHeader @toggleBtn="toggleBtn" :isActive="isActive" @addNews="addNews" />

      <Spinner class="flex justify-center" v-if="loading"></Spinner>

      <NewsList :newsList="newsList" class="container mx-auto" />
    </div>
  </div>
</template>

<style scoped>
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.menu-enter-active {
  transition: all 0.3s ease;
}
.menu-leave-active {
  transition: all 0.3s ease;
}
</style>
