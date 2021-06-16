<template>
  <div>
    <div class="div">
      <div class="aaa" id="a">
        手机登录
      </div>
      <div  class="bbb">
        邮箱登录
      </div>
    </div>
    <div class = "ccc">
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
    mounted () {},
    // 方法集合
    methods: {

    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }
  document.getElementById( "#a" ).style.height = document.documentElement.clientHeight - document.getElementById( "首部Id" ).offsetHeight + "px";
</script>

<style scoped lang="less">
  .div{
    display: flex;
    .aaa{
      width: 20%;
      background-color: pink;
    }
    .bbb{
      width:80%;
      background-color: red;
    }
    span{
      font-size:13.3333vw
    }
  }
  .ccc{
    background-color: ;
  }
</style>
