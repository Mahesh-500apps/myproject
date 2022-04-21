<template>
<div>
<!-- <p>{{items}}</p> -->
    <button type="submit" @click="fun">Click</button>
</div>
</template>
<script>
export default{
    name:"MaH",
    data(){
        return{
        data:["ajay","bindu","sunny"]
    }
},
methods:{
    fun(){
        const result= this.data.filter((value)=>{
                return value.includes("a")
            });
            console.log(result);
            }
}
}
</script>