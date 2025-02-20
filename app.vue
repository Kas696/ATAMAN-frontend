<template>
  <NuxtLoadingIndicator :throttle="10" />
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = ref("default");

</script>