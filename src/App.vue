<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav collapse navbar-collapse navbar-nav " id="navbarNav">
        <li class="nav-item">
          <router-link class="nav-link logo-text text-light" to="/"><img width="70" height="70" class="img-thumbnail images-circle" src="./assets/carwash-vector.png"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link logo-text text-light m-3" to="/form">Nuevo servicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link logo-text text-light m-3" to="/historial">Mi historial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link logo-text text-light m-3" to="/servicio">Consultar mi pedido</router-link>
        </li>
        <li class="nav-link logo-text text-light" @click="signOut()">Cerrar sesión</li>
      </ul>
    </nav>
    <main>
      <router-view class="animated fadeIn slow"></router-view>
    </main>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "./router/index"

export default {
  name: "app",
  methods:{
    signOut(){
      firebase.auth().signOut();
       router.replace('/');

    }
  },
  computed:{
    
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Atma&display=swap");
@import url("https://fonts.googleapis.com/css?family=Sofia&display=swap");
@import url('https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

h1 {
  font-family: 'Roboto Condensed', sans-serif;
}

.logo-text {
  font-family: "Sofia", cursive;
  font-size: 2em;
}

.images-circle {
  border-radius: 50%;
  border: solid 5px #303f9f;
}
body {
  margin: 0;
  background-image: linear-gradient(
    -90deg,
    rgba(26, 35, 126  ),
    rgba(86, 120, 252)
  );
}
h2 {
 font-family: 'Darker Grotesque', sans-serif;
}
h5{
  font-family: 'Darker Grotesque', sans-serif;
}
p {
  font-family: 'Darker Grotesque', sans-serif;
}
label {
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.5em;
}
a {
font-family: 'Darker Grotesque', sans-serif;
}
.nav-link{
 font-family: 'Darker Grotesque', sans-serif;
  font-size: 2vw;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
.btn-primary{
  background-color: #2c3e50
}
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #7b86bd;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
@media (max-width:500px){
  .nav-link{
    font-size: 5vw;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.animated.slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
</style>
