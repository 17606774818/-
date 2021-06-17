<template>
   <div>
      <van-tabbar id="tabbar" @change="onChange" v-model="active" v-show="!(path === '/my/login')"  style="z-index:999">
        <van-tabbar-item name="/index" icon="wap-home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item name="/special_column" icon="notes-o" to="/special_column">专栏</van-tabbar-item>
        <van-tabbar-item name="/release" icon='add-o' to="/release"></van-tabbar-item>
        <van-tabbar-item name="/news" icon="chat-o" to="/news">消息</van-tabbar-item>
        <van-tabbar-item name="/my" icon="manager-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
      <router-view/>
   </div>
</template>
<script>
export default {
  data() {
    return {
      active: '/index',
      path:'',
    }
  },
  mounted() {
    // this.path = 当前路右页面
    this.path = this.$route.path
  },
  // 监听路由的变化
  watch:{
    $route(to,from){
      this.path= to.path  // 打开的新页面的路由
      this.active = to.path // 刷新页面，标签默认值跟随路由
    }
  },
  methods: {
    onChange(index){
      this.active = index
    }
  },
}
</script>
<style lang="less" scoped>
</style>
<style>
</style>
