<template>
  <div class="container">
    <h1>AUTO CLEAN</h1>
    <h2>Bienvenidos</h2>
    <p>Tu automóvil limpio, sin salir de casa</p>
    <a class="btn btn-outline" @click="login =! login">Login</a>

    <a class="btn btn-outline" @click="signIn =! signIn">Sign in</a>

    <Login v-if="login === true" />
    <SignIn v-if="signIn === true" />
  </div>
</template>

<script>
import Login from "./Login";
import SignIn from "./SignIn";

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
</style>

