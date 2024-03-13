import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../views/Landing.vue";

const rotes = [
    {
      path: "/",
      name: Landing,
      component: Landing,
    },
    {
      path: "project/:id",
      name: "project",
      component: () => import("../views/ToDoProject.vue"),
      props: true,
    },
  ],
  router = createRouter({
    history: createWebHashHistory,
    rotes: rotes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 };
    },
  });

export default router;
