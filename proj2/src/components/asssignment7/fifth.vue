<template>

<div>

<button @click="fun()">click</button>

</div>

</template>
<script>
export default {
name: "AbhI",
data() {
return {

myColor: ["Red", "Green", "White", "Black"],

res:" "

};
},
methods: {

fun() {

this.res=document.write(this.myColor.toString())+console.log(this.myColor.join(' '))+console.log(this.myColor.join('+'));

},

},

};

</script>

