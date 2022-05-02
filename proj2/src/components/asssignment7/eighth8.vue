<template>

<div>

<button @click="funct()">click here</button>

</div>

</template>
<script>

export default {

name: "EIght",

data() {

return {

color: ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],

};

},

method: {

funct() {

var o = ["th", "st", "nd", "rd"],

x = n % 100;

return x + (o[(x - 20) % 10] || o[x] || o[0]);

},

},

};

</script>


