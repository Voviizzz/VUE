<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app">
    <div class="sidebar"><Sidebar /></div>
    <div class="container"><router-view></router-view></div>
  </div>
</template>

<style></style>
