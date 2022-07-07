<script>
export default {
  data() {
    return {
      furnitures: [],
    };
  },

  mounted() {
    fetch('http://localhost:3001/meubles/category/cuisine')
      .then(response => response.json())
      .then(data => this.furnitures = data)
      .catch(err => console.log(err.message))
  }
};
</script>

<template>
  <h1>Page Cuisine</h1>
  <div v-for="f in furnitures" :key="f.id" class="cuisine">
    <img v-bind:src="f.photo1"/>
    <h2>{{ f.type }}</h2>
    <p>{{ f.prix }} €</p>
    <button>Acheter</button>
  </div>
</template>

<style>
/*
@media (min-width: 1024px) {
  .cuisine {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
*/
</style>
