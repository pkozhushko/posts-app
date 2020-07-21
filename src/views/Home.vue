<template>
  <div class="home-wrapper">
    <h2>Posts of {{userInfo.name}}</h2>
    <hr />

    <div v-for="(post , i) in userPosts" :key="i" class="post">
      <h5 class="title" @click="goToPost(post)">{{post.title}}</h5>
      <p @click="goToPost(post)">{{post.body}}</p>
      <router-link class="link" to="about">{{userInfo.name}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["userPosts", "userInfo"]),
  async mounted() {
    this.$store.dispatch("axiosPosts", this.userInfo.id);
  },
  methods: {
    ...mapMutations(["updatePost"]),
    goToPost(post) {
      this.updatePost(post);
      this.$store.dispatch("axiosComments", post.id);
      this.$router.push({ name: "Post" });
    }
  }
};
</script>

<style scoped>
.post {
  border-bottom: 1px solid #ccc;
  padding: 15px 30px;
  margin: 10px 20px;
  cursor: pointer;
}

.title {
  font-size: 1.2em;
  color: rgb(75, 75, 75);
  transition: 0.8s;
}
.title:hover {
  opacity: 1;
  color: black;
}
</style>
