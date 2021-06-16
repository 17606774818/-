<template>
  <div>
    <div class="head">
      <van-nav-bar
        left-text="返回"
      />
    </div>
    <div class="div">
      <div class="aaa" id="a">
        手机登录
      </div>
      <div  class="bbb">
        邮箱登录
      </div>
    </div>
    <div class = "ccc" id="c">
      aaa
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
    mounted () { document.getElementById( "c" ).style.height = document.documentElement.clientHeight - document.getElementById( "a" ).offsetHeight + "px";},
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
  .div{
    display: flex;
    .aaa{
      width: 20%;
      background-color: pink;
      height: 200px;
    }
    .bbb{
      width:80%;
      background-color: red;
      height: 200px;
    }
    span{
      font-size:13.3333vw
    }
  }
  .ccc{
    background-color: #66ccff;
    width: 100%;
  }
</style>
