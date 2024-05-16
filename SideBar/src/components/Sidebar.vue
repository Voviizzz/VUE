<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="logo" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined"> home </span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-symbols-outlined"> visibility </span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/team">
        <span class="material-symbols-outlined"> group </span>
        <span class="text">team</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-symbols-outlined"> email </span>
        <span class="text">Contact</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="/settings">
        <span class="material-symbols-outlined"> settings </span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0;
  }
  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;
    .menu-toggle {
      transition: 0.2s ease-out;
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        .material-symbols-outlined {
          color: var(--primary);
          transform: translateX(0.5rem);
          transition: 0.2s ease-out;
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
  }
  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
        margin-right: 1rem;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
