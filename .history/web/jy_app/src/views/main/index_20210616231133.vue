<template>
  <div>
    <div class="head">
      <van-nav-bar
        @click-left="back"
        left-arrow
      />
    </div>
    <van-button @click="his.$router.push({path:'/'})">123</van-button>
  </div>
</template>

<script>

  export default {
    // import引入的组件需要注入到对象中才能使用
    components: {},
    // 这里存放数据
    data () {
      return {}
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {},
    // 方法集合
    methods: {
      // 返回上一页
      back(){
        if (window.history.length <= 1) {
          this.$router.push({path:'/'})
          return false
        } else{
          this.$router.go(-1)
        }
      }
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }
</script>

<style scoped>
  /* @import url(); 引入公共css类 */

</style>