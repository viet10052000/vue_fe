<template>
  <div>
    <el-row>
      <el-col :span="13" style="margin-left: 20px">
        <h3>FINANCE</h3>
      </el-col>
      <el-col :span="10">
        <marquee style="margin-top: 15px"> Tổng hợp tất cả tin tức tài chính , thì trường chứng khoán trong nước</marquee>
      </el-col>
    </el-row>
  </div>
  <hr style="margin: 0px"/>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="justify-content: center"
  >
    <el-menu-item index="1">Trang Chủ</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Thị Trường</template>
      <el-menu-item index="2-1">Tổng quan</el-menu-item>
      <el-menu-item index="2-2">Phân tích thị trường</el-menu-item>
      <el-menu-item index="2-3">Dự đoán chuyên gia</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">Tin Tức</el-menu-item>
    <el-menu-item index="4">Tiền ảo</el-menu-item>
    <el-menu-item index="5">Chuyển đổi tiền tệ</el-menu-item>
    <el-sub-menu v-if="!isLogin" index="6">
      <template #title>Tài khoản</template>
      <el-menu-item index="6-1" @click="handleLogin">Đăng nhập</el-menu-item>
      <el-menu-item index="6-2" @click="handleRegister">Đăng ký</el-menu-item>
    </el-sub-menu>
    <el-sub-menu v-else index="6">
      <template #title>Nguyễn Công Việt</template>
      <el-menu-item index="6-1">Góc Nhìn Chuyên Gia</el-menu-item>
      <el-menu-item index="6-2">Đăng Bài (Chuyên gia)</el-menu-item>
      <el-menu-item index="6-3" @click="handleLogout">Đăng Xuất</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLogin = ref(true)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleLogout = () => {
  isLogin.value = false
}
const handleLogin = () => {
  router.push('/user/login')
}
const handleRegister = () => {
  router.push('/user/register')
}
</script>

<style scoped>

</style>