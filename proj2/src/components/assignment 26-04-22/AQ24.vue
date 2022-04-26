<template>

<div>

<input type="text" v-model="res" placeholder="enter the text">

<button @click="func()">click</button>

</div>

</template>

<script>

export default{

name:"NintH",

data(){

return{

array :[ 'orange', 'red', 'blue', 'black', 'white' ],
res:"",

}

},

methods:{

func(){

const value=this.array.filter((shek)=>{

return shek.includes(this.res);

})

document.write(value);

}

}

}

</script>

