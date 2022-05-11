<template>
<div>
    <form @click="fun">
        string1:<input id="d1" type="string" placeholder="enter a string"><br/>
        <br/>
        string2:<input id="d2" type="string" placeHolder="enter a string"><br/>
        <br/>
    <button>click</button>
    </form>
    <h1>{{result}}</h1>
    <p></p>
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
            var str1=document.getElementById("d1").value;
            var str2=document.getElementById("d2").value;
            var string1=str1.toLowerCase();
            var string2=str2.toLowerCase();
       
        this.result=(string1.length===string2.length && string1.split("").sort().join() == string2.split("").sort().join()); 

        }

    }

}
</script>