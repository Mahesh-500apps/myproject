<template>

<div>

<emit21 @check="parent1" />

<p>Name:{{name}}</p>

<!-- <p>Subject:{{subject}}</p> -->

</div>

</template>

<script>

import emit21 from './emit21.vue'

export default {

name:"EmiT21",

components:{

emit21

},

data(){

return{

name:"Mahesh",

//subject:"java"

}

},

methods:{

parent1(change) {

this.name=change.name

// this.subject=change.subject

}

}

}

</script>

<style>


</style>


