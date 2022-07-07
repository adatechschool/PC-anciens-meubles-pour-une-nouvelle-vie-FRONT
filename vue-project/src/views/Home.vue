<script>
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
  data() {
    return {
      furnitures: [],
    };
  },

  mounted() {
    fetch('http://localhost:3001/meubles')
      .then(response => response.json())
      .then(data => this.furnitures = data)
      .catch(err => console.log(err.message))
  }
};


</script>

<template>
<h1>Home</h1>
  <div v-for="f in furnitures" :key="f.id" class="home">
    <img v-bind:src="f.photo1"/>
    <h2>{{ f.type }}</h2>
    <p>{{ f.prix }} €</p>
    <button>Acheter</button>
  </div>
</template>
