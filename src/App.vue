<template>
  <div id="app">
    <header class="app-header" v-if="auth">
      <div class="nav">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/about">User</router-link>
      </div>
      <button class="btn" @click="logout">logout</button>
    </header>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "app",
  async mounted() {
    this.$store.dispatch("axiosUsers");
  },
  computed: mapGetters(['auth']),
  methods: {
    ...mapMutations(["logOut"]),
    logout() {
      this.logOut();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 700px;
}
body::-webkit-scrollbar {
  width: 0px;
}

.app-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav {
  padding: 30px;
}

.link {
  text-decoration: none;
  color: rgb(117, 117, 117);;
  margin: 0px 40px;
  transition: 0.8s;
}
.link:hover {
  color: rgb(0, 0, 0);;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.btn {
  cursor: pointer;
  padding: 8px 22px;
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: 0.8s;
  height: 50px;
  background: transparent;
  outline: none;
}
.btn:hover {
  background: rgb(0, 0, 0);
  color: #fff;
}
</style>
