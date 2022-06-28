<template>
  <div class="login-bg">
    <div class="form">
      <div class="title">Change Password</div>
      <div class="input-container ic2">
        <input id="password" class="input" type="password" placeholder=" " />
        <div class="cut"></div>
        <label for="password" class="placeholder">Old Password</label>
      </div>
      <div class="input-container ic2">
        <input id="password1" class="input" type="password" placeholder=" " />
        <div class="cut"></div>
        <label for="password1" class="placeholder">New Password</label>
      </div>
      <div class="input-container ic2">
        <input id="password2" class="input" type="password" placeholder=" " />
        <div class="cut"></div>
        <label for="password2" class="placeholder">Confirm New Password</label>
      </div>
      <button type="submit" class="submit" @click="handleLogin">Change Password</button>
      <div style="margin-top: 20px;text-align: end">
        <a @click="handleRegister" style="color: #afafaf;text-decoration: none;cursor: pointer">Back >></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter()
const handleRegister = () => {
  router.push('/')
}
const handleLogin = () => {
  router.push('/user/change-password')
}
</script>
<style lang="scss" scoped>
.login-bg {
  background: #80808078;
  height: 85vh;
  padding-top: 15vh;
}
.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 80vh;
  padding: 20px;
  width: 320px;
  margin: auto;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  text-align: center;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  // outline: 0;
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: #06b;
}
</style>