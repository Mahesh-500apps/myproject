<template>

<div>

{{ items }}
</div>
</template>
<script>
export default {
name: "TeN",
data() {

return {

items: this.filter_array([NaN,0,15,-22,"",undefined,47,null,]),

};

},


methods: {

filter_array(test_array) {

var index = -1,

arr_length = test_array ? test_array.length : 0,

resIndex = -1,

result = [];


while (++index < arr_length) {

var value = test_array[index];


if (value) {

result[++resIndex] = value;
}
}
return result;

},

},

};
</script>






