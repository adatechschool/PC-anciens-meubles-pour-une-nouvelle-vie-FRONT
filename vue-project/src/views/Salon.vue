<script setup>
console.log("salon")
const salonFurniture = async () => {
  try {
    const response = await fetch("http://localhost:3001/meubles/category/salon");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const allFurnitureJson = await response.json();
          console.log(allFurnitureJson);
  }
  catch (error) { 
            console.log(error); 
        }
}
salonFurniture();
</script>

<template>
    <div class="salon">
        <p>Page du Salon</p>
    </div>
</template>

<style></style>