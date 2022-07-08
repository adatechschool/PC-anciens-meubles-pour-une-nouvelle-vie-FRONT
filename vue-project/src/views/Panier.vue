<template>
  <div class="white-container">
    <div class="panier">
        <div class="products">
          <img src="@/assets/img/furnitures/buffet.jpg" class="product-image" />
          <p>Buffet en bois naturel</p>
        </div>
      <div class="price">
        <p>THE PRICE</p>
        <button>Je valide !</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
/*
@media (min-width: 1024px) {
  .white-container {
    width: 100%;
    height: 95%;
    background-color: rgba(240, 235, 235, 0.84);
  }
}
*/

.white-container {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 120px;
  width: 100%;
  height: 81vh;
  left: 0px;
  top: 50px;
  background-color: rgba(240, 235, 235, 0.84);
}

.panier {
  display: flex;
  gap: 60px;
}


.products {
display: flex;
width: 50%;
border-bottom: 1px solid rgb(0, 0, 0);
}

.product-image {
  width: 150px;
}
</style>