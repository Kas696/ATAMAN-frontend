<script setup lang="ts">
import { Squares2X2Icon } from "@heroicons/vue/24/outline";

</script>

<template>
  <div class="flex items-center gap-10">
    <NuxtLink to="/" class="logo text-3xl">
      ATAMAN
    </NuxtLink>
    <Squares2X2Icon class="w-6 h-6 text-white cursor-pointer hover:text-amber-200 transition-colors duration-300" />
  </div>
</template>
