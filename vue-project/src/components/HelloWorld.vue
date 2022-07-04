<template>
  <div class="content">
    <h1>Anciens meubles <br><span>pour </span><br>une nouvelle vie</h1>
    <p>Plateforme de ventes de meubles en ligne.</p>
  </div>
</template>

<style scoped>
.content{
    width: 1200px;
    height: auto;
    margin: auto;
    color: #FFF;
    position: relative;
}

.content h1{
    padding-left: 20px;
    margin-top: 9%;
    letter-spacing: 2px;
    font:600 3em 'Times New Roman';
}

.content span{
    color: #ff7200;
    font-weight:600
}

@media (min-width: 1024px) {
  .content h1,
  .content p {
    text-align: left;
  }
}

.content p{
    padding-left: 20px;
    padding-bottom: 25px;
    font-family: Arial;
    letter-spacing: 1.2px;
    line-height: 30px;
    font-style: italic;
}
</style>
