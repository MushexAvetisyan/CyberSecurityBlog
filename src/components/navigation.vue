<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >CyberSecurityBlogs</router-link
        >
      </div>
      <div class="nav_links">
        <ul v-show="!mobile">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
        <div class="btn-pluss-wrapper">
          <h2 class="tooltip">Look!</h2>
          <div href="#" class="btn-pluss">
            <ul>
              <li><router-link to=""></router-link>About me</li>
              <li><router-link to=""></router-link>About me</li>
              <li><router-link to=""></router-link>About me</li>
              <li><router-link to=""></router-link>About me</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toogleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="mobile-nav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-solid.svg";
export default {
  data: () => ({
    mobile: null,
    mobileNav: null,
    windowWidth: null,
  }),
  components: {
    menuIcon,
  },

  created() {
    addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toogleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.9);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav_links {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ul {
        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.6s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .btn-pluss {
    overflow: hidden;
    position: relative;
    display: block;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 22px;
    width: 30px;
    margin: 0 auto;
    //padding-top: 25px;
    background-color: white;
    transition: width 0.3s 0.5s ease, border-radius 1.1s ease;
    a {
      display: block;
      position: relative;
      color: #fa434b;
      text-decoration: none;
      overflow: hidden;
      padding: 5px;
      border-radius: 5px;
      &:hover {
        text-decoration: inherit;
        color: white;
        background-color: #fa434b;
        transition: background-color 0.5s ease;
      }
    }
    &:after {
      content: "+";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      line-height: 20px;
      text-align: center;
      font-size: 1.1rem;
      background-color: #fa434b;
      color: white;
      transform: translateY(-50%) translateX(-50%);
      transition: all 0.3s 0.5s ease;
      cursor: pointer;
      cursor: hand;
    }
    ul {
      opacity: 0;
    }
    ul {
      margin-top: 15px;
      opacity: 0;
      width: 100%;
      margin-left: 0px;
      //height: 0;
      transition: all 0.5s ease;
      text-align: center;
      font-size: 0.9rem;
      li {
        background-color: #e4e4e4;
        margin-top: 5px;
        border-radius: 5px;
        width: 100%;
        height: 0px;
        overflow: hidden;
        transition: height 1s ease;
      }
    }

    //
  }

  .btn-pluss-wrapper {
    display: block;
    padding: 0;
  }
  .tooltip {
    position: relative;
    padding: 5px;
    border-radius: 5px;
    width: 70px;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 15px;
    animation-duration: 3s;
    animation-name: jump;
    animation-iteration-count: infinite;
    background-color: #fff;
    color: #fa434b;
    transition: all 1s ease;
    pointer-events: none;
    &::after {
      content: "";
      position: absolute;
      transform: rotate(45deg);
      display: block;
      height: 10px;
      width: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: inherit;
    }
    &::before {
      content: "";
      color: white;
    }
  }
  .btn-pluss-wrapper:hover {
    .tooltip {
      animation-duration: 0s;
      transition: all 1s ease;
      color: white;
      width: 90px;
      &::before {
        content: "Choose!";
        display: block;
        color: #fa434b;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: translateY(-50%);
        transition: all 1s 0.3s ease;
      }
    }
    .btn-pluss {
      width: 150px;
      //height: 120px;
      border-radius: 15px;
      margin-bottom: -150px;
      padding-bottom: 5px;
      transition: width 0.3s ease, border-radius 0.3s ease,
        padding-bottom 0.3s ease;
      &::after {
        transition: all 0.3s ease;
        left: 50%;
        top: 10px;
        transform: translateY(-5px) translateX(-50%);
      }
      ul {
        opacity: 1;
        //height: 100%;
        margin-top: 20px;
        transition: all 1s ease;
      }
      li {
        height: 25px;
        transition: height 1s ease;
        &:hover {
          border-bottom: 1px solid darken(#e9e5e5, 10);
        }
      }
    }
  }
  @keyframes jump {
    0% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(3px);
    }
  }
}
</style>
