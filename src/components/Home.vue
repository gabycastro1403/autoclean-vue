<template>
  <div class="container text-light">
     <img class="img-thumbnail images-circle" src="../assets/carwash-vector.png" alt="Vue.js PWA" />
    <h1 class="mt-2">Auto Clean</h1>
    <h2 class="mt-5">Bienvenidos</h2>
    <p>"Tu automóvil limpio, sin salir de casa"</p>
    <a class="btn btn-primary btn-lg mr-2 text-light" @click="login =! login">Login</a>

    <a
      class="btn btn-primary btn-lg text-light"
      @click="signIn =! signIn"
    >Sign in</a>

    <Login v-if="login === true" />
    <SignIn v-if="signIn === true" />
  </div>
</template>

<script>
import Login from "./Login";
import SignIn from "./SignIn";
import {mapActions} from "vuex";

export default {
  name: "home",
  components: {
    Login,
    SignIn
  },
  data() {
    return {
      login: false,
      signIn: false
    };
  }
};
</script>

<style scoped>
h1{
  font-size: 3.5em;
}
p{
  font-size: 1.5em;
}

</style>

