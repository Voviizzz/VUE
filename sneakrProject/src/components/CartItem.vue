<script setup>
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number
  
})
</script>
<template>
  <div class="flex items-center border border-slate-200 rounded-xl p-4 gap-4 mb-4">
    <img  class="w-16 h-16" :src="imageUrl" :alt="title" />
    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2 items-center">
        <b class="flex-1">{{ price }}</b>
        <img
        @click=" emit('onClickRemove')"
          class="opacity-50 hover:opacity-100 transition cursor-pointer"
          src="/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
