<template>
  <div class="header">
    <div class="logo">
      <span>荣港电气</span>
    </div>
    <i class="iconfont icon-sanjiao" :class="{'icon-cur':rotateFlag}" @click="rotate"></i>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user-logo" src :onerror="defaultImg">
          李三
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      defaultImg: 'this.src="' + require("../assets/img/touxiang.png") + '"',
      rotateFlag: false
    };
  },
  computed: {
    /*username(){
          let username = sessionStorage.getItem('ms_user');
          return username ? username : this.name;
      }*/
  },
  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        this.removeData({ keyName: "userInfo" });
        this.$router.push("/");
      }
    },
    rotate(rotateFlag) {
      this.rotateFlag = !this.rotateFlag;
      this.$emit("rotateFlag", this.rotateFlag);
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  background: #323232;
}

.header .logo {
  float: left;
  width: 260px;
  background: #f09b22;
}
.header .logo span {
  margin-left: 20px;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}

.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}

.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-menu__item {
  text-align: center;
}
.icon-sanjiao {
  display: inline-block;
  color: #868686;
  transform: rotate(-90deg);
  margin-left: 10px;
  cursor: pointer;
}
.icon-cur {
  transform: rotate(90deg);
}
</style>
