<template>

<div>

<button @click="ctr()">click here</button>

</div>

</template>


<script>

export default {

name: "SeveN",


data() {

return {

arr1: [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3],

};

},


methods: {

ctr() {

document.write([...new Set(this.arr1)]);

},

},

};

</script> 


