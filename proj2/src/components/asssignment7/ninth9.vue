<template>

<div>

<button type="submit" @click="fun">Click it</button>

</div>

</template>


<script>

export default {

name: "NiNe",


data() {

return {
array1: [1, 0, 2, 3, 4, 0],
array2: [3, 5, 6, 7, 8, 13],
sum: [],
};
},
methods: {

fun() {
this.sum = [...this.array1].map((e, i) => e + this.array2[i]);
document.write(this.sum);

},

},

};
</script>


