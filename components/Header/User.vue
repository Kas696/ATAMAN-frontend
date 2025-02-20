<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/24/solid"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/outline"

const isLoggedIn = ref(false);

const toggleAuth = () => {
  isLoggedIn.value = !isLoggedIn.value
}

</script>

<template>
  <div class="flex ml-auto items-center gap-3 hover:text-amber-200 transition-colors duration-300" @click="toggleAuth">
    <UserIcon class="w-6 h-6 " v-if="isLoggedIn" />
    <ArrowLeftEndOnRectangleIcon class="w-6 h-6" v-if="!isLoggedIn" />
    <div class="cursor-pointer " >{{ isLoggedIn ? "Выйти" : "Войти" }}</div>
  </div>
</template>
