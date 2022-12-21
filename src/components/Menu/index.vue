<script setup>
import {
  Location,
  Setting,
} from '@element-plus/icons-vue'

defineProps({
  isCollapse:{
    type: Boolean,
    default:false
  }
})

</script>

<script>
export default {
  name:'Menu'
}
</script>

<template>
  <el-menu
      default-active="2"
      background-color="#545c64"
      active-text-color="#ffd04b"
      text-color="#fff"
      class="el-menu-vertical"
      :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>组件</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <template #title>错误页面</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
