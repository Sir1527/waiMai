<script setup lang="ts">
import NavBar from '@/components/Navbar/index.vue'
import Sidebar from '@/components/Sidebar/index.vue'
import {provide, ref} from "vue";

const isCollapse = ref(false)

// 提供响应式状态和切换方法
provide('sidebarCollapse', {
  isCollapse,
  toggleCollapse: () => {
    isCollapse.value = !isCollapse.value
  }
})
</script>

<template>
  <nav-bar />
  <Sidebar />
</template>

<style scoped>

</style>