<script setup>
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { ref, onMounted, reactive, watch } from 'vue'
// import Paginate from 'vuejs-paginate-next'

// import {PulseLoader} from 'vue-spinner/dist/vue-spinner.min.js'
import Spinner from '../components/Spinner.vue'
import NewsHeader from '../components/NewsHeader.vue'
import NewsList from '../components/NewsList.vue'
import SideBar from '../components/SideBar.vue'
import ModalAddNewItem from '../components/ModalAddNewItem.vue'
import { filter } from 'lodash'

// const isActive = ref(true)
const toast = useToast()
const loading = ref(true)
const newsList = ref([])

const url = ref('https://73df57f40683f5ec.mokky.dev/news')
const page = ref(1)
const limit = ref(10)

const formActive = ref(false)

const filters = reactive({
  sortBy: '-date',
  searchQuery: ''
})

//ToggleBtn
const toggleBtn = () => {
  isActive.value = !isActive.value
}

onMounted(() => {
  getNews()
})

const onChangeSelect = (newVal) => {
  filters.sortBy = newVal
  console.log(filters.sortBy)
}

const onChangeSearch = (newValue) => {
  filters.searchQuery = newValue

  console.log(filters.searchQuery)
}
//Запрос на сервер
const getNews = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    console.log(filters.searchQuery)
    if (filters.searchQuery) {
      filters.sortBy = 'title'
      params.newsTitle = `*${filters.searchQuery}*`
      console.log(params, filters.searchQuery)
    }

    loading.value = true
    const { data } = await axios.get(`${url.value}?limit=${limit.value}&page=${page.value}`, {
      params
    })

    newsList.value = data.items.map((obj) => ({
      ...obj
    }))
  } catch {
    toast.error('Не удалось получить новости')
  } finally {
    loading.value = false
  }
}

const loadMore = () => {
  page.value += 1
  getNews()
}
function onToggleForm() {
  formActive.value = !formActive.value
}

/* Добавление новости */ async function addNews({ departament, newsTitle, newsText }) {
  loading.value = true
  try {
    let res = await axios.post('https://73df57f40683f5ec.mokky.dev/news', {
      departament: departament.value,
      newsTitle: newsTitle.value,
      newsText: newsText.value,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    })

    if (res.status === 201 || res.status === 200) {
      getNews()
      toast.success('Новость добавлена')
      departament.value = ''
      newsTitle.value = ''
      newsText.value = ''
      formActive.value = false
    }
  } catch {
    toast.error('Не удалось добавить новость')
  } finally {
    loading.value = false
  }
}

watch(filters, getNews)
// const toast = useToast()
</script>

<template>
  <div class="wrapper flex text-2xl w-screen">
    <ModalAddNewItem @closeForm="onToggleForm" />

    <!-- ********************Main Section********************* -->
    <transition name="menu">
      <SideBar />
    </transition>
    <div class="right-section px-8 py-6 bg-[#F4F6FA] mx-auto">
      <NewsHeader
        @onChangeSearch="onChangeSearch"
        @onChangeSelect="onChangeSelect"
        @toggleBtn="toggleBtn"
        :isActive="isActive"
        @addNews="addNews"
        @onToggleForm="onToggleForm"
        :formActive="formActive"
      />

      <Spinner class="flex justify-center" v-if="loading"></Spinner>

      <NewsList :newsList="newsList" class="container mx-auto" />
      <button
        @click="loadMore"
        class="btn border p-2 bg-[#5c9ee9] hover:bg-[#4290e9] text-white rounded-lg flex justify-center items-center mx-auto w-1/2"
      >
        Load more
      </button>
    </div>
  </div>
</template>
