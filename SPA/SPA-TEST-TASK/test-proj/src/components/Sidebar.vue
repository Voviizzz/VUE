<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-gray-800">
    <div class="hidden sm:ml-6 sm:block">
      <div class="flex space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'List' }">List</router-link>
        <router-link :to="{ name: 'Create' }">Create</router-link>

        <!-- <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >Calendar</a
        > -->
      </div>
    </div>
  </nav>
</template>
