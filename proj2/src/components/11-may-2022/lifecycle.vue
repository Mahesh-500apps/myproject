<template>

<div>

<button @click="func()">click</button>

 <p>{{name}}</p> 

</div>

</template>


<script>

export default {

name:"NewFile",

data(){

return{

//name:" "

}

},

mounted(){
    alert("sri")

console.log("mounted")

},

beforeCreate(){
    
alert('sanjay');
 console.log('beforCreate hook has been called');
console.log("beforecreate")

},

beforeMount(){
 alert('lunch time');
 console.log(`books is of type ${typeof this.books}`);


console.log("beforemount")

},

created(){
 alert('siva');
 console.log(`books is of type ${typeof this.books}`);

console.log("created")

},

methods:{

func(){

this.name="Mahesh"

console.log(this.name)

}

}

}

</script>


