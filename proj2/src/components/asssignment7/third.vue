<template>

<div>
<button type="=submit" @click="remove" >Click!</button>

</div>

</template>

<script>


export default {

name:"practicE3",

data() {

return{

array:[1,1,2,2,2,3,4,3,2],

}

},

methods:{

remove(){

document.write(this.array=[...new Set(this.array)])

}

}

}

</script>

