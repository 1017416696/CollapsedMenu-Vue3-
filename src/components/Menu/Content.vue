
<template>
  <component
      class="icon-hover fold"
      :is="isCollapse ? 'icon-menu-fold-one' : 'icon-menu-unfold-one'"
      theme="filled"
      size="21"
      :strokeWidth="4"
      fill="#666"
      @click="handleCollapse"
  />

</template>

<script>
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

    return{
      handleCollapse
    }
  }
}
</script>

<!--<script setup>-->
<!--//-->
<!--//defineProps({-->
<!--//  isCollapse:{-->
<!--//    type: Boolean,-->
<!--//    default:false-->
<!--//  }-->
<!--//})-->

<!--////声明事件-->
<!--//const emit = defineEmits(['handleCollapse'])-->
<!--//-->
<!--////触发事件-->
<!--//const handleCollapse = () =>{-->
<!--//  emit('handleCollapse')-->
<!--//}-->

<!--</script>-->


<style scoped>
.fold{
  padding-left: 5px;
  cursor: pointer;
}
</style>
