<template>
  <a-card style="width: 100%; height: 100px">
    <a-card-meta :title="props.title" :description="description">
      <template #avatar>
        <a-avatar :size="40">{{ getFirstCapitalLetter(props.title) }}</a-avatar>
      </template>
    </a-card-meta>
  </a-card>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { getFirstCapitalLetter } from "../helper/helper";
const props = defineProps(["title", "email", "comment"]);
const description = computed(() => {
  return `${props.email} --: ${props.comment}`;
});
</script>
<style scoped>
</style>