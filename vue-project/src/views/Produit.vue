<script>
export default {
  props: ['id'],
  data() {
    return {
      furniture: [],
    };
  },

  mounted() {
    fetch('http://localhost:3001/meubles/' + this.$route.params.id)
      .then(response => response.json())
      .then(data => this.furniture = data)
      .catch(err => console.log(err.message))
  }
};
</script>

<template>
    <div id="meubleId" class="produit">
        <img v-bind:src="furniture.photo1" class="image"/>
        <div class="fiche">
            <h2>{{furniture.type}}</h2>
            <p>Prix : {{furniture.prix}}</p>
            <p>Etat : {{furniture.etat}}</p>
            <p>Dimensions (hauteur x largeur x profondeur): {{furniture.hauteur}} x {{furniture.largeur}} x {{furniture.profondeur}}</p>
        </div>
    </div>
</template>

<style>

</style>