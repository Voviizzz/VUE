<script setup>
import Header from './components/Header.vue'
// import CartListVue from './components/CardList.vue'
import axios from 'axios'
import { ref, watch, computed, provide } from 'vue'
import Drawter from './components/Drawter.vue'

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

//флаг для открытия корзины
const drawerOpen = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

// const searchQuery = ref('') // поиск

//эта функция должна прокинуться в cardList -> затем в Card
// const addToFavorite = async (item) => {
//   // item.isFavorite != item.isFavorite
//   console.log(item)
// }

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
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

//для сортировки, передаем sortBy.value и делаем заппрос
//watch следит за самим объектом а не его значениями (свойствами)
//watch следит за filters
// watch(filters, feetchItems)

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
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
