import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../components/HomeView.vue";
import PlannerView from "../components/PlannerView.vue";
import AboutView from "../components/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/planner",
    name: "planner",
    component: PlannerView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;