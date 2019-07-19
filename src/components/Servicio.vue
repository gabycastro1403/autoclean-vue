<template>
  <div class="container text-light" id="Servicio">
  
      <div class="card text-white bg-secondary mt-3" style="max-width: 18rem;">
  <div class="card-header">Servicio</div>
  <div class="card-body">
    <h5 class="card-title">Juan esta lavando tu auto</h5>
    <p class="card-text">Estará listo en aprox: 00:14:50</p>
  </div>
</div>

    </div>
 
</template>

<script>
import firebase from "firebase";
import db from "../js/firebase";

export default {
  // name: "historial"
  data() {
    return {
      historial: []
    };
  }
};
</script>

<style>

</style>
