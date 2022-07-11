<script>
export default {
  data() {
    return {
      furnitures: [ //A MODIFIER : 
        {
          photo1: "https://i.ibb.co/Jnz76H0/armoire-chambre.jpg",
          type: "Table de chevet en bois naturel",
          prix: 25,
        },
        {
          photo1: "https://i.ibb.co/2ktzrNp/buffet.jpg",
          type: "Buffet en bois naturel",
          prix: 50,
        },
      ],
    };
  },

  //AJOUTER API CALL GET POUR AFFICHER LE PANIER
  /*
  mounted() {
    fetch('http://localhost:3001/meubles')
      .then(response => response.json())
      .then(data => this.furnitures = data)
      .catch(err => console.log(err.message))
  }
*/

//AJOUTER API CALL DELETE POUR RETIRER DES MEUBLES DU PANIER


//Calcul du prix total 
  computed: {
    total: function () {
      let total = 0;
      this.furnitures.forEach((item, i) => {
        total += item.prix;
      });
      console.log("le prix est " + total)
      return total;
    },
  },
};
</script>


<template>
  <div class="white-container">
    <div class="container">
      <div class="product-list">
        <div v-for="f in furnitures" :key="f.id" class="product-info">
          <img v-bind:src="f.photo1" class="product-image" />
          <p>{{ f.type }}</p>
          <p class="prix">{{ f.prix }} €</p>
          <button class="remove-product" type="button">X</button>
        </div>
      </div>
      <div class="prixtotal">
        <p>{{ total }} €</p>
        <button class="acheter">Je valide !</button> 
      </div>
    </div>
  </div>
</template>


<style>
.white-container {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  left: 0px;
  top: 50px;
  background-color: rgba(240, 235, 235, 0.84);
}

.container {
  display: flex;
  gap: 60px;
}

.product-list {
  width: 70%;
}

.product-image {
  width: 150px;
}

.product-info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-top: 30px;
  overflow: scroll;
  max-height: 100%;
}

.product-info p {
  padding-bottom: 50px;
}

.remove-product {
  background: none;
  border: none;
  content: "\00d7";
  margin: 0;
  padding: 0px 0px 53px 0px;
  text-transform: uppercase;
}

.remove-product:hover {
  color: #509948;
  cursor: pointer;
  transition: 0.4s ease;
}

.prixtotal {
  width: 20%;
  margin: auto;
  text-align: center;
}

.prixtotal p {
  font-size: 20px;
  font-weight: 700; 
}

.acheter {
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
  padding: 0px;
  height: 50px;
  width: 150px;
  background-color: #82c151;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  transition: 0.4s ease;
}



.acheter:hover {
  background-color: #fff;
  color: #82c151;
  cursor: pointer;
  transition: 0.4s ease;
}
</style>