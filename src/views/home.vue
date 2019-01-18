<template>
  <div class="wrapper">
    <v-head @rotateFlag="rotateFlag"></v-head>
    <v-sidebar :menu="menus" :isCollapse="Collapse"></v-sidebar>
    <div class="content" :class="{'curContent':Collapse}">
      <transition name="move" mode="out-in">
        <router-view :collapse="Collapse"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import vHead from "../components/header.vue";
import vSidebar from "../components/menu.vue";

export default {
  components: {
    vHead,
    vSidebar
  },
  data() {
    return {
      menus: [
        {
          url: "systemInfo",
          name: "系统信息",
          icon: "iconfont icon-xitongxinxi",
          id: 1
        },
        {
          url: "nodeInfo",
          name: "节点信息",
          icon: "iconfont icon-jiedianxuanze",
          id: 2
        },
        {
          url: "dataView",
          name: "数据查看",
          icon: "iconfont icon-shujuchakan",
          id: 3
        },
        {
          url: "trendAnalysis",
          name: "趋势分析",
          icon: "iconfont icon-shuju",
          id: 4
        },
        {
          url: "parametersSet",
          name: "参数设置",
          icon: "iconfont icon-icon-p_mrpcanshushezhi",
          id: 5
        }
      ],
      Collapse: false
    };
  },
  created: function() {
    const self = this;
  },
  methods: {
    rotateFlag(ele) {
      this.Collapse = ele;
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.wrapper >>> .content {
  transition: left 0.4s;
  position: absolute;
  left: 260px;
  right: 0;
  top: 70px;
  bottom: 0px;
}
.wrapper >>> .curContent {
  left: 65px;
}
</style>

