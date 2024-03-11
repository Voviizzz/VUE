import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },{
      path: "/List",
      name: "list", 
      component: () => import("./views/List.vue"),
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
