<!-- 关注 -->
<template>
  <div class="box" >
    <div v-for="item in 4">   
      <!-- 头部标签 -->
      <header >
        <van-image
          class="img"
          round
          width="8vw"
          height="8vw"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="info">
          <p>这个是名称</p>
          <p>2021年 09月25日 05:25分 </p>
        </div>
      </header>

      <!-- 内容标签 -->
      <article>
        <p>这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
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
        <van-button icon="edit" class="btn" size="mini">评论</van-button>
        <van-button icon="good-job-o" class="btn" size="mini">点赞</van-button>
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
    display: flex;
    height:11vw;
    .img{
      margin-top: 2vw;
    }
    .info{
      margin: 1vw;
      p:first-child{
        font-weight: 700;
      }
      p:last-child{
        color:#BEBEBE;
        font-size:3vw;
      }
    }
  }
  article{
    p{
      font-weight: 700;
      margin-bottom:1vw;
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
<style>
</style>
