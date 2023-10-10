<template>
    <div class="city-group">

<van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="indexList">

    <!-- 热门部分 -->
    <van-index-anchor index="热门" />
    <div class="list1">
        <template v-for="(city,index) in groupData.hotCities" :key="index">
            <div class="city" @click="cityClick(city)">
                {{ city.cityName }}
            </div>
        </template>
    </div>


    <!-- 城市页面主体部分 -->
    <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
    <div class="list2">
        <template v-for="(city,index) in group.cities" :key="index">
            <van-cell :title="city.cityName"  @click="cityClick(city)"/>
        </template>
    </div>
    </template>
</van-index-bar>

        <!-- 不用组件的写法 -->
        <!-- <template v-for="(group,index) in groupData.cities" :key="index">
            <div class="group-item">
                <h2 class="title">{{ group.group }}</h2>
                <div class="list">
                    <template v-for="(city,index) in group.cities" :key="index">
                            <div class="city">{{ city.cityName }}</div>
                    </template>
                </div>
            </div>
        </template> -->
    </div>
</template>

<script setup>
import { computed } from "vue"
import useCityStore from '@/store/module/city'
import { useRouter } from "vue-router";


const props=defineProps({
    groupData:{
        type:Object,
        default:()=>({})
    }
})

//获取右侧索引
const indexList =computed(()=>{
    const list=props.groupData.cities.map(item=>item.group)
    list.unshift("#")
    return list
})
//将选择的城市信息保存到库
const cityStore=useCityStore()

const router=useRouter()

function cityClick(city){
    console.log(city)
    cityStore.currentCity=city
    router.back()
}
   
</script>

<style lang="less" scoped>
.list1{
    display: flex;
    justify-content: space-around;
    padding: 5px;
    padding-right: 25px;
    flex-wrap: wrap;
    .city{
        width: 70px;
        height: 28px;
        border-radius: 14px;
        background-color: #fff4ec;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        color: #000;
        margin-top: 5px;
        
    }
}


</style>