<template>
  <detail-section>
    <div class="baiduMap" ref="mapRef"></div>
  </detail-section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import detailSection from '../../../components/detail/detailSection.vue';

const props=defineProps({
    positionInfo:{
        type:Object ,
        default:()=>({})
    }
})

const mapRef=ref()
onMounted(()=>{
    const map = new BMapGL.Map(mapRef.value);
    const point = new BMapGL.Point(props.positionInfo.longitude, props.positionInfo.latitude);

    map.centerAndZoom(point, 15); 
    const marker=new BMapGL.Marker(point);
    map.addOverlay(marker);

})

</script>

<style lang="less" scoped>
.baiduMap{
height: 300px;
width: 100%;
}

</style>