<template> 
<div class="hello"> 
    <!--<EmitCheck /> 
    <apple></apple> 
    <second></second> -->
    <child :message="message" :name="name" ref="ref" :number="number" :mantra="mantra"></child>
    
     <button @click="click()">submit</button> 
    </div> 
    </template> 
    <script> 
    import child from '../components/childprop.vue'
    export default {
         name: 'HelloWorld', 
components: 
{ child, }, 
data(){
     return{ 
    message:"vue components", 
     name:"navya", 
     number:"1140", 
     Items:[
      {age:20,firstname:"navya",lastname:"doddi"},
     {age:24,firstname:"chaitrika",lastname:"lagadapati"} 
     ],
      mantra:"mantra technologies" 
      } 
      }, 
      mounted: 
      function(){ 
          
           },methods:{
            click(){ 
                     this.$refs.ref.fun(); 
                     this.$refs.refo.Items; 
                     console.lo("i did it") 
                     }
                      } } 
            </script> 