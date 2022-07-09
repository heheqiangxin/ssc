<template>
  <div id="login">
    <div class="login_box">
      <div class="box"></div>
      <div class="login_text">
        <p class="text1">科脉数据管理系统</p>
        <p class="text2">Kemai data managem system</p>
      </div>
    </div>
    <login-form></login-form>
  </div>
</template>

<script>
import loginForm from '../components/login-form.vue';
export default {
  components: { loginForm },};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/formbg.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.login_box {
  display: flex;
  flex-direction: row;
}
.box {
  width: 10px;
  height: 23px;
  background: #ffffff;
  margin-right: 20px;
  margin-top: 15px;
}
.text1 {
  width: 336px;
  height: 59px;
  font-size: 42px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 59px;
}
.text2 {
  width: 392px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 33px;
}
</style>
