<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >CyberSecurityBlogs</router-link
          >
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCDSM75JjbqAZVKs_cBDcSdw"
                target="_blank"
                ><youTube class="svg-icon youtube"
              /></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/streetart.photograph.50/"
                target="_blank"
                ><facebook class="svg-icon facebook"
              /></a>
            </li>
            <li>
              <a href="https://github.com/MushexAvetisyan" target="_blank"
                ><github class="svg-icon git"
              /></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><instagram class="svg-icon instagram"
              /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mushex-avetisyan-06496a22a" target="_blank"
                ><linkedin class="svg-icon linked"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'CreatePost' }"
              >Create-Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >Login In / Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youTube.svg";
import facebook from "../assets/Icons/facebook.svg";
import github from "../assets/Icons/github.svg";
import instagram from "../assets/Icons/instagram.svg";
import linkedin from "../assets/Icons/linkedin.svg";
export default {
  name: "footer-vue",
  data: () => ({}),
  components: {
    youTube,
    facebook,
    github,
    instagram,
    linkedin,
  },
};
</script>

<style scoped lang="scss">
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
    }

    .header {
      text-align: center;
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      @media (min-width: 800px) {
        text-align: initial;
      }
    }
    ul {
      gap: 16px;
      list-style: none;
      display: flex;
    }

    .col-1,
    .col-2 {
      gap: 32px;
      display: flex;
      flex: 1;
      @media (min-width: 800px) {
        gap: 0;
      }
    }

    .col-1 {
      flex-direction: column;

      h2 {
        text-align: center;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        margin-top: auto;

        li {
          display: flex;
          align-items: center;
          .svg-icon {
            width: 24px;
            height: auto;
            fill: white;
          }
          .youtube:hover {
            fill: #ff0000;
            transition: 0.5s;
          }
          .facebook:hover {
            fill: #1877f2;
            transition: 0.5s;
          }
          .instagram:hover {
            fill: #da2f7c;
            transition: 0.5s;
          }
          .linked:hover {
            fill: #0a66c2;
            transition: 0.5s;
          }
        }
      }
    }

    .col-2 {
      ul {
        height: 100%;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        @media (min-width: 800px) {
          flex-direction: column;
        }
        .link {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
  .right {
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;
    @media (min-width: 800px) {
      align-items: flex-end;
      gap: 0;
    }
  }
  p {
    margin-top: auto;
  }
}
</style>
