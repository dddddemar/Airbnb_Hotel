<!-- 如何修改子组件van-table-item内的icon的样式 -->
<template>
    <div class="tabbar">
  <van-tabbar v-model="currentIndex"  active-color="#ff9854">

    <template v-for="(item,index) in tabList" :key="index">
       
        <van-tabbar-item  :to="item.path" icon="home-o">
            <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
</van-tabbar>
    </div>
</template>

<script setup>
import tabList from "@/assets/data/tabbar.js"
import { ref } from "vue"
const currentIndex=ref(0)
</script>
<style lang="less" scoped>
.tabbar{
    //利用deep选择器将该组件下的组组件的样式修改
   :deep(.van-tabber-item__icon){
    font-size:50px
   }
}

</style>