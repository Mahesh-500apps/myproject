<template>
          <div id = "computed_props">
         <h1 style = "background-color:orange;">computed property: {{mno}}</h1>
         <h1> method: {{no()}}</h1>
         <h1>method : {{no()}}</h1>
         <h1  style = "background-color:orange;">: {{mno}}</h1>
         <h1  style = "background-color:orange;"> computed property: {{mno}}</h1>
         <h1  style = "background-color:orange;"> computed
            property: {{mno}}</h1>
         <h1>method: {{no()}}</h1>
         <h1>method: {{no()}}</h1>
         <button @click="fun()">hai</button>
                  <button @click="fun1()">hai</button>

      </div>

</template>
<script>
export default{
    name:"MB",
    data() {
        return{
            name : "helloworld"

        }
        },
                    methods: {
               no () {
                  console.log("sai")
                  return Math.random();
       
               },
               fun(){
                  console.log("ram")
                  }
            },
            computed :{
               mno (){
                console.log("ram")
                  return Math.random();
               },
               fun1(){
                  console.log("sai")
                  return 1;
               }

               }
   }
</script>