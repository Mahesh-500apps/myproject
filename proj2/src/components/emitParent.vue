<template>
 <div> 
     <b-table :items="items" :fields="fields"/> 
     <emitChild @check="fun"></emitChild> 
</div>
</template>
 <script> 
 import emitChild from '../components/emitChild' 
 export default
 { name:"EmiT", 
 components:{
      emitChild, 
      }, 
      data(){
           return{ 
               fields:['id','name','dept'] ,
                items:[ {id:'01',name:'Navya',dept:'Developer'}, 
                {id:'02',name:'Rani',dept:'HR'}, 
                {id:'03',name:'Lakshmi',dept:'Developer'}, 
                {id:'04',name:'anasuya',dept:'Sales'}, 
                ], 
                fname:"Navya", lname:"Doddi" 
                } 
                },
                 methods:{ 
                     fun(){ 
                         console.log("sample check emit"); 
                         }
                          } 
                          } 
</script>