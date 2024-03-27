<script setup></script>
<template>
  <transition name="form">
    <div class="" v-if="formActive">
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
          v-model="newsTitle"
          type="text"
          placeholder="Заголовок"
          name="title"
          class="w-100 h-10 rounded-xl bg-[#f3f3f3] px-5 m-3 text-xl outline-none"
        />
        <label for="note" class="text-xl">Введите текст новости</label>
        <textarea
          v-model="newsText"
          name="note"
          id=""
          cols="20"
          rows="6"
          placeholder="Текст новости"
          class="outline-none w-100 rounded-xl bg-[#f0f0f0] px-5 m-3 text-xl resize-none"
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
<style scoped></style>
<!-- --shadow: rgba(0, 0, 0, 0.4);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center; -->
