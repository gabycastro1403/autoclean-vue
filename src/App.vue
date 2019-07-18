<template>
  <div id="app">
    <header>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Autoclean</a>
        </li>
      </ul>
    </header>
    <main>

      <img class="img-thumbnail images-circle" src="./assets/carwash-vector.png" alt="Vue.js PWA">

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.images-circle{
    border-radius: 50%;
    border: solid 5px #303F9F
}
body {
  margin: 0;
  
   background-image: linear-gradient(-90deg, rgba(123, 134, 221 ), rgba(86, 120, 252  ));
  
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

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #7b86bd;
  color: #ffffff;
}

</style>
