<script setup>
import { defineEmits, defineProps } from 'vue'
import ModalAddNewItemVue from './ModalAddNewItem.vue'
import HeaderItems from './HeaderItems.vue'

//Константы, которые показывают состояние

//Принимаем переданные значения

const props = defineProps({
  isActive: Boolean,
  formActive: Boolean
})

//Отлавливаем события и передаем в родитель
const emit = defineEmits(['toggleBtn'], ['addNews'], ['onToggleForm'])

function onToggleForm() {
  emit('onToggleForm')
}

function toggleBtn() {
  emit('toggleBtn')
}

function addNews({ departament, newsTitle, newsText }) {
  // console.log(formActive.formActive)
  emit('addNews', { departament, newsTitle, newsText })
}

// function modalOpen() {
//   document.querySelector('body').style.overflow = 'hidden'
//   modalActive.value = true
// }

// function toggleShow () {
//   document.querySelector('body').style.overflow = 'auto'
//   modalActive.value = false
// }

// console.log(newsText)
// console.log(newsTitle);
</script>
<template>
  <div>
    <div>
      <HeaderItems :props="props" @toggleBtn="toggleBtn" @onToggleForm="onToggleForm"/>
      <div
        class="mt-10 hover:cursor-pointer hover:shadow-lg hover:transition hover:ease-in-out h-16 rounded-xl bg-[#ffffff] items-center container mx-auto"
      >
        <form class="flex items-center justify-between h-full">
          <div class="flex items-center mx-10 pl-10">
            <input
              type="text"
              value=""
              placeholder="Поиск"
              class="w-100 h-10 rounded-xl bg-[#ececec] px-5 ocus:outline-none outline-none active:outline-none"
            />
            <button
              class="btn btn-search flex mx-10 bg-[#5c9ee9] hover:bg-[#4290e9] hover:delay-50 hover:scale-110 hover:transalte-y-1 hover:transition hover:ease-in-out text-white px-2 py-2 rounded-lg text-xl"
            >
              Поиск
            </button>
          </div>
          <div class="flex items-center mx-10 pr-10">
            <label for="name" class="text-xl pr-5">Сортировать:</label>

            <select name="" id="" class="text-xl outline-none mr-10 cursor-pointer *:rounded-lg">
              <option class="rounded-lg flex cursor-pointer text-xl outline-none" value="name">
                По названию
              </option>
              <option class="flex cursor-pointer text-xl outline-none" value="name bg-[#91bbea]">
                По дате
              </option>
            </select>
            <button
              @click.prevent="onToggleForm"
              class="flex create-new-note float-right px-5 py-2 rounded-lg text-white bg-[#5c9ee9] hover:bg-[#4290e9] hover:delay-50 hover:scale-110 hover:transalte-y-1 hover:transition hover:ease-in-out"
            >
              Создать новость
            </button>
          </div>
        </form>
      </div>
      <ModalAddNewItemVue @addNews="addNews" v-bind:formActive="formActive" />
    </div>
  </div>
</template>

<style scoped></style>
