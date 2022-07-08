import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Chambre from "@/views/Chambre.vue";
import Cuisine from "@/views/Cuisine.vue";
import Decoration from "@/views/Decoration.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Salon from "@/views/Salon.vue";
import Panier from "@/views/Panier.vue";
import Produit from "@/views/Produit.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/cuisine",
      name: "Cuisine",
      component: Cuisine,
    },
    {
      path: "/chambre",
      name: "Chambre",
      component: Chambre,
    },
    {
      path: "/decoration",
      name: "Decoration",
      component: Decoration,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/salon",
      name: "Salon",
      component: Salon,
    },
    {
      path: "/panier",
      name: "Panier",
      component: Panier,
    },
    {
      path: "/produit/:id",
      name: "Produit",
      component: Produit,
    }
  ],
});

export default router;
