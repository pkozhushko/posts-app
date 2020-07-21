import Vue from 'vue'
import router from './../../router'

export default {
  state: {
    loggedIn: false,
    user: {},
    users: []
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
    updateUser(state, user) {
      state.user = user;
      state.loggedIn = true;
      router.push('/')
    },
    logIn(state) {
      state.loggedIn = true
    },
    logOut(state) {
      state.loggedIn = false
      router.push('Login')
    }
  },
  actions: {
    async axiosUsers(ctx) {
      const res = await Vue.axios.get("https://jsonplaceholder.typicode.com/users")
        
        .then(response => response.data)
        .then(response => response)
      ctx.commit('updateUsers', res)
    },
  },
  getters: {
    usersInfo(state) {
      return state.users;
    },
    userInfo(state) {
      return state.user;
    },
    auth(state) {
      return state.loggedIn;
    }
  },
};
