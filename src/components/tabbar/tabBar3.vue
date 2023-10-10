<template>
    <div class="tabbar">
  <van-tabbar v-model="currentIndex"  active-color="#ff9854">

    <template v-for="(item,index) in tabList" :key="index">
        <!-- 绑定路由 -->
        <van-tabbar-item  :to="item.path">
            <span>{{ item.text }}</span>
            <template #icon>
                <img v-if="index!==currentIndex" :src="getAssetURL(item.image)" alt="">
                <img v-else :src="getAssetURL(item.imageActive)" alt="">
            </template>
        </van-tabbar-item>
      </template>
       

  <!-- <van-tabbar-item>
    <span>首页</span>
    <template #icon>
        <img v-if="index!==currentIndex" :src="getAssetURL('tabbar/tab_home.png')" alt="">
            <img v-else :src="getAssetURL('tabbar/tab_home.png')" alt="">
    </template>
    
    
    </van-tabbar-item>
  <van-tabbar-item icon="search">收藏</van-tabbar-item>
  <van-tabbar-item icon="location-o">订单</van-tabbar-item>
  <van-tabbar-item icon="user-o">信息</van-tabbar-item> -->
</van-tabbar>
      <!-- <template v-for="(item,index) in tabList" :key="index">
        <div class="tabbar-item" :class="{active:currentIndex ===index}" @click="indexClick(index,item)">
            <img v-if="index!==currentIndex" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
            <span class="text">{{ item.text }}</span>
        </div>
      </template> -->
    </div>
</template>

<script setup>
import tabList from "@/assets/data/tabbar.js"
import getAssetURL from "@/utils/getAssetURL.js"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"


const currentIndex=ref(0)
//在别的页面，刷新页面后，tabbar的图标和路由保持一致
const route=useRoute()
watch(route,(newRoute)=>{
  const index=tabList.findIndex(item=>item.path===newRoute.path)
  currentIndex.value=index
})


   
</script>

<style lang="less" scoped>
.tabbar{
    img{
        height: 31px;
    }
}

</style>