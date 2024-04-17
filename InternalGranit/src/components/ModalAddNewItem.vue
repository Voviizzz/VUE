<script setup>
import { defineEmits, reactive, defineProps } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

// const v$ = useVuelidate(rules, departament)

// eslint-disable-next-line vue/no-export-in-script-setup

const departament = reactive('')
const newsTitle = reactive('')
const newsText = reactive('')

const rules = {
  departament: {
    required
  },
  newsTitle: {
    required,
    minLength: minLength(5)
  },
  newsText: {
    required,
    minLength: minLength(10)
  }
}

const v$ = useVuelidate(rules, { departament, newsTitle, newsText })

// const v = useVuelidate(rules, departament)
// console.log(v);
// const v$ = useVuelidate(rules, departament)
// console.log(v$)

const props = defineProps({
  formActive: Boolean
})
console.log(props.formActive)
// console.log({ formActive: props.formActive }, formActive.formActive)

function setDepartament(dep) {
  document.querySelector('.select_current').textContent = dep
  departament.value = dep
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
                <div @click="setDepartament(departament.name)" class="select__item">
                  {{ departament.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

          <label for="title" class="text-xl"> Введите заголовок новости</label>
          <input
            v-model.trim="newsTitle"
            type="text"
            placeholder="Заголовок"
            name="title"
            class="news__item-title w-100 h-10 rounded-xl bg-[#f3f3f3] px-5 m-3 text-xl outline-none"
          />
 

        <label for="note" class="text-xl">Введите текст новости</label>
        <div class="error" v-if="v$.newsText.$error"></div>
        <textarea
          v-model.trim="newsText"
          name="note"
          id=""
          cols="20"
          rows="6"
          placeholder="Текст новости"
          class="news__item-text outline-none w-100 rounded-xl bg-[#f0f0f0] px-5 m-3 text-xl resize-none"
        ></textarea>
        <button
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
  border-radius: 15px;
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
