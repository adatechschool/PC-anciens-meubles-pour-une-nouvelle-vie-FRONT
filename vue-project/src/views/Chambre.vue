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
  <div class="chambre">
    <h1>Page Chambre</h1>
      <div class="flex-container">
        <div v-for="f in furnitures" :key="f.id" class="meuble">
          <img v-bind:src="f.photo1" class="image"/>
          <h2>{{ f.type }}</h2>
          <div class="infos">
          <p>{{ f.prix }} €</p>
          <button class="button">Acheter</button>
          </div>
        </div>
      </div>
  </div>
</template>

<style>

h1 {
  margin: 0.5em;
  text-align: center;
}

.chambre {
  position: absolute;
  width: 100%;
  height: 81vh;
  left: 0px;
  top: 138px;
  background-color: rgba(240, 235, 235, 0.84);
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.meuble {
  display: flex;
  flex-direction: column;    
  justify-content: space-around;
  background: rgba(249, 240, 240, 0.8);
  margin: 10px;
  padding: 10px;
  /* border: 2px solid; */
}

.image {
  height: 20em;
  width: 20em;
}

.infos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 8em;
  background: #C18A51;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border-color: #C18A51;
}

</style>