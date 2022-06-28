<template>
  <div class="common-layout" style="margin: 0;padding: 0">
    <Header />
    <el-container>
      <div>
        <Nav />
      </div>
      <div>
        <el-main>
          <router-view />
        </el-main>
        <Footer />
      </div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/admin/nav/index'
import Header from '@/components/admin/header/index'
import Footer from '@/components/admin/footer/index'
</script>

<style scoped>

</style>