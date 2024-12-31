import { createApp } from "vue";
import App from "./App.vue";
import "./styles/reset.css";
import "./styles/reuse.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("./views/index.vue"),
    },
    {
      path: "/products/briquettes",
      name: "briquettes",
      component: () => import("./views/briquettes.vue"),
    },
    {
      path: "/products/stoves",
      name: "stoves",
      component: () => import("./views/stoves.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createApp(App).use(router).mount("#app");
