<template>
  <div class="h-screen flex-center">
    <el-button @click="count++">count: {{ count }}</el-button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style scoped lang="scss"></style>
