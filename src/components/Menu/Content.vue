<template>
  <div class="nav-bar-container">
    <div class="left-panel">
     <component
         class="icon-hover fold"
         :is="isCollapse ? 'icon-menu-fold-one' : 'icon-menu-unfold-one'"
         theme="filled"
         size="21"
         :strokeWidth="4"
         fill="#666"
         @click="handleCollapse"
     />
   </div>
    <div class="right-panel">
<!--      点击下拉项触发回调函数-->
      <el-dropdown @command="handleLanguage">
        <icon-translate heme="filled" size="18" fill="#666" :strokeWidth="4" />
        <template #dropdown>
          <el-dropdown-menu>
<!--            command相当于每一个下拉选项的标识-->
            <el-dropdown-item command="zh-cn" :disabled="language !== 'en'">简体中文</el-dropdown-item>
            <el-dropdown-item command="en" :disabled="language !== 'zh-cn'" divided>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

export default {
  name: "Content",
  props:{
    isCollapse:{
      type: Boolean,
      default:false
    }
  },
  emits:['handleCollapse'],
  setup(props,context){
    const handleCollapse = function (){
      context.emit('handleCollapse',props.isCollapse)
    }

    const i18n = useI18n()

    let language = ref(i18n.locale.value)

    const handleLanguage = (commandLang) =>{
//      console.log(commandLang)
//      console.log(language.value)
      language.value = commandLang
//      console.log(language.value)
      i18n.locale.value = commandLang
    }

    return{
      handleCollapse,language,handleLanguage
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar-container{
  position: relative;
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  padding-right: 20px;
  overflow: hidden;
  user-select: none;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.65);
  }
  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    cursor: pointer;
  }
}
</style>
