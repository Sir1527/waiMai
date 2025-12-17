<script setup lang="ts">
import {inject, type Ref, ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 定义注入值的接口
interface SidebarCollapseContext {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

// 使用泛型指定 inject 的返回类型
const { toggleCollapse } = inject<SidebarCollapseContext>('sidebarCollapse')!
</script>

<template>
<div class="navbar">
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
          style="width: 100px"
          src=""
          alt="Element logo"
      />
    </el-menu-item>
    <el-button @click="toggleCollapse" icon="Menu" circle />
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</div>
</template>

<style scoped>
.navbar {
  height: 60px;
  background-color: pink;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>