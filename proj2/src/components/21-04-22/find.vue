<template>
    <div>
            <button type="submit" @click="fun">Click</button>

        </div>
</template>
<script>

export default{
    name:"MahI",
    data() {
        return{
            
                    data:["ajay","bindu","sunny"]
        }
        
    },
    methods:{
        fun(){
        const result=this.data.find((value)=>{
            return value.includes("u")
        });
        console.log(result)
    }
    }
}

</script>
