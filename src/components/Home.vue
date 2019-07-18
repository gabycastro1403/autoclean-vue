<template>
  <div>
    <h1>AUTO CLEAN</h1>
    <h2>Bienvenidos</h2>
    <p>Tu automóvil limpio, sin salir de casa</p>
    <a class="waves-effect waves-light btn-large light-blue darken-1" @click="login =! login">Login</a>

    <a
      class="waves-effect waves-light btn-large light-blue darken-1"
      @click="signIn =! signIn"
    >Sign in</a>

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

