<template>
   <div>
      <van-tabbar id="tabbar" @change="onChange" v-model="active" v-show="(path === '/index')||(path === '/special_column')||(path === '/news')|(path === '/my')"  style="z-index:999">
        <van-tabbar-item name="/index" icon="wap-home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item name="/special_column" icon="notes-o" to="/special_column">专栏</van-tabbar-item>
        <van-tabbar-item icon='add-o' @click="click_event"></van-tabbar-item>
        <van-tabbar-item name="/news" icon="chat-o" to="/news">消息</van-tabbar-item>
        <van-tabbar-item name="/my" icon="manager-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
      <m-release @onEvent="onEvent" :Share="showShare" ref="refs"></m-release>
      <router-view/>
   </div>
</template>
<script>
import MRelease from "@/views/components/release/release.vue"
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {MRelease},
  data() {
    return {
      active: '/index',
      path:'',
      showShare:false,
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
    },
  },
  methods: {
    onChange(index){
      this.active = index
    },
    // 子组件向父组件传值
    onEvent(val){
      this.showShare=false
    },
    // 向子组件传值
    click_event(){
      this.showShare=true
    },
  },
}
</script>
<style lang="less" scoped>
</style>
<style>
</style>
