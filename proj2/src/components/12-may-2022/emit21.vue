<template>

<div>

<button @click="parent()">update</button>

</div>

</template>


<script>

export default {

name:"EmitchIld",

data(){

return{


}

},

methods:{

parent(){

this.$emit('check',{name:'Madhav'})

}

}

}

</script>


<style>


</style>



