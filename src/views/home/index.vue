<template>
  <div id="home">
    <nar-bar currentColor='pink'>
      <div class='bar-center' slot='center'>购物车</div>
    </nar-bar>
    <el-carousel :interval="5000" arrow="always" height='200px'>
      <el-carousel-item v-for="(item,index) in banner" :key="index">
          <img :src='item.image' />
      </el-carousel-item>
    </el-carousel>
    <recommend-view :recommend='recommend'></recommend-view>
    <tab-control :titles='titles' @tabItemClick='tabItemClick'/>
    <tabList :tabList='tabList[currentType].list'/>
  </div>
</template>

<script>
import { homeData } from '@/api/home'

import NarBar from '@/components/navbar/Navbar.vue'
import RecommendView from './childComps/recommendView.vue'
import TabControl from '@/components/tabControl/TabControl.vue'
import TabList from '@/components/tabList/TabList.vue'

export default {
    components: {
      NarBar,
      RecommendView,
      TabControl,
      TabList
    },
    data() {
        return {
          banner:[],
          recommend: [],
          titles: ['流行','新款','精品'],
          currentType: 'cat',
          tabList:{
            'cat': {
              page: 0,
              list: [
                {'id': 0,"image":require('@/assets/img/cat/cat1.jpg'),'detail': 'Cat1'},
                {'id': 1,"image":require('@/assets/img/cat/cat2.jpg'),'detail': 'Cat2'},
                {'id': 2,"image":require('@/assets/img/cat/cat3.jpg'),'detail': 'Cat3'},
                {'id': 3,"image":require('@/assets/img/cat/cat4.jpg'),'detail': 'Cat4'},
                {'id': 4,"image":require('@/assets/img/cat/cat5.jpg'),'detail': 'Cat5'},
                {'id': 5,"image":require('@/assets/img/cat/cat6.jpg'),'detail': 'Cat6'},
                {'id': 6,"image":require('@/assets/img/cat/cat7.jpg'),'detail': 'Cat7'},
                {'id': 7,"image":require('@/assets/img/cat/cat8.jpg'),'detail': 'Cat8'}
              ]
            },
            'dog':{
              page: 0,
              list: [
                {'id': 0,"image":require('@/assets/img/dog/dog1.jpg'),'detail': 'Dog1'},
                {'id': 1,"image":require('@/assets/img/dog/dog2.jpg'),'detail': 'Dog2'},
                {'id': 2,"image":require('@/assets/img/dog/dog3.jpg'),'detail': 'Dog3'},
                {'id': 3,"image":require('@/assets/img/dog/dog4.jpg'),'detail': 'Dog4'},
                {'id': 4,"image":require('@/assets/img/dog/dog5.jpg'),'detail': 'Dog5'},
                {'id': 5,"image":require('@/assets/img/dog/dog6.jpg'),'detail': 'Dog6'},
                {'id': 6,"image":require('@/assets/img/dog/dog7.jpg'),'detail': 'Dog7'},
                {'id': 7,"image":require('@/assets/img/dog/dog8.jpg'),'detail': 'Dog8'}
              ]
            },
            'tiger':{
              page: 0,
              list: [
                {'id': 0,"image":require('@/assets/img/tiger/tiger1.jpg'),'detail': 'Tiger1'},
                {'id': 1,"image":require('@/assets/img/tiger/tiger2.jpg'),'detail': 'Tiger2'},
                {'id': 2,"image":require('@/assets/img/tiger/tiger3.jpg'),'detail': 'Tiger3'},
                {'id': 3,"image":require('@/assets/img/tiger/tiger4.jpg'),'detail': 'Tiger4'},
                {'id': 4,"image":require('@/assets/img/tiger/tiger5.jpg'),'detail': 'Tiger5'},
                {'id': 5,"image":require('@/assets/img/tiger/tiger6.jpg'),'detail': 'Tiger6'},
                {'id': 6,"image":require('@/assets/img/tiger/tiger7.jpg'),'detail': 'Tiger7'},
                {'id': 7,"image":require('@/assets/img/tiger/tiger8.jpg'),'detail': 'Tiger8'}
              ]
            }
          }
        }
    },
    computed: {},
    watch: {},
    methods: {
        tabItemClick(data){
          switch(data) {
            case 0:
              this.currentType = 'cat'
              break;
            case 1: 
              this.currentType = 'dog'
              break;
            case 2:
              this.currentType = 'tiger'
              break;
          }
        }
    },
    created() {

      // 请求首页数据
      homeData().then(res =>{
        let realData = res.data
        this.banner = realData.banner.list
        this.recommend = realData.recommend.list
      }).catch(err =>{
        console.log(err)
      })
    },
    mounted() {
    },
}
</script>
<style scoped>
  #home {

    padding-top: 44px;
    padding-bottom: 49px;
  }

  #home a {

    padding: 40px 0;
  }

  .bar-center {

    font-size: 18px;
  }

  .el-carousel__item img {
    color: #475669;
    width: 100%;
    height: 200px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>