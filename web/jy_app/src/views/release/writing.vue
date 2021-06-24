<template>
  <div>

    <!-- 头部标签 -->
    <header>
      <van-nav-bar
        title="提问-博客问答"
        left-text="返回"
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>

    <!-- 内容标签 -->
    <article>
      <div class="content">  
        
      </div>  
    </article>

    <!-- 尾部标签 -->
    <footer>
    </footer>

  </div>
</template>

<script>

  export default {
    // import引入的组件需要注入到对象中才能使用
    components: {},
    // 这里存放数据
    data () {
      return {
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {},
    // 方法集合
    methods: {
      // 返回按钮
      onClickLeft(){
        this.$router.go(-1);//返回上一层
      },
      // 发布按钮
      onClickRight(){
        console.log("456")
      },
      
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }
</script>

<style scoped lang='less'>
  /* @import url(); 引入公共css类 */

</style>