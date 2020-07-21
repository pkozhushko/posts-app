<template>
  <div class="user-wrapper">
    <h2>{{userInfo.name}}</h2>
    <hr />
    <p>
      <span class="article">Email:</span>
      {{userInfo.email}}
    </p>
    <p>
      <span class="article">Phone:</span>
      {{userInfo.phone}}
    </p>
    <p>
      <span class="article">Username:</span>
      {{userInfo.username}}
    </p>
    <hr />
    <h4>Address</h4>
    <p>
      <span class="article">City:</span>
      {{userInfo.address.city}}
    </p>
    <p>
      <span class="article">Street:</span>
      {{userInfo.address.street}}
    </p>
    <p>
      <span class="article">Suite:</span>
      {{userInfo.address.suite}}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["userInfo"]),
};
</script>

<style scoped>
.user-wrapper {
  text-align: left;
}
.article {
  padding-left: 20px;
  font-weight: 700;
}
</style>
