<template>

<div>

<p> FIrst </p>

<p>{{ diameter() }}</p>


<p>{{ perimeter() }}</p>

</div>

</template>


<script>

export default {

name: "FIrst",


data() {

return {

radius: 20,


perimeter: () => 2 * Math.PI * this.radius,

};

},


methods: {

diameter() {

const circle = {

radius: 20,

};


console.log(circle);


return this.radius * 2;

},

},

};

</script> 1st


<template>

<div>

<P> SEcond </P>

</div>

</template>


<script>

export default {

name: "SEcond",

data() {

return {

a: [43, 45, 90, 180],

};

},

merhods: {

fun() {

const doubled = this.a.reduce((total, amount) => {

total.push(amount * 2);


return total;

}, []);


document.write(this.a), document.write("<br> ", doubled);

},

},

};

</script>

2nd


Ramarao Taddi ✊ is typing...




