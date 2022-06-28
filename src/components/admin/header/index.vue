<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <div @click="routeDashboard" style="font-size: 25px;font-weight: bold;padding: 15px;cursor: pointer">Finance Admin</div>
    <div class="flex-grow" />
    <el-select style="margin-top: 15px;width: 50px;" placeholder="en" size="small">
      <el-option
          :key="1"
          :label="'en'"
          :value="'en'"
      />
      <el-option
          :key="2"
          :label="'vi'"
          :value="'vi'"
      />
    </el-select>
    <el-sub-menu index="2">
      <template #title>Setting</template>
      <el-menu-item index="2-1" @click="handleProfile">Profile</el-menu-item>
      <el-menu-item index="2-2" @click="handleChangePass">Change Password</el-menu-item>
      <el-menu-item index="2-3" @click="handleLogout">Logout</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleLogout = () => {
  router.push('/admin/login')
}
const handleChangePass = () => {
  router.push('/admin/change-password')
}
const routeDashboard = () => {
  router.push('/admin/dashboard')
}
const handleProfile = () => {
  router.push('/admin/profile')
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
