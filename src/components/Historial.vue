<template>
  <div class="container" id="historial">
    <h1>historial</h1>
    <div v-for="venta in historial" :key="venta.auto" id="sales" class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{venta.data().auto}}</h5>
        <p class="card-text">{{venta.data().placas}}</p>
        <!-- <p class="card-text">Las placas</p>
        <p class="card-text">el lugar</p> -->
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import  db  from "../js/firebase";
import firebase from "firebase";

export default {
  data() {
    return {
      historial: []
    };
  },
  methods: {
    test() {
      console.log("db");
    },
    readData() {
      db.collection("historial")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.historial.push(doc);
            console.log(doc.data());
          });
        });
    }
  },
  created() {
    this.readData();
  }
};
</script>

<style>
</style>
