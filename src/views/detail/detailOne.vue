<template>
    <div class="detail top-page">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickleft"></van-nav-bar>
        <detail-swipe :house-details="houseDetails?.topModule?.housePicture?.housePics"></detail-swipe>
    </div>
    <detail-infos :house-infos="houseDetails?.topModule"></detail-infos>
    <!-- 插槽显示slot显示content类似九宫格的布局 -->
    <div class="facility">
        <detail-section>
            <detail_nineblock :houseFacility="houseDetails?.dynamicModule?.facilityModule?.houseFacility"></detail_nineblock>
        </detail-section>
    </div>
    <div class="landlord">
        <detail-lordland :land-lords="houseDetails?.dynamicModule?.landlordModule">
        </detail-lordland>
        
    </div>
    <div class="map">
        <detail-map :position-info="houseDetails?.dynamicModule?.positionModule"></detail-map>
        <br>
        <br>
        <br>

    </div>
</template>

<script setup>
import { useRouter,useRoute } from "vue-router";
import useCityStore from "../../store/module/city";
import {computed,onMounted} from "vue"
import detailSwipe from "./cpns/detailSwipe.vue";
import detailInfos from "./cpns/detailInfos.vue";
import detailSection from "../../components/detail/detailSection.vue";
import detail_nineblock from "./cpns/detail_nineblock.vue";
import detailLordland from "./cpns/detailLordland.vue";
import detailMap from "./cpns/detailMap.vue";
const cityStore=useCityStore()
const route=useRoute()


const houseDetails = computed(() => {
  return cityStore.housedetails.mainPart;
});
onMounted(async () => {
      // 执行异步操作
      await cityStore.fetchAllDetails( route.params.id)
      console.log(houseDetails.value)})




const router=useRouter()

function onClickleft(){
    router.back()
}
  
</script>

<style lang="less" scoped>


</style>