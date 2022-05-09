<template>
          <div id = "computed_props">
         <h1 style = "background-color:orange;">Random No from computed property: {{getrandomno}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
         <h1>Random No from method : {{getrandomno1()}}</h1>
         <h1  style = "background-color:orange;">Random No from computed property: {{getrandomno}}</h1>
         <h1  style = "background-color:orange;">Random No from computed property: {{getrandomno}}</h1>
         <h1  style = "background-color:orange;">Random No from computed
            property: {{getrandomno}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
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
               getrandomno1 () {
                  return Math.random();
               }
            },
            computed :{
               getrandomno (){
                  return Math.random();
               }
            }

}
</script>
