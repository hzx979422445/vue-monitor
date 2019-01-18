import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/homePage',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['../views/home.vue'], resolve),
      children: [
        {
          path: '/systemInfo',
          component: resolve => require(['../views/children/systemInfo.vue'], resolve)
        },
        {
          path: '/nodeInfo',
          component: resolve => require(['../views/children/nodeInfo.vue'], resolve)
        },
        {
          path: '/dataView',
          component: resolve => require(['../views/children/dataView.vue'], resolve)
        },
        {
          path: '/trendAnalysis',
          component: resolve => require(['../views/children/trendAnalysis.vue'], resolve)
        },
        {
          path: '/parametersSet',
          component: resolve => require(['../views/children/parametersSet.vue'], resolve)
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/login.vue'], resolve)
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem("userInfo") != null) {
    if (to.path === '/login') {
      next();
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
})
export default router
