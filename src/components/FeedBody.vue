<template>
  <div v-if="store.state.posts" class="feed-body">
    <div v-for="(post, index) in store.state.posts" :key="index">
      <PostCard
        :title="post.title"
        :body="post.body"
        :id="post.id"
        :userId="post.userId"
      />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { store } from "../store/index";
import PostCard from "./PostCard.vue";
onMounted(async () => {
  store.commit("setLoader");
  await store.dispatch("getPosts");
  store.commit("setLoader");
});
</script>
<style scoped>
.feed-body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>