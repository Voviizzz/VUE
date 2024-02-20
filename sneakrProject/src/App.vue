<script setup>
import Header from './components/Header.vue'
import CartListVue from './components/CardList.vue'
import { computed, onMounted, provide, reactive } from 'vue'
import axios from 'axios'
import { ref, watch } from 'vue'
import Drawter from './components/Drawter.vue'

//обычный способ применяется для массивов
const items = ref([])
//товары в корзине
const cart = ref([])
const isCreatingOrder = ref(false)

//Итоговая сумма всей корзины
const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => total + item.price, 0)
})

const vatPrice = computed(() => {
  return Math.round(totalPrice.value * 0.05)
})
console.log(cart.value)

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

//флаг для открытия корзины
const drawerOpen = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

// const searchQuery = ref('') // поиск

//ели объекто то применяем reactive
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

//функция добавления товары в каорзину

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

//эта функция должна прокинуться в cardList -> затем в Card
// const addToFavorite = async (item) => {
//   // item.isFavorite != item.isFavorite
//   console.log(item)
// }

//при клике на кнопку избранное делаем отправку данных на сервер
const clickToFav = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
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

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const onClickAddPLus = async (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
  console.log(cart)
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
      favoriteId: null,
      isAdded: false
    }))
    // console.log(items.value)
  } catch (e) {
    console.log(e)
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const cartButtonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value)

const createOrders = async (item) => {
  isCreatingOrder.value = true
  try {
    const { data } = await axios.post('https://508e167b46cfab68.mokky.dev/orders', {
      items: cart.value,
      date: new Date().toLocaleString(),
      totalPrice: totalPrice.value
    })

    cart.value = []
    item.isAdded = false

    return data
  } catch (err) {
    console.log(err)
  } finally {
    isCreatingOrder.value = false
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

//для сортировки, передаем sortBy.value и делаем заппрос
//watch следит за самим объектом а не его значениями (свойствами)
//watch следит за filters
watch(filters, feetchItems)

//делаем работу с localStorage
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  {
    deep: true
  }
)

//все дочернии компоненты буддут знать о функции!
provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})
// provide('addToFavorite', addToFavorite)
</script>

<template>
  <div>
    <Drawter
      v-if="drawerOpen"
      :total-price="totalPrice"
      :vat="vatPrice"
      :cart-button-disabled="cartButtonDisabled"
      @create-orders="createOrders"
    />
    <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
      <Header :totalPrice="totalPrice" @open-drawer="openDrawer" />
      <div class="p-10">
        <div class="flex justify-between align-center">
          <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

          <div class="flex justify-between items-center">
            <select
              @change="onChangeSelect"
              class="py-2 px-3 cursor-pointer border rounded-md outline-none h-12 bg-white mr-5" v-auto-animate
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
        <CartListVue :items="items" @addToCart="onClickAddPLus" @clickToFav="clickToFav" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
