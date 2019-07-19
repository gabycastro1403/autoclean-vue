<template>
  <div class="container text-light" id="historial">
    <h1>historial</h1>
    <div v-for="venta in historial" :key="venta.auto" id="sales" class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{venta.data().auto}}</h5>
        <p class="card-text">{{venta.data().placas}}</p>
        <!-- <p class="card-text">Las placas</p>
        <p class="card-text">el lugar</p>-->
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      historial: []
    };
  },
  // methods: {
  //   ...mapActions([
  //     "getPost" // map `this.increment()` to `this.$store.dispatch('increment')`
  //   ]),
  //   ...mapActions({
  //     add: "getPost" // map `this.add()` to `this.$store.dispatch('increment')`
  //   }),
  //   created () {
  //     store.dispatch('getPost')
  //   }
  // }
};
</script>

<style>
</style>
