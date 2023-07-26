<template>
  <div class="h-screen flex-center flex-col p-4">
    <el-button @click="count++">count: {{ count }}</el-button>
    <el-input class="mt-4" v-model="name" />
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const name = ref('hello')
</script>

<style scoped lang="scss"></style>
