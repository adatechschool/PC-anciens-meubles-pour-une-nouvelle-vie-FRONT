<script>
export default {
  data() {
    return {
      furnitures: [],
    };
  },

  mounted() {
    fetch('http://localhost:3001/meubles/category/chambre')
      .then(response => response.json())
      .then(data => this.furnitures = data)
      .catch(err => console.log(err.message))
  }
};
</script>

<template>
    <h1>Chambre</h1>
    <div v-for="f in furnitures" :key="f.id" class="chambre">
    <img v-bind:src="f.photo1"/>
    <h2>{{ f.type }}</h2>
    <p>{{ f.prix }} €</p>
    <button>Acheter</button>
  </div>
</template>

<style></style>