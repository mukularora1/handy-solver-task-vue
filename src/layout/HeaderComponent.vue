<template>
  <a-layout-header class="sticky-header">
    <a-menu theme="dark" mode="horizontal" default-selected-keys="1">
      <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">About</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
  <script setup>
</script>
<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Adjust the z-index as needed */
}
</style>
  