<template scoped>
    <div>
         <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">J'achète !</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
    import { BJumbotron } from 'bootstrap-vue'
    Vue.component('b-jumbotron', BJumbotron)
</script>

<!-- bootstrap se met dans le fichier Vue -->
<!-- vérifier que bootstrap est actif (inspecter, console, propriété --bs): s'il y a quelque chose qui est déjà codé, bootstrap va le remplacer.  
forcer l'état dans le navigateur permet de faire commme si on faisait un hover ou autre -->