<script setup>
import {
  Location,
  Setting,
} from '@element-plus/icons-vue'

import {useI18n} from "vue-i18n";
const {t} = useI18n()
console.log(useI18n())

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
  <el-scrollbar height="100vh">
    <el-menu
        default-active="2"
        background-color="#293246"
        active-text-color="#ffd04b"
        text-color="#fff"
        class="el-menu-vertical"
        :collapse="isCollapse"
    >
      <el-menu-item index="1">
        <el-icon><House /></el-icon>
        <template #title>{{t('route.home')}}</template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{t('route.components')}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">{{t('route.comp1')}}</el-menu-item>
          <el-menu-item index="2-2">{{t('route.comp2')}}</el-menu-item>
          <el-menu-item index="2-3">{{t('route.comp3')}}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title>{{t('route.errorPages')}}</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
