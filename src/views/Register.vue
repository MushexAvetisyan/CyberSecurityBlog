<template>
  <div class="form-wrap">
    <router-link class="GoHome" to="/Home">Go To Home Page</router-link>
    <form class="register">
      <p class="login-register">
        Have a Account? Just
        <router-link class="router-link" :to="{ path: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create Your Cyber Security Blog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstname" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastname" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" />
          <password class="icon" />
        </div>
        <div v-show="error" class="error">
          {{ this.errorMsg }}
        </div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/email.svg";
import password from "../assets/Icons/password.svg";
import user from "../assets/Icons/user.svg";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/FirebaseInit";

export default {
  name: "Register",
  data: () => ({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    error: null,
    errorMsg: "",
  }),
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstname !== "" &&
        this.lastname !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill all the Fields";
      return;
    },
  },
  components: {
    email,
    password,
    user,
    firebase,
  },
};
</script>

<style scoped lang="scss">
.register {
  max-width: 550px;
}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  .GoHome {
    position: relative;
    bottom: 45%;
    left: 50px;
    color: black;
    text-decoration-line: none;
    font-weight: 700;
    &:hover {
      color: darkgray;
      transition: 0.2s;
    }
  }
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 102vh;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/SecurityAngle.jpg");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
