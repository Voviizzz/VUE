<script setup>
import { defineEmits, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
// import moment from 'moment'

const title = ref('')
const text = ref('')

const rules = {
  title: { required, minLength: minLength(10), alpha: (val) => /^[а-яё]*$/i.test(val) },
  text: { required, minLength: minLength(2), validText: (val) => 'test'.test(val) }
}

const $v = useVuelidate(rules, { title, text })

const emit = defineEmits(['addItems', 'toggleShow'])

const toggleShow = () => {
  emit('toggleShow')
  title.value = ''
}

const addItems = async () => {
  emit('addItems', { title, text })
}
</script>
<template>
  <div class="overlay">
    <div class="modal">
      <button class="btn btn-close" @click="toggleShow">x</button>
      <form class="form" @submit.prevent="addItems">
        <div class="error" v-if="$v.title.$invalid">
          <template v-if="!$v.title.alpha"> Имя должно содержать только буквы </template>
          <template v-else> Имя обязательно для заполнения </template>
        </div>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Текст заметки"
          v-model="text"
        ></textarea>
        <span class="error" v-if="$v.text.$invalid">
          Тело новости должно быть обязательным! И больше 10 символов</span
        >
        <button type="submit" :disabled="$v.$invalid" class="btn btn-add">Add-note</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
