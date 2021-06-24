<template>
  <div>
    <van-share-sheet
        v-model="showShare"
        :options="options"
        cancel-text=''
        @click-overlay="overlay"
        @select="onSelect"
      >
      <template #title>
        <div class="info">
          <van-image
            round
            width="9vw"
            height="9vw"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span>这里是用户的昵称</span>
        </div>
      </template>
      </van-share-sheet>

  </div>
</template>

<script>
  export default {
    // import引入的组件需要注入到对象中才能使用
    components: {},
    props:['Share'],
    // 这里存放数据
    data () {
      return {
        showShare:this.value,
        options:[{
          name:'博文',
          icon: 'http://xzgtupian.oss-cn-hangzhou.aliyuncs.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86-%E5%8F%91%E5%B8%83%E6%96%87%E7%AB%A0.png',
        },{
          name:'提问',
          icon: 'http://xzgtupian.oss-cn-hangzhou.aliyuncs.com/%E9%97%AE%E7%AD%94.png',
        }],
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {
    },
    // 方法集合
    methods: {
      overlay(){
        this.$emit("onEvent",false)
      },
      onSelect(option) {
        if(option.name==="博文"){
          this.$router.push({name:'put_tquestions'})
          this.overlay()
        }
        if(option.name==="提问"){
          this.$router.push({name:'writing'})
          this.overlay()
        }
      },
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {
      Share(val){
        this.showShare = val
      },
      showShare(val){
        this.$emit('update:Share', val);
      },
    },
  }
</script>

<style scoped lang='less'>
  /* @import url(); 引入公共css类 */
  .info{
    display: flex;
    span{
      margin: 2.3vw;
      font-weight: 700;
      font-size:4vw
    }
  }

</style>
<style>
.van-share-sheet__icon{
    width: 10vw;
    height: 10vw;
  }
</style>
