<template>
    <div class="favor">
        <template v-for="(item,index) in 100" :key="index">
            <div>
                {{ item }}
            </div>
        </template>

    </div>
</template>

<script setup>

   
</script>

<style lang="less" scoped>
.favor{
    height: 93vh;
    overflow-y: auto;
    color: orange;
}

</style>