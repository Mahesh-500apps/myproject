<template>
    <div>
   <h1>{{name}}</h1><p>{{id}}</p>{{message}}
   <button @click="changeMessage">swift</button>

    </div>
</template>
<script>

export default{
    name:"dataMethod",
    props:{
        name:String,
        id:Number,
        message:String
    },
    data(){
        return{
            
        }
        
    },
    methods:{
        changeMessage(){
            console.log("hello")
            this.$emit('action',{message:'hello',name:'bujji', id:9})
        }
    }
}
</script>
