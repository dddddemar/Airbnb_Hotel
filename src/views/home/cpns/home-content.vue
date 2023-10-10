<template>
   <div class="home-list">
      

        <h2 class="title">热门精选</h2>
      
        <div class="list">

         <template v-for="(item,index) in houseList" :key="index">
            <!-- 根据传入值类型的不同，显示不同的样式 -->
            <type3 v-if="item.discoveryContentType === 9" :itemData="item.data" @click="itemClick(item.data.houseId)"></type3>
            <type9 v-if="item.discoveryContentType === 3" :itemData="item.data" @click="itemClick(item.data.houseId)"></type9>
         </template>

        </div>
       
        
       <br><br><br>
       </div>
</template>

<script setup>
import useCityStore from '../../../store/module/city';
import { onMounted,computed } from 'vue'; 
import type9 from '../../../components/typeHouselist/type9.vue';
import type3 from '../../../components/typeHouselist/type3.vue';
import { useRouter } from 'vue-router';

const router=useRouter()
const cityStore=useCityStore()

const houseList = computed(() => {
  return cityStore.houselist;
});


onMounted(async () => {
      // 执行异步操作
      await cityStore.fetchHouselist()
      console.log(houseList.value)})


function itemClick(houseId){
    router.push("/detail/" + houseId)

}


  
</script>

<style lang="less" scoped>
.list{
   display: flex;
   flex-wrap: wrap;
}

</style>