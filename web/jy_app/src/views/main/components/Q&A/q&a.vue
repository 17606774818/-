<!-- 问答 -->
<template>
  <div class="box" >

    <!-- 头部标签 -->
    <header>
      <van-button class="btn" size="mini" :type="type === '全部' ? 'info' : 'default'" @click="changeList('全部')">全部</van-button>
      <van-button class="btn" size="mini" :type="type === '最新' ? 'info' : 'default'" @click="changeList('最新')">最新</van-button>
      <van-button class="btn" size="mini" :type="type === '最热' ? 'info' : 'default'" @click="changeList('最热')">最热</van-button>
      <van-button class="btn" size="mini" :type="type === '待回答' ? 'info' : 'default'" @click="changeList('待回答')">待回答</van-button></van-button></van-button>
    </header>

    <div v-for="item in 3" id="box_div">
      <!-- 内容标签 -->
      <article>
        <p>这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
      </article>
      <!-- 尾部标签 -->
      <footer >
        <van-button class="btn" size="mini">我是七个字昵称</van-button>
        <van-button class="btn" size="mini">0 阅读</van-button>
        <van-button class="btn" size="mini">0 回答</van-button>
        <van-button class="btn" size="mini">09-27 05:23分</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    // 这里存放数据
    data () {
      return {
        type:'全部'
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {},
    // 方法集合
    methods: {
      changeList(key){
        this.type=key
        if(key==="全部"){
          console.log(key)
        }
        if(key==="最新"){
          console.log(key)
        }
        if(key==="最热"){
          console.log(key)
        }
        if(key==="待回答"){
          console.log(key)
        }
      }
    },
    // 监听属性 类似于data概念
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    // 监控data中的数据变化
    watch: {},
  }
</script>

<style scoped lang="less">
.box{
  margin:3vw 4vw;
  header{
    margin-bottom: 2vw;
    p{
      font-weight: 700;
      margin:1vw;
    }
  }
  article{
     margin-bottom: 1vw;
    p{
      font-weight: 700;
      margin:1vw;
    }
  }
  footer{
    display: flex;
    border-bottom:0.2667vw solid #f0f0f0 ;
    padding-bottom: 1vw;
    margin-bottom: 2vw;
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
<style>
</style>
