import * as VueRouter from "vue-router";

import Resume from "./components/Resume";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const routes = [
  { name: "about-page", path: "/src/components/About.vue", component: About },
  {
    name: "my-portfolio",
    path: "/src/components/Portfolio.vue",
    component: Portfolio,
  },
  { name: "my-resume", path: "/src/components/Resume.vue", component: Resume },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
