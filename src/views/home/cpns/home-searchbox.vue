<template>
   
           <div class="location">
                <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
                <div class="position" @click="getPosition">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
                </div>
           </div>
           


            <div class="data-range">
                <div class="start">
                    <div class="data">
                        <span class="tip">入住</span>
                        <span class="time">{{ startDate }}</span>
                    </div>
                </div>
                <div class="stay">
                    共{{ differenceDays }}晚
                </div>
                <div class="end">
                    <div class="data">
                        <span class="tip">退房</span>
                        <span class="time">{{ endDate }}</span>
                    </div>
                </div>
            </div>
            <!-- 日历部分 -->
            <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" @confirm="onConfirm" />

            <div class="price">
                <div class="start">价格不限</div>
                <div class="end">人数不限</div>
            </div>

            <div class="keyWords"><div class="key">关键字/位置/民宿</div></div>

            <div class="hot-suggest">
                <template v-for="(item,index) in hotSuggest" :key="index">
                    <div class="item" :style="{color:item.tagText.color,background:item.tagText.background.color}">
                        {{ item.tagText.text }}
                    </div>
                </template>
            </div>

            <div class="search-btn">
                <div class="btn" @click="clickToSeach">
                    开始搜索
                </div>
            </div>
            




      
</template>

<script setup>
import { computed, ref, toRefs,watchEffect,onMounted } from "vue";
import { useRouter } from "vue-router"
import useCityStore from "../../../store/module/city";
import {formatMonthDay} from "@/utils/formatData"
import {calculateDateDifference} from "@/utils/formatDateAbstract"


const router=useRouter()

function getPosition(){
    navigator.geolocation.getCurrentPosition(res=>{
        console.log("获取位置成功:",res)
    },err=>{
        console.log("获取位置失败",err)
    })
}

function cityClick(){
    router.push("/city")

}

const {currentCity}=toRefs(useCityStore())

//日期处理
const nowDate= new Date()
const newDate= new Date()
newDate.setDate(nowDate.getDate()+1)

const showCalendar=ref(true)

const startDate=ref(formatMonthDay(nowDate))
const endDate=ref(formatMonthDay(newDate))
//日期差值
const differenceDays=ref(1)

function onConfirm(value){
    const selectStartData=value[0]
    const selectendData=value[1]
    
    startDate.value=formatMonthDay(selectStartData)
    endDate.value=formatMonthDay(selectendData)

    //将两个值放入仓库
    cityStore.startDateStr=startDate.value
    cityStore.endDateStr=endDate.value

    differenceDays.value=calculateDateDifference(selectStartData,selectendData)
    //点击后隐藏
    showCalendar.value=false
}
//热门建议处理

const cityStore=useCityStore()

const hotSuggest = computed(() => {
  return cityStore.hotSuggests;
});


onMounted(async() => {
      // 执行异步操作
      await cityStore.fetchAllHotSuggests()
      console.log(hotSuggest.value)})

// watchEffect(() => {
//   console.log(hotSuggest.value);
// });

//跳转到哪seach路由,并利用query传入路由值
function clickToSeach(){
    router.push({
        path:"/search",
        query:{
            startDate:startDate.value,
            endDate:endDate.value,
            currentCity:currentCity.value.cityName

        }
    })
}





</script>

<style lang="less" scoped>
.location{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;}
    
    .city{
        flex: 1;
    }
    .position{
        width: 74px;
        display: flex;
        .text{
            font-size: 12px;
        }
        img{
            margin-left: 5px;
            width: 18px;
            height:18px;
        }

    }
    .data-range {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    border-bottom: 1px solid var(--primary-color);
    border-top: 1px solid var(--primary-color);
        

    .start,
    .stay,
    .end {
    flex: 1;
    flex-direction: column;
    margin-top: 5px;
    }
    .stay{
        font-weight: bolder;
        margin-top: 14px;
    }

    .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .tip {
    margin-bottom: 5px;
    font-size: 12px;
    }
    .time{
        font-weight: bolder;
    }}

    .price{
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--primary-color);
        
        .start
        .end
        {
        margin-top: 5px;
        align-content: center;
       
       
        }
        .start{
            flex: 2;
           margin-left: 10%;
           font-size: 5px;
           font-weight: 300;
            
        } 
        .end{
            flex: 1;
            margin-left: 15%;
            font-size: 5px;
            font-weight: 300;
          
    }
    }
    .keyWords{
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--primary-color);
        .key{
            margin-left: 20px;
        }

    }
    .hot-suggest {
  display: flex;
  flex-wrap: wrap;
}

.item {
  padding: 4px 8px;
  margin: 4px;
  border-radius: 14px;
  font-size: 12px;
  white-space: nowrap; /* 防止换行 */
  min-width: max-content; /* 根据内容自适应宽度 */
}
.search-btn{
        .btn{
            margin-left: 15px;
            width: 342px;
            height: 38px;
            max-height: 50px;
            font-weight: 500;
            font-size: 18px;
            line-height: 38px;
            text-align: center;
            border-radius: 20px;
            color: #fff;
            background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
        }
}


    




</style>