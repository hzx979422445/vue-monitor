<template>
  <div class="login-wrap">
    <div class="ms-title">登录（login）</div>
    <div class="ms-login">
      <el-form :model="ruleForm" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username" :rules="filter_rules({required:'请输入您的用户名'})">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入您的用户名！"
            @keyup.enter.native="submitForm('ruleForm')"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="filter_rules({required:'请输入您的密码'})">
          <el-input
            type="password"
            placeholder="请输入您的密码！"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;"></p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const param = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          };
          this.setData({
            keyName: "userInfo",
            data: "1019103151179046912"
          });
          if (this.getData({ keyName: "userInfo" })) {
            this.$router.push("/systemInfo");
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style  scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}

.ms-login {
  position: absolute;
  width: 300px;
  height: 160px;
  padding: 40px;
  top: 50%;
  left: 50%;
  margin-top: -120px;
  margin-left: -190px;
  background: #fff;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
