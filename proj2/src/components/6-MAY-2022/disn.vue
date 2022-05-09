<template>
    <div>      
           <button v-on:click = "displaynumbers">Click ME</button>
         <h2> Add Number 100 + 200 = {{total}}</h2>

    </div>
</template>
<script>
export default {
    name:"MaHi",
    data() {
        return{
               num1: 100,
               num2 : 200,
               total : ''

        }
        
    },
    methods : {
               displaynumbers(event) {
                  console.log(event);
                  return this.total =  this.num1+ this.num2;
               }
            },
}
</script>
