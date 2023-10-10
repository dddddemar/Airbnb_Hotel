<script setup>

import { useRoute } from "vue-router";
import {computed} from "vue"
import tabBar from "./components/tabbar/tabBar3.vue";
import loadingOne from "./components/loading/loadingOne.vue";
import useCityStore from "./store/module/city";

const route= useRoute()

const cityStore=useCityStore()
const isLoading = computed(() => {
  return cityStore.isLoading;
});




 </script>

<template>
  <!-- 切完 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- 利用v-if的route来控制 -->
    <tab-bar v-if="! route.meta.hideTabBar"></tab-bar>
    <loading-one v-if="isLoading"></loading-one>
    
  
</template>

<style scoped>


</style>
