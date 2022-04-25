<template>
  <div class="app-wrapper">
    <div id="app">
      <navigation />
    <router-view/>
      <footer-vue />
  </div>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
import FooterVue from "@/components/Footer";
export default {
  data: () => ({

  }),
  components: {
    FooterVue,
    navigation
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  //background-image: url("./assets/Icons/cyber-security-webpage-banner-2.jpg");
  //background-size: 100%;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container{
  max-width: 1880px;
  margin: 0 auto;
}

.link{
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light{
  color: #fff;
}

.arrow{
  margin-left: 8px;
  width: 12px;
  path{
    fill: black;
  }
}

.arrow-light{
  path{
    fill: #fff;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
