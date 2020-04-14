<template>
  <div class="NavBar">
      <div class="tabbar">
        <van-tabbar v-model="active" inactive-color="#777777" active-color="#6bc30d">
            <van-tabbar-item info="3"  v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
              <span>{{item.title}}</span>
              <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
            </van-tabbar-item>
          </van-tabbar>
          <!-- <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
            <van-tabbar-item info="3">
              <i class="iconfont iconshinshopyouxiang"></i>
              <span>环境监测</span>
            </van-tabbar-item>
            <van-tabbar-item icon="search" info="3">标签</van-tabbar-item>
            <van-tabbar-item icon="search" info="3">标签</van-tabbar-item>
            <van-tabbar-item icon="search" info="3">标签</van-tabbar-item>
          </van-tabbar> -->
      </div>
  </div>
  
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "环境监测",
          normal:
            require('../assets/img/navbar/hu0.png'),
          active:
            require('../assets/img/navbar/hu1.png')
        },
        {
          name: "/weatherstation",
          title: "气象站",
          normal:
            require('../assets/img/navbar/st0.png'),
          active:
            require('../assets/img/navbar/st1.png'),
        },
        
        {
          name: "/message",
          title: "信息",
          normal:
            require('../assets/img/navbar/me0.png'),
          active:
           require('../assets/img/navbar/me1.png'),
        },
        {
          name: "/resume",
          title: "我的",
          normal:
            require('../assets/img/navbar/re0.png'),
          active:
           require('../assets/img/navbar/re1.png'),
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
};
</script>
<style lang="less" scoped>
  
</style>


