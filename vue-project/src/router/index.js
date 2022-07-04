import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Chambre from "@/views/Chambre.vue";
import Cuisine from "@/views/Cuisine.vue";
import Decoration from "@/views/Decoration.vue";
import Login from "@/views/Login.vue";
import Salon from "@/views/Salon.vue";
import Login from "@/views/Login.vue";
import Panier from "@/views/Panier.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cuisine",
      name: "Cuisine",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Cuisine.vue"),
    },
    {
      path: "/chambre",
      name: "Chambre",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Chambre.vue"),
    },
    {
      path: "/decoration",
      name: "Decoration",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Decoration.vue"),
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/salon",
      name: "Salon",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Salon.vue"),
    },
    {
      path: "/panier",
      name: "Panier",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Panier.vue"),
    },
  ],
});

export default router;
