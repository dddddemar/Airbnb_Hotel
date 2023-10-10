<template>
    <!-- 推荐栏目制作 -->
    <div class="categories">
        <template v-for="(item,index) in cateGories" :key="index">
           <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div>{{ item.title }}</div>
           </div>
        </template>
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import useCityStore from '../../../store/module/city';

//利用异步操作执行
const cityStore=useCityStore()
const cateGories = computed(() => {
  return cityStore.cateGories;
});

onMounted(async () => {
      // 执行异步操作
      await cityStore.fetchAllCategories()
      console.log(cateGories.value)})


   
</script>

<style lang="less"  scoped>
.categories{
   &::-webkit-scrollbar{
    display: none;
   }

    margin-top: 10px;
    display: flex;
    overflow-x:auto;
    .item{
        width: 70px;
        text-align: center;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 32px;
            height: 32px;
        }
    }
}

</style>