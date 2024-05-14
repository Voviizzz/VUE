<script setup>
import { ref, onMounted } from "vue";
const url = "https://jsonplaceholder.typicode.com/posts";
const limit = 50;
let page = 1;
const posts = ref([]);
const completed = ref(false);

onMounted(async () => {
  setTimeout(() => {
    fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => (posts.value = data));
  }, 2000);
});

function loadMore() {
  page++;
  fetch(`${url}?_page=${page}&_limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      posts.value.push(...data);
      if (data.length <= limit) {
        completed.value = true;
      }
    });
}
function setPages() {
  let numberOfPages = Math.ceil(posts.value.length / limit);
  for (let index = 1; index <= numberOfPages; index++) {
    pages.value.push(index);
  }
}
</script>

<template>
  <section id="app">
    <div class="posts container mx-auto mt-5">
      <div
        class="post bg-[#f0f0f0] mb-5 border p-2 hover:bg-[#e0e0e0] cursor-pointer rounded-lg"
        v-for="post in posts"
        :key="post.id"
        v-if="posts.length"
      >
        <h2 class="id">#{{ post.id }}</h2>
        <h3 class="title text-2xl font-medium">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
      <p v-else>Loadind...</p>
      <button
        v-show="!completed"
        @click="loadMore"
        class="btn border p-2 bg-[#5c9ee9] hover:bg-[#4290e9] text-white rounded-lg flex justify-center items-center mx-auto w-1/2"
      >
        Load more
      </button>
      
    </div>
  </section>
</template>

<style scoped></style>
