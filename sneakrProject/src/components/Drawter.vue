<script setup>
import DrawerHeader from './DrawerHeader.vue'
// import CartItem from './CartItem.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './infoBlock.vue'
const emit = defineEmits(['createOrders'])

defineProps({
  totalPrice: Number,
  vat: Number,
  cartButtonDisabled: Boolean
})
</script>
<template>
  <div>
    <div class="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50"></div>
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-10">
      <DrawerHeader />

      <div v-if="!totalPrice" class="flex h-full items-center">
        <InfoBlock
          title="Корзина пуста"
          description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          image-url="package-icon.png"
        />
      </div>

      <div v-else>
        
        <CartItemList />

        <div>
          <div class="flex justify-between mt-5">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ totalPrice }} руб.</b>
          </div>
          <div class="flex justify-between mt-5">
            <span>Налог 5%:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ vat }} руб.</b>
          </div>
          <button
            :disabled="cartButtonDisabled"
            @click="() => emit('createOrders')"
            class="bg-green-500 text-white p-3 rounded-xl w-full mt-5 hover:bg-green-600 transition active:bg-green-700 disabled:bg-slate-300 cursor-pointer"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
