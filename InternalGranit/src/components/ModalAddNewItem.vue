<script setup>
import { defineEmits, ref, defineProps } from 'vue'
import { useToast } from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

// const v$ = useVuelidate(rules, departament)

// eslint-disable-next-line vue/no-export-in-script-setup
const toast = useToast()
const departament = ref('')
const newsTitle = ref('')
const newsText = ref('')

//правиила vuelidate
const rules = {
  departament: {
    required: helpers.withMessage('Отдел обязателен', required)
  },
  newsTitle: {
    required: helpers.withMessage('Заголовок обязателен', required),
    minLength: helpers.withMessage('Минимальная длина 5', minLength(5))
  },
  newsText: {
    required: helpers.withMessage('Текст обязателен', required),
    minLength: helpers.withMessage('Минимальная длина 15', minLength(15))
  }
}

const v$ = useVuelidate(rules, { departament, newsTitle, newsText })

const props = defineProps({
  formActive: Boolean
})
console.log(props.formActive)
// console.log({ formActive: props.formActive }, formActive.formActive)

function setDepartament(dep) {
  document.querySelector('.select_current').textContent = dep
  departament.value = dep
  console.log(departament.value)

  if (dep) {
    document.querySelector('.select__icon').classList.add('hidden')
  }
}

const emit = defineEmits(['addNews'])

function addNews() {
  // console.log({ departament, newsTitle, newsText });
  emit('addNews', { departament, newsTitle, newsText })
}
const departaments = [
  { id: 1, name: 'Производства' },
  { id: 2, name: 'АСУ' },
  { id: 3, name: 'Профком' },
  { id: 4, name: 'Бухгалтерия' },
  { id: 5, name: 'Столовая' },
  { id: 6, name: 'Столовая' }
]

// console.log(departament.value);
</script>
<template>
  <transition name="form">
    <div class="" v-if="props.formActive">
      <form
        action=""
        type="submit"
        class="mt-10 container mx-auto w-full flex flex-col border-2 border-white bg-white p-16 rounded-2xl"
      >
        <label for="" class="select__label text-xl">Выберете отдел</label>
        <TransitionGroup>
          <div class="form-group" v-for="error in v$.departament.$errors" :key="error.$uid">
            <div class="form__error-message text-red-500 text-base">
              {{ error.$message }}
            </div>
          </div>
        </TransitionGroup>
        <div class="select m-3">
          <div class="select__header">
            <span class="select_current">Отдел</span>

            <div class="select__icon px-4 animate-bounce text-center flex items-center mt-1">
              &#8595;
            </div>
          </div>
          <div>
            <div class="select__body">
              <div v-for="departament in departaments" :key="departament">
                <div class="select__item" @click="setDepartament(departament.name)">
                  {{ departament.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <label for="title" class="text-xl"> Введите заголовок новости</label>
        <TransitionGroup>
          <div class="form-group" v-for="error in v$.newsTitle.$errors" :key="error.$uid">
            <div class="form__error-message text-red-500 text-base">
              {{ error.$message }}
            </div>
          </div>
        </TransitionGroup>
        <input
          v-model.trim="v$.newsTitle.$model"
          type="text"
          placeholder="Заголовок"
          name="title"
          :class="{ error: v$.newsTitle.$error }"
          class="news__item-title w-100 h-10 rounded-xl bg-[#f3f3f3] px-5 m-3 text-xl outline-none"
        />

        <label for="note" class="text-xl">Введите текст новости</label>
        <TransitionGroup>
          <div class="form-group" v-for="error in v$.newsText.$errors" :key="error.$uid">
            <div class="form__error-message text-red-500 text-base">
              {{ error.$message }}
            </div>
          </div>
        </TransitionGroup>
        <textarea
          v-model.trim="v$.newsText.$model"
          name="note"
          id=""
          cols="20"
          rows="6"
          placeholder="Текст новости"
          :class="{ error: v$.newsText.$error }"
          class="news__item-text outline-none w-100 rounded-xl bg-[#f0f0f0] px-5 m-3 text-xl resize-none"
        ></textarea>

        <button
          type="prevent.submit"
          :disabled="v$.$invalid"
          :class="{ errorBtn: v$.$invalid }"
          @click.prevent="addNews"
          class="btn btn-search flex bg-[#5c9ee9] hover:bg-[#4290e9] hover:delay-50 hover:scale-110 hover:transalte-y-1 hover:transition hover:ease-in-out text-white py-2 rounded-lg text-xl max-w-[250px] w-full justify-center mx-auto m-3"
        >
          Добавить
        </button>
      </form>
    </div>
  </transition>
</template>
<style scoped>
.select {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 200px;
}

/* bg-[#5c9ee9] hover:bg-[#4290e9] */

.select__body {
  position: absolute;
  top: 100%;
  left: 10;
  width: 100%;
  max-width: 200px;
  background-color: #5c9ee9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
}
.select:hover .select__body {
  display: block;
}

.select__item:hover .second_body {
  display: block;
}

.select__header {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 15px;
  cursor: pointer;
  background-color: #5c9ee9;
  color: #fff;
  padding: 10px;
}
.select__current {
  font-size: 18px;
  line-height: 22px;
  padding: 8px;
}
/* .select__icon {

} */
.select__item {
  color: #eeeeee;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  line-height: 22px;
  border-radius: 1px solid #9d2828;
}
.select__item:hover {
  background-color: #4290e9;
  border-radius: 25px;
}

.form-enter-active,
.form-leave-active {
  transition: opacity 0.5s ease;
}

.form-enter-from,
.form-leave-to {
  opacity: 0;
}
.error {
  outline: 1px solid red;
  font-size: 18px;
}
.errorBtn {
  background-color: rgba(162, 196, 236, 0.541);
}

@keyframes bounce {
  0% {
    top: 0;
  }
  50% {
    top: 2.5px;
  }
  100% {
    top: 5px;
  }
}
</style>
