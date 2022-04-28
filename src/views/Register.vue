<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Don`t Have an Account?
        <router-link class="router-link" :to="{ name: 'Login' }"
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
      </div>
      <button>Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/email.svg";
import password from "../assets/Icons/password.svg";
import user from "../assets/Icons/user.svg";
export default {
  name: "Register",
  data: () => ({
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null
  }),
  components: {
    email,
    password,
    user,
  },
};
</script>

<style scoped lang="scss">
.register{
  max-width: 350px;
}
</style>
