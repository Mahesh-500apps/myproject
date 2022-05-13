<template>
    <div>
        <input type="text" ref="input">
        <button @click="fun">click</button>
        <p>{{output}}</p>
        </div>
</template>
<script>

export default{
    name:"ReF",
    data() {
        return{
            output:"my name is" 

        }
        
    },
    methods:{
        fun(){
            console.log(this.$refs.input.value)

            this.output=this.$refs.input.value;
        }
    }
}
</script>
