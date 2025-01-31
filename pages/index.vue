<script setup>
const { data, pending, error } = useFetch('http://127.0.0.1:8000/')
</script>

<template>
  <div>
    <h1 v-if="pending">Загрузка...</h1>
    <h1 v-else-if="error">Ошибка загрузки</h1>
    <h1 v-else>{{ data.message }}</h1>
  </div>
</template>