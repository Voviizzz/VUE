<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
import axios from 'axios'
import { inject } from 'vue'
import CardList from '../components/CardList.vue'

const { cart, addToCart, removeFromCart } = inject('cart')

//обычный способ применяется для массивов
const items = ref([])

//ели объекто то применяем reactive
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

onMounted(async () => {
  await feetchItems()
  await feetchFavorites()
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
  //берем из localStoragefor cart
  const localCart = localStorage.getItem('cart')
  //значение корзины = если в локал сторе есть что-то то берем ее если нет то пустой массив
  cart.value = localCart ? JSON.parse(localCart) : []
})
//при клике на кнопку избранное делаем отправку данных на сервер
const clickToFav = async (item) => {
  try {
    if (!item.isFavorite) {
      //что мы будем передавать
      //parentId - id карточки кроссовок! прокидываем в карточку
      const obj = {
        parentId: item.id,
        item
      }

      const { data } = await axios.post(`https://508e167b46cfab68.mokky.dev/favorites`, obj)
      item.isFavorite = true
      item.favoriteId = data.id
    } else {
      console.log(item.favoriteId)
      item.isFavorite = false

      await axios.delete(`https://508e167b46cfab68.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (e) {
    console.log(e)
  }
}

//функция добавления товары в каорзину

const onChangeSelect = (e) => {
  //когда меняем select -> вшиваем его в sortBy.value
  filters.sortBy = e.target.value
}

const onChangeSearch = (e) => {
  filters.searchQuery = e.target.value
}

const onClickAddPLus = async (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }

  //для сортировки, передаем sortBy.value и делаем заппрос
  //watch следит за самим объектом а не его значениями (свойствами)
  //watch следит за filters
  watch(filters, feetchItems)

  //делаем работу с localStorage
}

//добавление в избранное! С помощбю map сравниваем все item, если он окажется что есть в favorites то возвращаем true
const feetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://508e167b46cfab68.mokky.dev/favorites')
    items.value = items.value.map((item) => {
      //parent id => id карточки кроссовок! прокидываем в карточку
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        //отдельное id закладки
        favoriteId: favorite.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const feetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://508e167b46cfab68.mokky.dev/items`, {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
    // console.log(items.value)
  } catch (e) {
    console.log(e)
  }
}

//1) мы следим за изменениям самого value, а не содержимое корзины,
//если изменилисб сами объекты, то указываем deep (глубока проверка) deep:true
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})
watch(filters, feetchItems)
</script>

<template>
  <div>
    <div class="flex justify-between align-center">
      <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

      <div class="flex justify-between items-center">
        <select
          @change="onChangeSelect"
          class="py-2 px-3 cursor-pointer border rounded-md outline-none h-12 bg-white mr-5"
          v-auto-animate
        >
          <!-- Обязательно value должен БЫТЬ чтобы понятно по какому value делать запрос на сервер! -->
          <option class="cursor-pointer outline-none" value="name">По названию</option>
          <option class="cursor-pointer outline-none" value="price">Цена по возрастанию</option>
          <option class="cursor-pointer outline-none" value="-price">Цена по убыванию</option>
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
    <div class="mt-8">
      <CardList :items="items" @addToCart="onClickAddPLus" @clickToFav="clickToFav" />
    </div>
  </div>
</template>
