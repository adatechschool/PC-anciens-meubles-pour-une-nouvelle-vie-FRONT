<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <RouterLink to="/home" id="logo">AMPUNV</RouterLink>

    <div class="wrapper">
    
      <nav>
        <RouterLink to="/cuisine">CUISINE</RouterLink>
        <RouterLink to="/salon">SALON</RouterLink>
        <RouterLink to="/chambre">CHAMBRE</RouterLink>
        <RouterLink to="/decoration">DECO</RouterLink>
        <RouterLink to="/login">LOGIN</RouterLink>
        <RouterLink to="/panier"><img src="/src/assets/img/icons/cart.png" id="cart"></RouterLink>
      </nav>

      <HelloWorld />

    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

#logo {
  display: block;
  margin: 0 auto 2rem;
  font: 700 35px 'Arial';
  border-top: 4px solid #000;
  border-bottom : 4px solid #000;
}
#logo :hover{
  color:#000 !important; /*Le logo ne doit pas passer en orange quand on le survole : je ne sais pas pourquoi ça ne fonctionne pas. Au pire c'est pas grave*/
}

a,
.green {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsla(27, 100%, 50%, 1);
  }
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font: 600 35px 'Arial';

}

nav a:first-of-type {
  border: 0;
}

nav img{
  width: 1.2em;
  /* TO DO : Aligner le panier avec les autres onglets de navigation */
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
