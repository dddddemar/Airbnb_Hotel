<template>
    <div class="city">
        <div class="top-page">
        <van-search v-model="searchValue"  placeholder="请输入位置" shape="round" show-action @cancel="clickCancel"/>
        <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- 服务器写死的写法 -->
        <!-- <van-tab :title="allCity?.cityGroup?.title"></van-tab>
        <van-tab :title="allCity?.cityGroupOverSea?.title"> </van-tab> -->
        <!-- 利用for循环灵活的写法 -->
        <template v-for="(value,key) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
        </template>
        </van-tabs>
    </div>
    <!-- 将组件抽离出去显示 -->
       <div class="content">
        <city-group :group-data="allCities[tabActive]"></city-group>
       
       </div>
    </div>
    
</template>

<script setup>
import {ref, toRefs} from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/store/module/city'
import cityGroup from './cpns/cityGroup.vue'

// import {getCityAll} from '@/service/modules/city'

const searchValue=ref("")

const router=useRouter()

//取消框的绑定事件
function clickCancel(){
    router.back()
}

//标签导航栏的切换
const tabActive=ref()

//网络请求，获取所有城市的数据

// HYRequest.get({
//     url:"/city/all"
// }).then(res=>{
//     console.log(res)
// })

//利用city.js中封装后的网络请求来写
// const allCity=ref({})
// getCityAll().then(res=>{
//    allCity.value=res.data
// })

//直接调用pinia中的请求

const cityStore=useCityStore()
const {fetchAllCities}=cityStore
cityStore.fetchAllCities()

//将allCities获取
const {allCities}=toRefs(cityStore)

    
    
</script>

<style lang="less" scoped>

//修改固定定位的样式使搜索和标签固定
// .top-page{
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
// }
// .content{
//     margin-top: 97px;
// }

//直接设置局部滚动
.city{
    .top-page{
        position: relative;
        z-index: 9;

    }
    .content{
    height: calc(100vh - 98px);
    overflow-y: auto;
}
}


</style>