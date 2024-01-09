<script setup>
import Header from './components/Header.vue'
import CartListVue from './components/CardList.vue'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import { ref, watch } from 'vue'
// import Drawter from './components/Drawter.vue'

//обычный способ применяется для массивов
const items = ref([])

// const searchQuery = ref('') // поиск

//ели объекто то применяем reactive
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})
const onChangeSelect = (e) => {
  //когда меняем select -> вшиваем его в sortBy.value
  filters.sortBy = e.target.value
}

const onChangeSearch = (e) => {
  filters.searchQuery = e.target.value
}

//добавление в избранное! С помощбю map сравниваем все item, если он окажется что есть в favorites то возвращаем true
const feetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://508e167b46cfab68.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}

//эта функция должна прокинуться в cardList -> затем в Card
// const addToFavorite = async (item) => {
//   // item.isFavorite != item.isFavorite
//   console.log(item)
// }

const clickToFav = async (item) => {
  item.isFavorite = !item.isFavorite
}

const addToCart = async (item) => {
  item.isAdded = !item.isAdded
  console.log(item)
}

const feetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
      // searchQuery: filters.searchQuery
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://508e167b46cfab68.mokky.dev/items', {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false
    }))
    // console.log(items.value)
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await feetchItems()
  await feetchFavorites()
})

//для сортировки, передаем sortBy.value и делаем заппрос
//watch следит за самим объектом а не его значениями (свойствами)
//watch следит за filters
watch(filters, feetchItems)

//все дочернии компоненты буддут знать о функции!
// provide('addToFavorite', addToFavorite)
</script>

<template>
  <div>
    <!-- <Drawter /> -->
    <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
      <Header />
      <div class="p-10">
        <div class="flex justify-between align-center">
          <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

          <div class="flex justify-between items-center">
            <select
              @change="onChangeSelect"
              class="py-2 px-3 border rounded-md outline-none h-12 bg-white mr-5"
            >
              <!-- Обязательно value должен БЫТЬ чтобы понятно по какому value делать запрос на сервер! -->
              <option class="outline-none" value="name">По названию</option>
              <option value="price">Цена по возрастанию</option>
              <option value="-price">Цена по убыванию</option>
            </select>

            <div class="relative">
              <img class="absolute top-5 left-4" src="/search.svg" alt="" />
              <input
                @change="onChangeSearch"
                class="cursor-pointer pl-11 border outline-none focus:border-gray-300 border-slate-200 rounded-md h-12 w-full placeholder:text-slate-400"
                type="text"
                name=""
                id=""
                placeholder="Поиск..."
              />
            </div>
          </div>
        </div>
        <!-- Прокидывание собитий (emits) -->
        <CartListVue :items="items" @addToCart="addToCart" @clickToFav="clickToFav" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
