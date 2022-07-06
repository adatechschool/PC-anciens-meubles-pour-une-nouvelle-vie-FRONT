<script setup>
console.log("cuisine")
const cuisineFurniture = async () => {
  try {
    const response = await fetch("http://localhost:3001/meubles/category/cuisine");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const cuisineFurnitureJson = await response.json();
          console.log(cuisineFurnitureJson);
  }
  catch (error) { 
            console.log(error); 
        }
}
cuisineFurniture();
</script>

<template>
  <div class="cuisine">
    <h1>Page Cuisine</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .cuisine {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
