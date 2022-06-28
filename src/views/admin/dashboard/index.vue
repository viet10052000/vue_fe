<template>
  <div class="common-layout" style="margin: 0;padding: 0">
    <Header />
    <el-container class="admin">
        <div>
          <Nav />
        </div>
        <div>
          <el-main style="height: 90vh">Dashboard</el-main>
        </div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/admin/nav/index'
import Header from '@/components/admin/header/index'
</script>

<style scoped>
.admin {
  height: 100vh;
}
</style>