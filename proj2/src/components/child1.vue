<template>
    <div>
        <p>msg:{{message}}</p>
        <p>name:{{name}}</p>
        <p>number:{{number}}</p>
        <p>item:{{Items}}</p>
    </div>

</template>
<script>


export default {
    name:"ProP",
    components:{
        
    },
    props:{
        messge:String,
        name:String,
        number:Number,
        Items:Array
    },
}

</script>
