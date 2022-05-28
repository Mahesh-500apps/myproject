<template>
<div>
    <parentFile :header="header"/>
    <grandChild :header="header"/>
  </div>
</template>
<script>
import parentFile from './parentFile.vue';
import grandchild from './grandChild.vue';
export default {
  name: "parentChild",
  
  components: {
    parentFile, grandchild
  },
  data (){
    return {
      header:'initial header'
    }
  }
}
</script>
