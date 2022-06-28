<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-left: -5px">
    <el-radio-button :label="!isCollapse">{{ isCollapse === true ? 'expand' : 'collapse' }}</el-radio-button>
  </el-radio-group>
  <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item @click="routeDashboard" index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item @click="routePage" index="2">
      <el-icon><document /></el-icon>
      <template #title>Page</template>
    </el-menu-item>
    <el-menu-item @click="routeUser" index="3">
      <el-icon><setting /></el-icon>
      <template #title>User</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const routeDashboard = () => {
  router.push('/admin/dashboard')
}
const routePage = () => {
  router.push('/admin/page')
}
const routeUser = () => {
  router.push('/admin/user')
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--expand) {
  min-height: 100vh;
}
</style>
