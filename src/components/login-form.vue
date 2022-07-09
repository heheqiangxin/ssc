<template>
  <div class="login_form">
    <img src="@/assets/logo.png" alt="科脉" title="科脉" />
    <div>
      <div class="input">
        <div class="input_user">
          <label for="userName">用户账号</label>
          <div class="input_text">
            <span class="icon01"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="请输入用户账号"
              v-model="userName"
              @change="password_save"
            />
            <div class="user_error">
              <p class="error" :class="{ currentError: isShow01 }">
                账号不能为空
              </p>
              <p class="error" :class="{ currentError: isShow02 }">
                账号格式不对
              </p>
            </div>
          </div>
        </div>
        <div class="input_password">
          <label for="password">登录密码</label>
          <div class="input_text">
            <span class="icon02"></span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="请输入登录密码"
              v-model="password"
            />
            <div class="password_error">
              <p class="error" :class="{ currentError: isShow03 }">
                密码不能为空
              </p>
              <p class="error" :class="{ currentError: isShow04 }">密码错误</p>
            </div>
          </div>
        </div>
        <div class="input_checkbox">
          <input
            type="checkbox"
            name="checkbox"
            :checked="check"
            v-model="check"
          />
          <label for="checkbox">记住密码</label>
        </div>
      </div>
      <input
        type="submit"
        class="submit"
        value="登录"
        onMouseDown="this.className = 'input_click'"
        onMouseUp="this.className = 'submit'"
        @click="login_check"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      isShow01: false,
      isShow02: false,
      isShow03: false,
      isShow04: false,
      check: false,
      name: [],
    };
  },
  methods: {
    login_check() {
      if (this.userName === "") {
        this.isShow01 = true;
        this.isShow02 = false;
        if (this.password === "") {
          this.isShow03 = true;
          this.isShow04 = false;
        } else if (/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
          this.isShow04 = false;
        } else {
          this.isShow03 = false;
          this.isShow04 = true;
        }
      } else if (this.userName !== "") {
        this.isShow01 = false;
        if (/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.userName)) {
          this.isShow02 = false;
          if (this.password === "") {
            this.isShow03 = true;
            this.isShow04 = false;
          } else if (/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
            this.isShow03 = false;
            this.isShow04 = false;
            if (this.check === true) {
              this.setCookie(this.userName, this.password);
            }
            this.userName = "";
            this.password = "";
            this.check = false;
            this.$router.push('/achives')
          } else {
            this.isShow03 = false;
            this.isShow04 = true;
          }
        } else {
          if (this.password === "") {
            this.isShow03 = true;
            this.isShow04 = false;
          } else if (/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
            this.isShow04 = false;
          } else {
            this.isShow03 = false;
            this.isShow04 = true;
          }
          this.isShow01 = false;
          this.isShow02 = true;
        }
      }
    },
    password_save() {
      if (this.userName !== "") {
        this.getCookie(this.userName);
      } else {
        this.password = "";
      }
    },
    setCookie(name, value) {
      document.cookie = name + "=" + value;
    },
    getCookie(name) {
      let value = document.cookie
        .split(";")
        .find((row) => row.startsWith(name + "="))
        .split("=")[1];
      this.password = value;
    },
  },
};
</script>

<style scoped>
.login_form {
  width: 368px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.login_form img {
  height: 74px;
}
.login_form .input {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.input_user label {
  width: 56px;
  height: 18px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #979797;
  line-height: 18px;
  letter-spacing: 1px;
}
.input_password label {
  width: 56px;
  height: 18px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #979797;
  line-height: 18px;
  letter-spacing: 1px;
}
.input_user input {
  width: 260px;
  height: 40px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #dddddd;
  font-size: 12px;
  margin-top: 14px;
  /* margin-bottom: 19px; */
  padding-left: 40px;
}
.input_password input {
  width: 260px;
  height: 40px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #dddddd;
  font-size: 12px;
  margin-top: 10px;
  /* margin-bottom: 14px; */
  padding-left: 40px;
}
.input_checkbox {
  display: flex;
  align-items: center;
}
.input_checkbox label {
  width: 57px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  margin-left: 6px;
}
.login_form .submit {
  width: 300px;
  height: 40px;
  background: #5677fc;
  border-radius: 3px;
  border: 1px solid #5677fc;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  margin-top: 20px;
}
.login_form .input_click {
  width: 300px;
  height: 40px;
  background: skyblue;
  border-radius: 3px;
  border: 1px solid #5677fc;
  margin-top: 20px;
}
.input_text {
  position: relative;
}
.input_text .icon01 {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(../assets/icon01.png) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  margin: 20px 21px 5px 4px;
}
.input_text .icon02 {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(../assets/icon02.png) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  margin: 16px 21px 5px 4px;
}
.input_user .user_error {
  height: 19px;
  opacity: 100%;
  font-size: 14px;
  color: red;
}
.input_password .password_error {
  height: 19px;
  opacity: 100%;
  font-size: 14px;
  color: red;
}
.error {
  display: none;
}
.currentError {
  display: inline-block;
}
</style>
