<template> 
<div class="hello"> 
    <EmitCheck /> 
    <apple></apple> 
    <second></second> 
    <props :message="message" :name="name" ref="ref" :number="number" :mantra="mantra">
        </props> <props :message="message" :name="name" ref="refo" :number="number" :Items="Items">
            </props> hello world <button @click="click()">submit</button> 
    </div> 
    </template> 
            <script> 
import apple from '../First' 
import second from '../second' 
import props from '../props' 
import EmitCheck from '@/views/ParentClass.vue' 
import { eventBus } from '../main.js' 
export default 
{ name: 'HelloWorld', 
components: 
{ apple, second, props, EmitCheck, }, 
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
      }, mounted: function(){ 
          eventBus.$on("busEmitCheck",
          (data)=>{ console.log("Bus on called",data); 
          })
           },
            methods:{
                 click(){ 
                     this.$refs.ref.fun(); 
                     this.$refs.refo.Items; 
                     console.log("i did it") 
                     }
                      } } </script> <!-- Add "scoped" attribute to limit CSS to this component only --> <style scoped> h3 { margin: 40px 0 0; } ul { list-style-type: none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color: #42b983; } </style>