<template>
  <div id="app">
    <header>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link title-link text-light" href="#">Autoclean</a>
        </li>
      </ul>
    </header>
    <main>
      <img class="img-thumbnail images-circle" src="./assets/carwash-vector.png" alt="Vue.js PWA" />

      <router-view class="animated fadeIn slow"></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Atma&display=swap");
@import url("https://fonts.googleapis.com/css?family=Sofia&display=swap");

h1 {
  font-family: "Sofia", cursive;
}

.title-link {
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
    rgba(142, 36, 170),
    rgba(86, 120, 252)
  );
}
h2 {
  font-family: "Atma", cursive;
}
p {
  font-family: "Atma", cursive;
}
label {
  font-family: "Atma", cursive;
  font-size: 1.5em;
}
a {
  font-family: "Atma", cursive;
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
