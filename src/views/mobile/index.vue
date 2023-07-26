<template>
  <div class="h-screen flex-center flex-col">
    <h1>hello</h1>
    <var-button class="mt-2" type="primary" @click="$router.push('/mobile/app_version')">App版本管理</var-button>
    <var-button class="mt-2" type="primary" @click="count++">count:{{ count }}</var-button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style scoped></style>
