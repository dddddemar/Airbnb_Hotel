<template>
    <div class="house-item" @click="itemClick">
        <div class="item-linner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="new">{{ itemData.finalPrice }}</div>
                    <div class="old">{{ itemData.productPrice }}</div>
                    <div class="tip">{{ itemData.priceTipBadge.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props=defineProps({
    itemData:{
        type:Object,
        default:()=>{}
    }

})

    
</script>

<style lang="less" scoped>
// .house-item{
//     width: 50%;
//     .item-linner{
//         position: relative;
//         margin: 5px;
//         background: #fff;
//         border-radius: 6px;
//         overflow: hidden;
        
//         display: flex; /* 使用 Flexbox 布局 */
//         flex-direction: column; /* 垂直排列子元素 */

//         .cover{
//             img{
//                 width: 100%;
//             }
//         }
//         .info{
//             position: absolute;
//             bottom: 0;
//             padding: 8px 10px;
//             color: #fff;

//             .summary{
//                 font-size: 12px;
//             }
//             .name{
//                 margin: 5px 0;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 display: -webkit-box;
//                 -webkit-line-clamp: 2;
//                 -webkit-box-orient: vertical;
//             }
//             .price{
//                 display: flex;
//                 justify-content: space-between;
//                 margin-top: 10px;
//             }
//         }
//     }
// }
.house-item {
  width: 50%;

  .item-linner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    display: flex; /* 使用 Flexbox 布局 */
    flex-direction: column; /* 垂直排列子元素 */

    .cover {
      flex: 1; /* 占据盒子的一半空间 */
      img {
        width: 100%;
      }
    }
    .info {
      flex: 1; /* 占据盒子的一半空间 */
      padding: 8px 10px;
      

      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}

</style>