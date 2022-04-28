<template>
  <div class="app-wrapper">
    <div id="app">
      <navigation v-if="!navigation" />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <Footer v-if="!navigation" />
    </div>
  </div>
</template>
<script>
import navigation from "@/components/navigation";
import Footer from "@/components/Footer";
export default {
  data: () => ({
    navigation: null,
  }),
  components: {
    Footer,
    navigation,
  },
  created() {
    this.checkRoute()
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false
    },
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.container {
  max-width: 1880px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: black;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 14px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
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

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    .paginate-links {
      width: 150px;
      display: flex;
      margin-top: 30px;
      .active {
        background-color: #303030;
        color: white;
      }
      li {
        list-style-type: none;
        border: 1px solid gray;
        border-radius: 15px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
        }
        &:hover {
          background-color: black;
          color: white;
          transition: 0.5s ease all;
        }
      }
    }
    .pagination {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;
      @media (min-width: 360px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1560px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
