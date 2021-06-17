<!-- 首页 -->
<template>
  <div>
    <!-- 头部标签 -->
    <header class="head">
      <!-- 搜索 -->
      <van-sticky>
        <van-search
          shape="round"
          style="width: 100%"
          placeholder="搜索地点、美食、景点等"
          clearable
          show-action
        >
          <!--搜索按钮-->
          <template #action>
            <div class="search_btn">搜索</div>
          </template>
        </van-search>
      </van-sticky>
    </header>

    <!-- 内容标签 -->
    <article>
       <!-- 导航栏 -->
      <van-tabs v-model="navigation" @change="navigation_chang" swipeable class="van_tabs">
        <van-tab :title="item.classification" v-for="item in tabList" :key="item.id">
          <div v-if="classification === item.classification ? true : false" v-for="item in dataList" :key="item.id">
            <!--刷新效果-->
            <van-pull-refresh
              v-model="isLoading"
              @refresh="onRefresh"
              success-text="刷新成功"
            >
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <m-follow v-if="classification === '关注' ? true : false"></m-follow>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
    </article>
  </div>
</template>

<script>
  import MFollow from './components/follow/follow.vue'
  export default {
    // import引入的组件需要注入到对象中才能使用
    components: {MFollow},
    // 这里存放数据
    data () {
      return {
        navigation:0,
        // 导航栏列表
        tabList:[{
          id:0,
          classification:'关注'
        },{
          id:1,
          classification:'推荐'
        },{
          id:2,
          classification:'热榜'
        },{
          id:3,
          classification:'问答'
        }],
        // 导航栏对应的内容
        dataList:[{
          id:0,
          classification:'关注',  // 分类
          list:[{
            head_portrait_url:'', // 头像
            name:'测试',  // 名称
            release_time:'5小时以前',  // 发布时间
            title:'这是我发布的标题', // 标题
            picture_url:'', // 图片
            comments:'评论',  // 评论数
            fabulous:'点赞',  // 点赞数
          }]
        },{
          id:1,
          classification:'推荐',
          text:'222',
        },{
          id:2,
          classification:'推荐',
          text:'333',
        },{
          id:3,
          classification:'热榜',
          text:'444',
        },{
          id:4,
          classification:'问答',
          text:'555',
        }],
        classification:'', // 分类

        isLoading: false, // 下拉刷新

        loading:false,  // 上拉显示
        finished: false,
      }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    mounted () {
      this.classification= this.tabList[0].classification
    },
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
      },
      // 导航栏改变事件
      navigation_chang(index){
        this.classification= this.tabList[index].classification
      },
      //上拉刷新
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      //下拉显示
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          if (this.dataList.length) {
            this.finished = true;
          } else if (this.dataList.length == 0) {
            this.finished = true;
          }
        }, 1000);
      },
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
  }
</script>

<style scoped lang="less">
  .head{
    position: relative;
    z-index: 999;
    .search_btn{
      color: red;
    }
  }
</style>
