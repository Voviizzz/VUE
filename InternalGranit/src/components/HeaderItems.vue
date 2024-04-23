<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({ isActive: Boolean })
const emit = defineEmits(['toggleBtn'])
const toggleBtn = () => {
  emit('toggleBtn')
}
</script>

<template>
  <div>
    <div
      v-bind:class="{ 'after:rotate-[45deg] before:rotate-[145deg]': props.isActive }"
      @click="toggleBtn"
      class="transition ease-in-out delay-150 bg-blue-500sidebar__open relative h-[50px] w-[27px] inline-block bg-[#D9D9D9] opacity-50 hover:opacity-100 cursor-pointer bg hover:scale-110 hover:-translate-y-1 rounded-md shadow-sm after:content-[''] after:absolute after:right-1 after:top-7 after:transition-transform after:opacity-100 after:h-[3px] after:w-[20px] after:rounded after:rotate-[-45deg] after:bg-[#ffffff] before:content-[''] before:absolute before:rotate-[45deg] before:transition before:ease-in-out before:opacity-100 before:right-1 before:top-4 before:h-[3px] before:w-[20px] before:bg-white"
    ></div>
    <div>
      <button
        class="float-right px-12 py-2 bg-[#5c9ee9] hover:bg-[#4290e9] hover:delay-50 hover:scale-110 hover:transition hover:ease-in-out rounded-lg text-white"
      >
        Войти
      </button>
    </div>
  </div>
</template>
