<template>
    <div>
        </div>
</template>
<script>
export default{
    name:"MahI",
    data() {
        return{
            message:"thats what she said",

        };
        
    },
    method:{
        sendMessageToParent(){
            this.$emit("my-message",this.message);
        },        
    },
    mounted(){
        this.sendMessageToParent();
    },
};
</script>
