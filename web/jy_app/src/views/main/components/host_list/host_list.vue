<!-- 推荐 -->
<template>
  <div class="box" >
    <div v-for="item in 1">
      <!-- 头部标签 -->
      <header >
        <van-button icon="fire" class="btn" size="mini"><span>我是七个字名称</span></van-button>
        <van-button icon="fire-o" class="btn" size="mini" >6.6w 热度</van-button>
      </header>

      <!-- 内容标签 -->
      <article>
        <p>这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
      </article>

      <!-- 尾部标签 -->
      <footer>
        <van-button class="btn" size="mini">0 阅读</van-button>
        <van-button class="btn" size="mini">·</van-button>
        <van-button class="btn" size="mini">0 评论</van-button>
        <van-button class="btn" size="mini">·</van-button>
        <van-button class="btn" size="mini">0 收藏</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    // 这里存放数据
    data () {
      return {
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {},
    // 方法集合
    methods: {},
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }
</script>

<style scoped lang="less">
.box{
  margin:3vw 4vw;
  header{
    margin-bottom: 1vw;
    // 热度+名称
    .btn{
      background-color: transparent;
      border: 0;
      span:first-child{
        font-weight: 700;
        color:#BEBEBE;
      }
    }
    // 总热度
    .btn:last-child{
      color:#BEBEBE;
      float: right;
    }
    // 去除按钮默认样式
    .btn::before{
      background-color: transparent;
    }
  }
  article{
    p{
      font-weight: 700;
      margin:1vw;
    }
  }
  footer{
    display: flex;
    border-bottom:0.2667vw solid #f0f0f0 ;
    padding-bottom: 1vw;
    margin-bottom: 1vw;
    .btn{
      background-color: transparent;
      color: #c0c0c0;
      border: 0;
    }
    .btn::before{
      background-color: transparent;
    }
  }
}

</style>
