<template>
  <div class="container" id="Servicio">
    <h1>Servicio</h1>
    <div class="card border-primary mb-3">
      <div class="card-header">Juan está lavando tu auto</div>
      <div class="card-body text-primary">
        <h5 class="card-title">Estará listo en aprox: 00:14:50</h5>
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
