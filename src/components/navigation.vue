<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >CyberSecurityBlog</router-link
        >
      </div>
      <div class="nav_links">
        <ul v-show="!mobile">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'CreatePost' }"
              >Create Post</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Login' }"
              >Login/Register</router-link
            >
          </li>
          <li>
            <router-link class="link" to="#">Another Blogs</router-link>
            <ul>
              <li>
                <router-link class="link" to="#"
                  >HTML/CSS(Bootstrap)</router-link
                >
              </li>
              <li>
                <router-link class="link" to="#">JavaScript/Jquery</router-link>
              </li>
              <li><router-link class="link" to="#">PHP/MySql</router-link></li>
              <li><router-link class="link" to="#">Laravel</router-link></li>
              <li>
                <router-link class="link" to="#">Js-Frameworks</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toogleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="mobile-navs">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'CreatePost' }"
            >Create Post</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </li>
        <li style="font-size: 30px; color: goldenrod; margin: 15px 0 5px 0">
          Another Blogs
        </li>
        <li>
          <router-link class="link" to="#">HTML/CSS(Bootstrap)</router-link>
        </li>
        <li>
          <router-link class="link" to="#">JavaScript/Jquery</router-link>
        </li>
        <li><router-link class="link" to="#">PHP/MySql</router-link></li>
        <li><router-link class="link" to="#">Laravel</router-link></li>
        <li><router-link class="link" to="#">Js-Frameworks</router-link></li>
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
      if (this.windowWidth <= 990) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },

    toogleMobileNav() {
      this.mobileNav = !this.mobileNav;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
  padding: 0 25px;
  z-index: 99;

  .link {
    font-weight: 700;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
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

  .mobile-navs {
    padding: 40px;
    width: 70%;
    max-width: 330px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    li {
      list-style-type: none;
      padding: 10px;
      font-size: 18px;
    }
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
  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;
      @media (max-width: 990px) {
        margin-left: 15px;
      }
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
        position: relative;
        display: flex;
        flex: 1 1 auto;
        margin: 0;
        padding: 0 30px;
        list-style-type: none;
        li:not(:last-child) {
          margin-right: 30px;
          @media (max-width: 1220px) {
            margin-right: 0;
          }
        }

        .link:last-child {
          margin-right: 0;
        }
        li {
          border: 2px solid transparent;
          border-radius: 5px;
          padding: 10px;
          transition: background 0.2s;
          a {
            color: #2375d8;
            text-decoration: none;
            text-transform: uppercase;
            transition: color 0.2s;
            text-align: center;
          }
          ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            display: block;
            margin: 12px -12px;
            padding: 0;
            z-index: 50;
            width: 220px;
            background: white;
            border-radius: 5px;
            transition: opacity 0.2s, visibility 0.2s;
            @media (max-width: 1220px) {
              margin: 12px -60px;
            }
            @media (max-width: 1024px) {
              margin: 12px -60px;
            }
            li {
              margin: -2px 0px 5px -1px;
              width: calc(100% + 2px);
              line-height: 1.8;
              a {
                color: #2375d8;
              }
            }
          }
          &:hover {
            background: #ec4138;
            border: 2px solid #f05749;
            border-right: 2px solid #e02a21;
            border-bottom: 2px solid #e02a21;
            a {
              color: #f9f8fd;
            }
            ul {
              visibility: visible;
              opacity: 1;
              box-shadow: 0 3px 5px 2px #ebecf1;
              li {
                a {
                  color: black;
                }
              }
            }
          }
        }
      }
    }
    @keyframes slide-in {
      0% {
        top: -50px;
      }
      40% {
        top: 20px;
      }
      70% {
        top: 10px;
      }
      100% {
        top: 15px;
      }
    }
  }
}
</style>
