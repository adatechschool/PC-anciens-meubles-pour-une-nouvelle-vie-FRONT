<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">

     <RouterLink to="/home" id="logo">AMPUNV</RouterLink>

      <nav>
        <ul>
        <li><RouterLink to="/cuisine">CUISINE</RouterLink></li>
        <li><RouterLink to="/salon">SALON</RouterLink></li>
        <li><RouterLink to="/chambre">CHAMBRE</RouterLink></li>
        <li><RouterLink to="/decoration">DECO</RouterLink></li>
        <li><RouterLink to="/login">LOGIN</RouterLink></li>
        <li><RouterLink to="/panier"><img src="/src/assets/img/icons/cart.png" id="cart"></RouterLink></li>
        </ul>
      </nav>

    </div>
    
    <HelloWorld />
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  font-family: arial;
  font-size: 17px;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 30px 60px 13px 50px
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 20px;
  align-items: center;
}

nav ul li a {
   text-decoration: none;
   color: var(--color-text);
   font-weight: 700;
}

#logo {
  margin-right: auto; 
  border-top: 4px solid #000;
  border-bottom : 4px solid #000;
  text-decoration: none;
  font-weight: 700;
}


#cart {
  width: 30px; 
}

</style>
