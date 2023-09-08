<template>
    <div class="home">
        <h2>Home</h2>
        <van-button>默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<van-rate
  v-model="value"
  :size="25"
  color="#ee0a24"
  void-icon="star"
  void-color="#eee"
/>

    </div>
</template>

<script setup>
import { ref } from "vue";

const value=ref(3.3)
   
</script>

<style lang="less" scoped>

</style>