import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/team",
      component: () => import("../views/Team.vue"),
    },
  ],
});

export default router;
