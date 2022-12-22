<script setup>
import Menu from "@/components/Menu/index.vue"
import Content from "@/components/Menu/Content.vue";
import {ref} from "vue";

//数据必须是响应式的
const isCollapse = ref(false)

const handleCollapse = (flag) => {
  console.log(flag)
  return isCollapse.value = !isCollapse.value
}

</script>

<template>
  <div class="body-container">
    <Menu :isCollapse="isCollapse"/>
    <Content @handleCollapse="handleCollapse" :is-collapse="isCollapse"/>
  </div>
</template>

<style scoped>
.body-container{
  display: flex;
}
</style>
