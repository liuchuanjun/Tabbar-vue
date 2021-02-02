<template>
  <div id="main-tabbar">
    <tabbar>
      <tabbar-item link='/home'>
        <img slot='item-icon' src="@/assets/img/tabBar/home.png">
        <img slot='item-icon-active' src="@/assets/img/tabBar/home-active.png">
        <div slot="item-title">首页</div>
      </tabbar-item>
      <tabbar-item link='/category'>
        <img slot='item-icon' src="@/assets/img/tabBar/fenlei.png">
        <img slot='item-icon-active' src="@/assets/img/tabBar/fenlei-active.png">
        <div slot="item-title">分类</div>
      </tabbar-item>
      <tabbar-item link='/shop'>
        <img slot='item-icon' src="@/assets/img/tabBar/shop.png">
        <img slot='item-icon-active' src="@/assets/img/tabBar/shop-active.png">
        <div slot="item-title">购物</div>
      </tabbar-item>
      <tabbar-item link='/profile'>
        <img slot='item-icon' src="@/assets/img/tabBar/profile.png">
        <img slot='item-icon-active' src="@/assets/img/tabBar/profile-active.png">
        <div slot="item-title">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import Tabbar from './tabbar/Tabbar.vue'
import TabbarItem from './tabbar/TabbarItem.vue'

export default {
  name: 'mainTabbar',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>