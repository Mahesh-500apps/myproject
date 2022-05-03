<template>
<div>
    <button type="submit" @click="fun">Click</button>
</div>
</template>
<script>
export default{
    name:"MaH",
    data(){
        return{
        data:["shiva","sanju","rajKumar","lovely"]
    }
},
methods:{
    fun(){
        const result= this.data.filter((value)=>{
                return value.includes("ve")
            });
            console.log(result);
            }
}
}
</script>