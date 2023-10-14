<template>
  <router-link
    :to="{
      name: 'Post',
      params: { id: props.id, userId: props.userId },
    }"
    style="text-decoration: none"
  >
    <a-card hoverable style="width: 300px; height: 200px">
      <!-- <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template> -->
      <a-card-meta :title="props.title" :description="props.body">
        <!-- <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template> -->
      </a-card-meta>
    </a-card>
  </router-link>
</template>
<script setup>
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons-vue";
import { defineProps } from "vue";
const props = defineProps(["title", "body", "id", "userId"]);
</script>