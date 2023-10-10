<template>
    <div class="facility-inner">
      <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
        <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
          <div class="head">
            <img :src="item.icon" alt="">
            <div class="text">{{ item.groupName }}</div>
          </div>
          <div class="list">
            <template v-for="(iten, indey) in item.facilitys.slice(0, 4)" :key="indey">
              <div class="iten">
                <i class="icon_check icon-align"></i>
                <span>{{ iten.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  defineProps({
    houseFacility: {
      type: Object,
      default: () => ({})
    }
  })
  </script>
  
  <style lang="less" scoped>
  .facility-inner {
    display: flex;
    flex-direction: column;
  }
  
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .text {
    margin-top: 6px;
  }
  
  .list {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  
  .iten {
    display: flex;
    align-items: center;
  }
  
  .icon-align {
    align-self: flex-start;
  }
  
  .iten:nth-child(2n) {
    margin-left: 10px;
  }
  </style>