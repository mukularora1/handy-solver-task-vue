<template>
  <div
    v-if="
      store.state.post && store.state.userDetail && store.state.comments.length
    "
  >
    <a-card hoverable style="width: 100%; height: 200px">
      <a-card-meta
        :title="store.state.userDetail.name"
        :description="store.state.userDetail.email"
      >
        <template #avatar>
          <a-avatar :size="54">{{
            getFirstCapitalLetter(store.state.userDetail.name)
          }}</a-avatar>
        </template>
      </a-card-meta>
      <p v-if="store.state.post.title" class="card-title">
        {{ store.state.post.title }}
      </p>
      <p v-if="store.state.post.body" class="card-body">
        {{ store.state.post.body }}
      </p>
    </a-card>
    <div
      v-if="store.state.post && store.state.comments.length"
      style="margin-top: 20px"
    >
      <div v-for="(data, index) in store.state.comments" :key="index">
        <PostComment
          :title="data.name"
          :email="data.email"
          :comment="data.body"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { getFirstCapitalLetter } from "../helper/helper";
import { store } from "../store/index";
import PostComment from "./PostComment.vue";
const route = useRoute();
onMounted(async () => {
  store.commit("setLoader");
  await store.dispatch("getUserDetail", { userId: route.params.userId });
  await store.dispatch("getPostComments", { postId: route.params.id });
  await store.dispatch("getPost", { postId: route.params.id });
  store.commit("setLoader");
});
</script>
<style scoped>
.card-title {
  margin-top: 10px;
  font-weight: 600;
  font-size: large;
}
.card-body {
  margin: 0;
}
</style>