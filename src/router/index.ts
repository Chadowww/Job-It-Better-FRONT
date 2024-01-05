import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import { token, decodeToken } from "@/utils/tokenManager";
import { JwtTokenType } from "@/types/JwtTokenType";

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
    meta: {
      requiresAuth: true,
      requiredRoles: ["ROLE_USER", "ROLE_CANDIDATE"],
    },
  },
  {
    path: "/recruteur/profile",
    name: "CompanyProfile",
    component: UserView,
    meta: { requiresAuth: true, requiredRoles: ["ROLE_USER", "ROLE_COMPANY"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiredRoles: Array<string> = to.meta.requiredRoles as Array<string>;

  if (requiresAuth) {
    if (!token) {
      next("/");
    } else {
      let decoded: JwtTokenType;
      try {
        decoded = decodeToken(token.value);
        console.log(decoded);
      } catch (e) {
        console.error(e);
        localStorage.removeItem("jwt");
        next("/");
        return;
      }
      console.log(requiredRoles[1], decoded.roles[1]);
      if (requiredRoles[1] != decoded.roles[1]) {
        next("/");
      } else {
        next();
      }
    }
  } else {
    next();
  }
});
export default router;
