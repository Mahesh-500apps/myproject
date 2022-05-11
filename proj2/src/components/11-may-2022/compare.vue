<template>
<div>
   <p>string1: {{str1}}</p>
    <p>string2 :{{str2}}</p>
    <button @click="fun">click</button>
    <p>{{result}}</p>
    <p></p>
    </div>
</template>
<script>
export default{
    name:"MaHi",
    data() {
        return{
             str1:"Life",
             str2:"File",
            result:" "
        }
    },
    methods:{
        fun(){
            var string1=this.str1.toLowerCase();
            var string2=this.str2.toLowerCase()
       
        this.result=(string1.length===string2.length && string1.split("").sort().join() == string2.split("").sort().join()); 

        }

    }

}
</script>