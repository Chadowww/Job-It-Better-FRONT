import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "home",
    component: HomeView,
  },
  {
    path: "/candidat/profile",
    name: "CandidateProfile",
    component: UserView,
  },
  {
    path: "/recruteur/profile",
    name: "CompanyProfile",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
