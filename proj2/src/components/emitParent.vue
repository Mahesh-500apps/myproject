<template>
 <div> 
     
     <emitChild @check="fun"></emitChild> 
</div>
</template>
 <script> 
 import emitChild from "../components/emitChild.vue"
 export default
 { name:"EmiT", 
 components:{
      emitChild, 
      }, 
      data(){
           return{ 
                } 
                },
                 methods:{ 
                     fun(){ 
                         document.write("sample check emit"); 
                         }
                          } 
                          } 
</script>