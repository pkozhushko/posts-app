<template>
  <div class="post-wrapper">
    <router-link to="/" class="btn">back</router-link>
    <h2 class="page-title">Post</h2>
    <hr />
    <h4>{{userPost.title}}</h4>
    <p>{{userPost.body}}</p>
    <hr />
    <div v-for="user in userComments" :key="user.id" class="comment">
      <p class="article">Name</p>
      <h5>{{user.name}}</h5>
      <p class="article">Email</p>
      <p>{{user.email}}</p>
      <p class="article">Comment</p>
      <p>{{user.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["userPost", "userComments"]),
};
</script>

<style scoped>
p, h5{
  margin: 0;
}
.post-wrapper {
  text-align: left;
}
.comment {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.article {
  letter-spacing: 2px;
  margin-top: 25px;
  margin-bottom: 5px;
}
.page-title {
  margin-top: 50px;
}
</style>
