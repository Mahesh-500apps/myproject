<template>
<div>
<!-- <p>{{items}}</p> -->
    <button type="submit" @click="fun">Click</button>
</div>
</template>
<script>
export default{
    name:"MahI",
    data(){
        return{
            array:["siva","sanju","mani"],
        }
    },
        methods:{
            fun(){
                 this.array.forEach((value,index)=>{ 
                 

                  console.log(value,index)
            });  
            
            }
    }
}


</script>

    
