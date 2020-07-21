import Vue from 'vue'

export default {
  state: {
    posts: [],
    post: {},
    userId: null,
    comments: []
  },
  mutations: {
    updatePost(state, post) {
      state.post = post
    },
    updatePosts(state, posts) {
      state.posts = posts
    },
    updateUserId(state, id) {
      state.userId = id
    },
    updateComments(state, comments) {
      state.comments = comments
    },
  },
  actions: {
    async axiosPosts(ctx, id) {
      const res = await Vue.axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        
        .then(response => response.data)
        .then(response => response)
      ctx.commit('updateUserId', id)
      ctx.commit('updatePosts', res)
    },
    async axiosComments(ctx, id) {
      const res = await Vue.axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        
        .then(response => response.data)
        .then(response => response)
      ctx.commit('updateComments', res)
    },
  },
  getters: {
    userPosts(state) {
      return state.posts;
    },
    userPost(state) {
      return state.post;
    },
    userComments(state) {
      return state.comments;
    }
  },
};
