<script setup lang="ts">
import {User, Lock} from "@element-plus/icons-vue";
</script>

<template>
<div class="login">
  <div class="login-box">
    <img src="@/assets/img/login/login-l.png" alt="" />
    <div class="login-from">
      <el-form label-width="auto" style="max-width: 600px" :label-position="'top'">
        <div class="login-form-title">
          <span class="title-label">苍穹外卖</span>
        </div>
        <el-form-item >
          <el-input :prefix-icon="User" placeholder="账号"/>
        </el-form-item>
        <el-form-item >
          <el-input :prefix-icon="Lock" placeholder="密码"/>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" round @click="">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
}

.login-box {
  width: 1000px;
  height: 474.38px;
  border-radius: 8px;
  display: flex;
  img {
    width: 60%;
    height: auto;
  }
}

.login-from {
  background: #ffffff;
  width: 40%;
  border-radius: 0px 8px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 214px;
    height: 307px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
}

.login-form-title {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .title-label {
    font-weight: 500;
    font-size: 20px;
    color: #333333;
    margin-left: 10px;
  }
}

.login-btn {
  width: 100%;
}

</style>