<template>
    <div>
        <input type="text" placeholder="text input" @change="sendChange"/>
        </div>
</template>
<script>


export default{
    name:"EmIt",
    data() {
        return{}
        
    },
    methods:{
        sendChange(event){
            this.$emit("click",event.target.value)

        }
    }
}
</script>
