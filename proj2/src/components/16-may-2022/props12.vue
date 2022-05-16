<template> 
<div class="hello">
     <EmitCheck />  
     <child12 :message="message" :name="name" ref="ref" :number="number" :mantra="mantra"></child12> 
     <child12 :ref="refo"  :Items="Items"></child12>
      <button @click="click()">submit</button> 
      </div> 
</template> 
<script>  
import child12 from './child12' 

export default {
     name: 'HelloWorld',
      components: { child12 },
       data(){ 
           return{ message:"vue components", 
           name:"navya", 
           number:"1138", 
           Items:[ 
               {age:20,firstname:"navya",lastname:"doddi"}, 
               {age:24,firstname:"chaitrika",lastname:"lagadapati"} 
               ],
               mantra:"mantra technologies" 
               }
            },
            methods:{
                click(){
                    this.$refs.ref.fun();
                    this.$refs.refo.Items; 
                    console.log("i did it") 
                }
            }
        } 
 </script> 