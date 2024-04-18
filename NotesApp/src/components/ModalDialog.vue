<script setup>
import { defineEmits, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
// import moment from 'moment'

const title = ref('')
const text = ref('')

const rules = {
  title: {
    required: helpers.withMessage('Поле не может быть пустым', required),
    minLength: helpers.withMessage('Поле должно быть больше 5 символов', minLength(5)) // ,
  },
  text: { required, minLength: minLength(10) }
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
        <div class="col-md-6 mb-4">
          <div class="form__group">
            <label for="title" class="sr-only">Заголовок новости</label>
            <input
              type="text"
              id="title"
              class="form-control"
              placeholder="Ваше имя"
              v-model.trim="title"
              @input="$v.title.$touch()"
            />
            <span class="msg-error" v-for="error in $v.title.$errors" :key="error.$uid">
              {{ error.$message }}</span
            >
          </div>
          <div class="form__textarea">
            <label for="note">Заголовок новости</label>
            <textarea
              class="textarea"
              name="note"
              id="note"
              placeholder="Текст заметки"
              v-model="text"
            ></textarea>
            <span class="msg-error" v-if="$v.text.$invalid">
              Тело новости должно быть обязательным! И больше 10 символов</span
            >
          </div>
          <button type="submit" :disabled="$v.$invalid" class="btn btn-add">Add-note</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.msg-error {
  display: block;
  color: #dc3545;
}
</style>
