<template>

<div>

<h1>Example filter</h1>

<input type="text" v-model="res" placeholder="enter the text">

<button @click="func()">click</button>

</div>

</template>

<script>

export default{

name:"NintH",

data(){

return{

array :['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],

res:"",

}

},

methods:{

func(){

const value=this.array.filter((shek)=>{

return shek.includes(this.res);

})

console.log(value);

}

}

}

</script>

