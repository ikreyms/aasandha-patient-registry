import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import PatientsView from "../views/PatientsView.vue";
import AddressesView from "../views/AddressesView.vue";
import IslandsView from "../views/IslandsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/patients",
      name: "patients",
      component: PatientsView,
    },
    {
      path: "/addresses",
      name: "addresses",
      component: AddressesView,
    },
    {
      path: "/islands",
      name: "islands",
      component: IslandsView,
    },
  ],
});

export default router;
