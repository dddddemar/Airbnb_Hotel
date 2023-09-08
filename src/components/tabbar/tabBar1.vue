<template>
    <div class="tabbar">
      <template v-for="(item,index) in tabList" :key="index">
        <div class="tabbar-item" :class="{active:currentIndex ===index}" @click="indexClick(index,item)">
            <img v-if="index!==currentIndex" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
            <span class="text">{{ item.text }}</span>
        </div>
      </template>
    </div>
</template>

<script setup>
import tabList from "@/assets/data/tabbar.js"
import getAssetURL from "@/utils/getAssetURL.js"
import { ref } from "vue"
import { useRouter } from "vue-router";

const currentIndex=ref(0)
//点击以下修改路由，利用编程式导航  
const router=useRouter()
function indexClick(index,item){
    currentIndex.value=index
    router.push(item.path)
    
}
   
</script>

<style lang="less" scoped>
.tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: solid orange 5px;
    .tabbar-item{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
// 导入引用的常量
        &.active{
            color:var(--primary-color);
        }
        .text{
            font-size: 12px;
            
        }
        img{
            width: 36px;

        }
    }
}
</style>