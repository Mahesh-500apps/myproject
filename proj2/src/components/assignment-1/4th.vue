<template>

<div>

<h3>This is Rest Apis</h3>

</div>

</template>
<script>

const axios = require('axios').default;

export default {

name:"ApiS",

data() {
return{

}
},

async mounted(){

const result=await axios.get('http://www.json-generator.com/api/json/get/bSldINskRK');

console.log(result);

},


}

</script>
