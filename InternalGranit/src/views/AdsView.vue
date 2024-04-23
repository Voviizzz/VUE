<script setup>
import SideBar from '@/components/SideBar.vue'
import ModalAddNewItem from '@/components/ModalAddNewItem.vue'
import HeaderItems from '@/components/HeaderItems.vue'
import { ref, onMounted } from 'vue'
// import NewsHeader from '@/components/NewsHeader.vue'
// import NewsList from '@/components/NewsList.vue'
// import Spinner from '@/components/Spinner.vue'

const isActive = ref(false)
const toggleBtn = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <main>
    <div class="wrapper flex">
      <transition name="menu">
        <SideBar v-if="isActive" />
      </transition>
      <!-- ********************Main Section********************* -->

      <div class="right-section px-8 py-6 bg-[#F4F6FA] text-2xl w-screen">
        <HeaderItems :isActive="isActive" @toggleBtn="toggleBtn" />
      </div>
    </div>
  </main>
</template>
