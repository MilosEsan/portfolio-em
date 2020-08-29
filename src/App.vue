<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Home</a>
      <a class="navbar-brand" href="/about">About Me</a>
      <a class="navbar-brand" href="/projects">My Works</a>
      <a class="navbar-brand" href="/contact">Contact Me</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Srisakdi:wght@700&display=swap");

#app {
  font-family: Roboto Condensed, sans-serif;
  .navbar {
    margin-bottom: 40px;
  }
  .navbar-brand {
    color: rgb(238, 90, 90);
    font-weight: bold;
    font-family: Roboto Condensed, sans-serif;
  }
  overflow: auto;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(15, 3, 59);
  background-color: #050403;
  background-image: linear-gradient(132deg, #050403 0%, #6fe5ca 100%);
}
</style>
