/**
 * 全局公共方法&指令操作类
 *
 * @param Vue
 * @param options
 */
export default {
  install(Vue) {
    /// //////////////////////////////////////////////////////////////////////////////////第一部分-实例方法////////////////////////////////////////////////////////////////////////////////
    /**
     * 方法作用:本地存储-存
     * @param params={
     *  keyName:键,
     *  data:数据,
     *  flag:区分类型 true:localStorage,false:sessionStorage
     * } 
     */
    Vue.prototype.setData = function (params) {
      if (params.flag) {
        localStorage.setItem(params.keyName, JSON.stringify(params.data))
      } else {
        sessionStorage.setItem(params.keyName, JSON.stringify(params.data))
      }
    }
    /**
     * 方法作用:本地存储-取
     * @param params={
     *  keyName:键,
     *  flag:区分类型 true:localStorage,false:sessionStorage
     * } 
     * @returns null || obj
     */
    Vue.prototype.getData = function (params) {
      if (params.flag) {
        return JSON.parse(localStorage.getItem(params.keyName))
      } else {
        return JSON.parse(sessionStorage.getItem(params.keyName))
      }
    }
    /**
     * 方法作用:本地存储-删除
     * @param params={
     *  keyName:键,
     *  flag:区分类型 true:localStorage,false:sessionStorage
     * } 
     */
    Vue.prototype.removeData = function (params) {
      if (params.flag) {
        localStorage.removeItem(params.keyName)
      } else {
        sessionStorage.removeItem(params.keyName)
      }
    }
    /// //////////////////////////////////////////////////////////////////////////////////第二部分-指令////////////////////////////////////////////////////////////////////////////////

    /** 自定义指令
     bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
     inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
     update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
     componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
     unbind：只调用一次，指令与元素解绑时调用。
     */

    /**
     * 解析mardown语法格式
     */
    Vue.directive('highlight', (el) => {
      let blocks = el.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    })
  }
}
