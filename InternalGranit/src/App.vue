<script setup>
// import { useToast } from 'vue-toastification'
// import axios from 'axios'
// import { ref, onMounted } from 'vue'

// import {PulseLoader}  from 'vue-spinner/dist/vue-spinner.min.js'
// import Spinner from '@/components/Spinner.vue'
import Spinner from '../src/components/Spinner.vue'
import NewsHeader from '../src/components/NewsHeader.vue'
import NewsList from '../src/components/NewsList.vue'
import SideBar from '../src/components/SideBar.vue'
// import ModalAddNewItem from './components/ModalAddNewItem.vue'

// const isActive = ref(false)
// const toast = useToast()
// const loading = ref(true)
// const newsList = ref([])
// const formActive = ref(false)

// //********************Toastification *******************/

// //ToggleBtn
// const toggleBtn = () => {
//   isActive.value = !isActive.value
// }

// onMounted(() => {
//   getNews()
// })
// //Запрос на сервер
// async function getNews() {
//   loading.value = true
//   try {
//     await axios.get('https://73df57f40683f5ec.mokky.dev/news').then((response) => {
//       newsList.value = response.data.reverse()
//     })
//   } catch {
//     toast.error('')
//   } finally {
//     loading.value = false
//   }
// }
// function onToggleForm() {
//   formActive.value = !formActive.value
// }

// /* Добавление новости */ async function addNews({ departament, newsTitle, newsText }) {
//   loading.value = true
//   try {
//     let res = await axios.post('https://73df57f40683f5ec.mokky.dev/news', {
//       departament: departament.value,
//       newsTitle: newsTitle.value,
//       newsText: newsText.value,
//       date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
//     })
//     if (res.status === 201 || res.status === 200) {
//       // formActive.value = false
//       newsList.value.push(res.data)
//       getNews()
//       toast.success('Новость добавлена')
//       departament.value = ''
//       newsTitle.value = ''
//       newsText.value = ''
//       formActive.value = false
//     }
//   } catch {
//     toast.error('Не удалось добавить новость')
//   } finally {
//     loading.value = false
//   }
// }

// // const toast = useToast()
//
</script>

<template>
  <div
    class="sidebar max-w-80 w-full bg-sidebar font-ruso text-base items-center justify-between py-6 :active={ isActive }"
  >
    <div class="h-screen text-white flex-1">
      <div class="sidebar__header px-7 flex items-center justify-between pb-4">
        <img class="" src="../assets/Logo.svg" alt="" />
        <div class="header__text flex flex-col items-center pl-2">
          <p class="text-gray-200 text-xl">АО РПТП ГРАНИТ</p>
          <span class="text-base">Корпоративный портал</span>
        </div>
        <!-- <div
            class="sidebar__close mr-1 relative h-[50px] w-[27px] inline-block bg-[#D9D9D9] opacity-50 hover:opacity-100 cursor-pointer bg rounded-md shadow-sm transition-all after:content-[''] after:absolute after:right-1 after:top-7 after:opacity-100 after:h-[3px] after:w-[20px] after:rounded after:rotate-90 after:bg-[#ffffff] after:transition-all before:content-[''] before:absolute before:rotate-[-45deg] before:opacity-100 before:right-1 before:top-4 before:h-[3px] before:w-[20px] before:bg-white"
          ></div> -->
      </div>

      <div class="sidebar__menu text-2xl">
        <ul>
          <li
            class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
          >
            <a class="flex items-center" href="#">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:stroke-sidebar"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <router-link class="group-hover:text-sidebar pl-5">Главная</router-link>
            </a>
          </li>
          <li
            class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
          >
            <a class="flex items-center" href="#">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:stroke-sidebar"
                  d="M12.2441 17.0347V13.0347"
                  stroke="#FFFF"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  class="group-hover:stroke-sidebar"
                  d="M12.2401 9.23877H12.2501"
                  stroke="#FFFF"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  class="group-hover:stroke-sidebar"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5 22.2847V3.78467H3V22.2847H21.5Z"
                  stroke="#FFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <router-link class="group-hover:text-sidebar pl-5" to="/about">About</router-link>
            </a>
          </li>
          <li
            class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
          >
            <a class="flex items-center" href="#">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:stroke-sidebar"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <!-- <router-link class="group-hover:text-sidebar pl-5" to="/">Главная</router-link> -->
            </a>
          </li>
          <li class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7">
            <a class="flex items-center" href="#">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:stroke-sidebar"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <p class="group-hover:text-sidebar pl-5">Рабочие сайты</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView />
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
