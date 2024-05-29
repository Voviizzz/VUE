<script setup>
import { ref } from "vue";
const activeIndex = ref(null);
const tags = ref([
  {
    id: 1,
    name: "lemon",
  },
  {
    id: 3,
    name: "apple",
  },
  {
    id: 4,
    name: "pear",
  },
  {
    id: 5,
    name: "orange",
  },
]);
</script>
<template>
  <div class="tags flex-wrap" v-if="tags">
    <span
      v-for="(tag, index) of tags"
      @click="activeIndex = activeIndex === index ? null : index"
      :key="tag.id"
      :class="activeIndex === index ? 'active' : ''"
    >
      {{ tag.name }}
    </span>
  </div>
</template>

<style scoped>
span {
  background-color: red;
  user-select: none;
}

.active {
  background-color: green;
}
</style>
