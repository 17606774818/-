<template>
  <div>
    <div class="aaa">
      手机登录
    </div>
    <div  class="bbb">
      邮箱登录
    </div>
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
    mounted () {  
      // 得到手机屏幕的高度
      let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
      console.log('得到手机屏幕的高度', htmlHeight)
      let aaa = document.querySelector(".aaa")
      aaa.style.height = '"'+ htmlHeight +'" + "px"'
    },
    // 方法集合
    methods: {

    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }

  
</script>

<style scoped lang="less">
  div{
    display: flex;
    .aaa{
      width: 20%;
      background-color: pink;
      height:'' ;
    }
    .bbb{
      width:80%;
      background-color: red;
    }
    span{
      font-size:13.3333vw
    }
  }
</style>
