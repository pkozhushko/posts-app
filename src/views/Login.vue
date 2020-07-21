<template>
  <div class="login-wrapper">
    <h1>Please log in</h1>
    <form @submit.prevent="checkUser">
      <input type="text" placeholder="E-mail" class="text-field" :class="{ 'error-field' : err}" @focus="err = ''" v-model="email" />
      <button type="submit" class="btn">Check user</button>
    </form>
    <transition name="fade" mode="out-in">
      <p v-if="err">{{err}}</p>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      err: ""
    };
  },
  computed: mapGetters(["usersInfo"]),
  methods: {
    ...mapMutations(["updateUser", "logIn"]),
    checkUser() {
      let user = this.usersInfo.filter(user => user.email === this.email);
      if (user.length) {
        this.updateUser(...user);
      } else {
        this.err = "Invalid email";
      }
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  margin-top: 300px;
}
.text-field {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px 25px;
  box-sizing: border-box;
  outline: none;
  transition: 0.8s;
}
.error-field {
  border: 1px solid rgb(160, 5, 5);
  box-shadow: 0px 0px 3px 0px rgb(160, 5, 5);
}
.btn {
  margin-top: 20px;
}
</style>