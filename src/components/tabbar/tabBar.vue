<template>
    <div class="tabbar">
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">首页</span>
        </div>
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_favor.png" alt="">
            <span class="text">收藏</span>
        </div>
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_order.png" alt="">
            <span class="text">订单</span>
        </div>
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_message.png" alt="">
            <span class="text">信息</span>
        </div>

    </div>
</template>

<script setup>
   
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
        .text{
            font-size: 12px;
            
        }
        img{
            width: 36px;

        }
    }
}
</style>