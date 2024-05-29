<script setup>
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="flex">
    <transition name="menu">
      <SideBar />
    </transition>
    <div>
      <main class="right-section flex pl-10">
        <h1>
          <p>Ads</p>
        </h1>
      </main>
    </div>
  </div>
</template>
