<!-- 推荐 -->
<template>
  <div class="box" >
    <div v-for="item in 2">
      <!-- 头部标签 -->
      <header >
        <p>这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
      </header>

      <!-- 内容标签 -->
      <article>
        <!--滑动控件-->
        <swiper :options="swiperOption" ref="mySwiper">
          <!--slides-->
          <swiper-slide v-for="item in 6" :key="item">
            <!--滑动图片-->
            <van-image
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              alt=""
              width="28vw"
              height="16vw"
            />
          </swiper-slide>
        </swiper>
      </article>

      <!-- 尾部标签 -->
      <footer>
        <van-button class="btn" size="mini">我是七个字昵称</van-button>
        <van-button class="btn" size="mini">0 阅读</van-button>
        <van-button class="btn" size="mini">·</van-button>
        <van-button class="btn" size="mini">0 评论</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    // 这里存放数据
    data () {
      return {
        //滑动浏览图片属性
        swiperOption: {
          slidesPerView:3, //一行显示3个
          spaceBetween: 1, //间隔30
          freeMode: true,
          speed: 1000, //滑动速度
        },
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {},
    // 方法集合
    methods: {},
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
    margin-bottom: 1vw;
    p{
      font-weight: 700;
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
