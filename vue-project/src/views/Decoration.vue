<script setup>
console.log("deco")
const decorationFurniture = async () => {
  try {
    const response = await fetch("http://localhost:3001/meubles/category/decoration");
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
decorationFurniture();
</script>

<template>
    <div class="decoration">
        <p>Page Décoration</p>
    </div>
</template>

<style></style>