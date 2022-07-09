import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login.vue";
import detailsList from "@/views/details-list.vue";
import achivesList from "@/views/achives-list.vue";
// import achives from '@/views/achives.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/access",
    component: detailsList,
  },
  {
    path: "/achives",
    component: achivesList,
  },
  {
    path: "/costs",
    component: achivesList,
  },
  {
    path: "/actity",
    component: achivesList,
  },
  {
    path: "/retail",
    component: achivesList,
  },
  {
    path: "/cashier",
    component: achivesList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
