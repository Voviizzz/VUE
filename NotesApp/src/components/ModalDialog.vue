<script setup>
import { ref, defineEmits, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers, } from '@vuelidate/validators'

const title = ref('')
const text = ref('')
const submitStatus = ref(null)

const emit = defineEmits(['add-items'])

const rules = computed(() => {
  return {
    title: {
      required: helpers.withMessage('Это поле обязательно для заполнения', required),
      minLength: helpers.withMessage('Минимальная длина 3 символа', minLength(3))
    },
    text: {
      required: helpers.withMessage('Это поле обязательно для заполнения', required),
      minLength: helpers.withMessage('Минимальная длина 10 символов', minLength(3))
    }
  }
})
const v$ = useVuelidate(rules, { title, text })


// const AddNotes = () => {

//   if (v$.title.$invalid || v$.text.$invalid) {
//     submitStatus.value = 'ERROR'
//   } else {
//     submitStatus.value = 'PENDING'
//     setTimeout(() => {
//       submitStatus.value = 'OK'
//       emit('add-items', { title: title.value, text: text.value })
//     }, 300)
//   }
// }

console.log(v$)
</script>

<template>
  <div class="modal">
    <div class="modal__content">
      <form class="form" @submit.prevent="AddNotes">
        <div class="btn btn-close" @click="emit('toggleShow')">x</div>
        <label for="title">Введите заголовок</label>
        <input type="text" name="title" placeholder="Имя" v-model="v$.title.$model" />
        <TransitionGroup>
          <div class="form-group" v-for="error in v$.title.$errors" :key="error.$uid">
            <div class="form__error-message">
              {{ error.$message }}
            </div>
          </div>
        </TransitionGroup>
        <label for="note__text">Введите текст заметики</label>
        <TransitionGroup>
          <div class="form-group" v-for="error in v$.text.$errors" :key="error.$uid">
            <div class="form__error-message">
              {{ error.$message }}
            </div>
          </div>
        </TransitionGroup>
        <textarea class="note__text" name="text" id="" v-model="v$.text.$model"></textarea>
        <button @click="AddNotes" class="btn_add">Добавить заметку</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form__error-message {
  color: red;
}
.form {
  display: flex;
  flex-direction: column;
}
.modal {
  position: absolute;
  top: 25%;
  left: 35%;
}
.modal__content {
  background-color: rgba(223, 223, 223, 0.421);
  padding: 2em;
  border-radius: 15px;
}
.btn_add {
  padding: 1em;
  margin-top: 1em;
  border-radius: 15px;
  border: none;
  background-color: rgb(230, 160, 69);
  color: white;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
}
.btn_add:hover {
  background-color: rgb(230, 130, 0);
}
.note__text {
  resize: none;
  height: 200px;
}
</style>
