<template>
    <div class="swipe">
        <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
            <template v-for="(item) in houseDetails" :key="item">
                <van-swipe-item class="item">                                                                                                                                                                                                                           in image" :key="index">
                <img  :src="item.url" alt=" ">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
            <div class="indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
        </van-swipe>
    </div>
    
    
</template>

<script setup>


const props=defineProps({
    houseDetails:{
        type:Array ,
        default:()=>[]
    }
})
   
</script>

<style lang="less" scoped>

.my-swipe .van-swipe-item {
    color: white;
    height: 200px;
    .indicator{
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
    }
   .item{
    img{
        width: 100%;
        height: 300px;
    }
   }
    
  }

</style>