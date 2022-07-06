<script setup>
console.log("chambre")
const chambreFurniture = async () => {
  try {
    const response = await fetch("http://localhost:3001/meubles/category/chambre");
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
chambreFurniture();
</script>

<template>
    <div class="chambre">
        <p>Page de la Chambre</p>
    </div>
</template>

<style></style>