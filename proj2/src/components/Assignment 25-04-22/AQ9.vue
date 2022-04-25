<template>
<div>

    <button @click="fun">Click</button>
   
</div>
</template>
<script>
export default{
    name:"MahE",
    data(){
        return{
            data:['jay','ram','kalyan'],
            array:['kalyan','ram','jay'],
            res:[]

    }
 },
 methods:{
     fun(){
         this.res=[...this.data,...this.array];
         document.write(this.res)
     }
     
 },

}
</script>