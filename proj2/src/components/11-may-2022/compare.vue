<template>
<div>
    <button @click="fun">click</button>
    <p>{{result}}</p>
    </div>
</template>
<script>
export default{
    name:"MaHi",
    data() {
        return{
            result:" "
        }
    },
    methods:{
        fun(){
        var str1="life";
        var  str2="file";
        this.result=(str1.length===str2.length && str1.split("").sort().join() == str2.split("").sort().join()); 

        }

    }

}
</script>