<script setup lang="ts">
import {inject, type Ref, ref} from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 先定义接口
interface SidebarContext {
  isCollapse: Ref<boolean>
  toggleCollapse: () => void
}

// 使用泛型告诉 inject 返回什么类型，并用 ! 断言非空
const { isCollapse, toggleCollapse } = inject<SidebarContext>('sidebarCollapse')!
</script>

<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      :collapse-transition="true"
  >
    <el-menu-item index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 400px;
}
</style>