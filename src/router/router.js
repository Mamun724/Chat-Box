import Vue from "vue";
import VueRouter from "vue-router";
import AppVue from "../App.vue";
import SignupComponent from "../components/SignupComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AppVue,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupComponent,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFoundComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
