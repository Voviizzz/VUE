<script setup>
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="app">
    <Sidebar></Sidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  min-height: 100vh;
  padding: 0;
}
</style>
