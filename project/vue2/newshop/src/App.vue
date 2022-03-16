<template>
  <div id="app">
    hello app!
    <!-- 路由渲染显示的出口 -->
    <router-view></router-view>
    <!-- 底部导航组件 -->
    <TabBar></TabBar>
  </div>
</template>

<script>
//导入组件
import TabBar from "./components/tabbar/TabBar.vue"

export default {
  name: 'App',
  //注册局部组件
  components: {
    TabBar
  }
}
</script>

<style>

</style>
