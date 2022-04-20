<template>
  <div class="hello">
  <HelloWorld/>

  <h1>hello</h1>
    
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'HelloWorld',
  compnents:{
    HelloWorld,
  },
  props: {
    msg: String
  }
}
</script>