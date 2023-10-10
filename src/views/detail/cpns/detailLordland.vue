<template>
  <detail-section>
    <div class="intro">
        <div class="top">
            <img :src="landLords.topScroll" alt="">
        </div>
        <div class="header">
            <div class="left">
                <div class="avatar">
                    <img :src="landLords.hotelLogo" alt="">
                </div>
                <div class="info">
                    <div class="name">{{ landLords.hotelName }}</div>
                    <div class="tags">
                        <template v-for="(item,index) in landLords.hotelTags" :key="index">
                            <div class="item" :style="{color: item.tagText.color}">
                                <span>{{ item.tagText.text }}</span>
                                <span v-if="index !== landLords.hotelTags.length -1" class="divider">|</span>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </detail-section>
</template>

<script setup>
import detailSection from '../../../components/detail/detailSection.vue';


const props=defineProps({
    landLords:{
        type:Array ,
        default:()=>[]
    }
})
</script>



<style lang="less" scoped>
.top{
img{
    width: 100%;
}
}
.tags{
    display: flex;
    .item{
        flex:1
    }
}

</style>