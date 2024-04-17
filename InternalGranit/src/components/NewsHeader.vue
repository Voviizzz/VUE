<script setup>
import { defineEmits, defineProps } from 'vue'
import ModalAddNewItemVue from './ModalAddNewItem.vue'

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
      <div
        v-bind:class="{ 'after:rotate-[45deg] before:rotate-[145deg]': props.isActive }"
        @click="toggleBtn"
        class="transition ease-in-out delay-150 bg-blue-500sidebar__open relative h-[50px] w-[27px] inline-block bg-[#D9D9D9] opacity-50 hover:opacity-100 cursor-pointer bg hover:scale-110 hover:-translate-y-1 rounded-md shadow-sm after:content-[''] after:absolute after:right-1 after:top-7 after:transition-transform after:opacity-100 after:h-[3px] after:w-[20px] after:rounded after:rotate-[-45deg] after:bg-[#ffffff] before:content-[''] before:absolute before:rotate-[45deg] before:transition before:ease-in-out before:opacity-100 before:right-1 before:top-4 before:h-[3px] before:w-[20px] before:bg-white"
      ></div>
      <button
        class="float-right px-12 py-2 bg-[#5c9ee9] hover:bg-[#4290e9] hover:delay-50 hover:scale-110 hover:transition hover:ease-in-out rounded-lg text-white"
      >
        Войти
      </button>
      <!-- <div
      @click="modalOpen"
      class="mt-10 hover:cursor-pointer hover:shadow-lg hover:translate-y-1 :hover:scale-110 hover:transition hover:ease-in-out hover:delay-150 h-16 rounded-xl bg-[#ffffff] container mx-auto relative after:content-[''] after:hover:scale-110 after:absolute after:left-[50%] after:top-[50%] after:rounded-xl after:w-10 after:h-2 after:cursor-pointer after:bg-[#91bbea] after:transition after:ease-in-out after:delay-150 after:-translate-x-1/2 after:-translate-y-1/2 before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:w-2 before:h-10 before:bg-[#91bbea] before:hover:scale-110 before:transition before:ease-in-out before:delay-150 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-xl before:cursor-pointer"
    ></div> -->
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
