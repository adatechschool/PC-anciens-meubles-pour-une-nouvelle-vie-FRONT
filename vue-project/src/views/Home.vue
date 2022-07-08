<script>
import HelloWorld from "@/components/HelloWorld.vue";
//import TheWelcome from "@/components/TheWelcome.vue";

/*
console.log("coucou")
const allFurniture = async () => {
  try {
    const response = await fetch("http://localhost:3001/meubles");
    if (!response.ok) {
      throw new Error(response.status);
    }
    let allFurnitureJson = await response.json();
          console.log(allFurnitureJson);
          return allFurnitureJson
  }
  catch (error) { 
            console.log(error); 
        }
}

const allFurnitureObject = allFurniture().then(x => console.log(x));
console.log(allFurnitureObject);
const parseAllFurniture = JSON.parse([allFurnitureObject]);
//console.log(parseAllFurniture)

//document.write(allFurnitureObject)
*/

export default {
   components: {
    HelloWorld
  },
  data() {
    return {
      furnitures: [],
    };
  },

  mounted() {
    fetch('http://localhost:3000/meubles')
      .then(response => response.json())
      .then(data => this.furnitures = data)
      .catch(err => console.log(err.message))
  }
};


</script>

<template>

<HelloWorld />

  <div class="home">
    <h1>Home</h1>
      <div class="flex-container">
        <div v-for="f in furnitures" :key="f.id" class="meuble">
          <RouterLink to="/cuisine"><img v-bind:src="f.photo1" class="image"/></RouterLink>
          <h2>{{ f.type }}</h2>
          <div class="infos">
          <p>{{ f.prix }} €</p>
          <button class="button" type="submit">Acheter</button> 
          <!--addToBasket() -->
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

.home {
  /* position: absolute; */
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