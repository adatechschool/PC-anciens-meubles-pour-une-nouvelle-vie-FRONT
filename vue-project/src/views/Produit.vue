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
        <img v-bind:src="furniture.photo1" class="productImage"/>
        <div class="fiche">
            <h2 class="nom">{{furniture.type}}</h2>
            <div class="description">
                <p class="etat">Etat : {{furniture.etat}}</p>
                <p class="materiau">Matériau : {{furniture.matiere}}</p>
                <p class="dimensions">Dimensions (hauteur x largeur x profondeur): {{furniture.hauteur}} x {{furniture.largeur}} x {{furniture.profondeur}}</p>
                <p class="prix">Prix : {{furniture.prix}} €</p>
                <button class="button">Acheter</button>
            </div>
        </div>
    </div>
</template>

<style>
.produit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 79vh;
  width: 100%;
  top: 10vh;
  background-color: rgba(240, 235, 235, 0.84);
}

.productImage {
  height: 26em;
  width: 26em;
  margin-top: 6.3em;
}

.fiche{
  margin: 0em;
}

.nom {
  margin: 1.3em;
}

.description {
  background: rgba(249, 240, 240, 0.8);
  margin: 2em;
  padding: 1.5em;
}

.etat {
  margin-bottom: 1.5em;
}

.materiau {
  margin-bottom: 1.5em;
}

.dimensions {
  margin-bottom: 1.5em;
}

.prix {
  margin-bottom: 1.5em;
}
</style>