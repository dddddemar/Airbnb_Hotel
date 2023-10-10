<template>
  <div class="home">
        <div class="search-box" v-if="showTopSearch">
            <top-search></top-search>
        </div>
        <home-bar></home-bar>

        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>

       <home-searchbox></home-searchbox>

       <home-categories></home-categories>

       <home-content></home-content>

       


       
    </div>
</template>

<script setup>
import homeBar from './cpns/home-bar.vue';
import homeSearchbox from './cpns/home-searchbox.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useCityStore from '../../store/module/city';
import topSearch from './cpns/top-search.vue'
import { onMounted, onUnmounted, ref } from 'vue';



const cityStore=useCityStore()
const showTopSearch=ref(false)
const scrollListenHarder=()=>{
    //第一个值加第二个值若大于等于第三个值，则到底部了,监听窗口滚动
    const clientHeight=document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight=document.documentElement.scrollHeight
    

    if (scrollTop >= 1000) {
    showTopSearch.value = true
   } else {
    showTopSearch.value = false
    }

    if(clientHeight+scrollTop>=scrollHeight){
        cityStore.fetchHouselist()
    }
    
}
onMounted(()=>{
    window.addEventListener("scroll",scrollListenHarder)
})
onUnmounted(()=>{
    window.removeEventListener("scroll",scrollListenHarder)
})








   
</script>

<style lang="less" scoped>
.search-box{
    position: fixed;
    z-index: 9;
}
.banner{
img{
    width: 100%;
}}



</style>