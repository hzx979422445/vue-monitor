<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      background-color="#323232"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
      :collapse="isCollapse"
    >
      <template v-for="item in menu">
        <template v-if="item.listchild">
          <el-submenu :index="item.url" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.listchild"
              :key="i"
              :index="subItem.url"
            >{{subItem.name}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.url" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: []
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {}
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
}
.sidebar {
  display: block;
  position: absolute;
  width: 260px;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar > ul {
  height: 100%;
}
</style>
