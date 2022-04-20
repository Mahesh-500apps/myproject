<template> 
<div class="hello"> 

    <child :name="name" ref="ref1" ></child>
    
     <button @click="click()">submit</button> 
</div> 
</template>
<script>
import child from './child6.vue'

export default{
     name: "MahI", 
components: 
{ child, }, 
data(){
     return{ 
     name:"mahesh", 
      
      } 
      },mounted: 
      function(){ 
          
           },
      methods:{
            click(){ 
                     this.$refs.ref1.fun();
                     
                     }
                      } } 
            </script> 




        