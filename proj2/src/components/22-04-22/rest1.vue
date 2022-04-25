<template>
    <div>promises
        </div>
</template>
<script>

const axios = require('axios').default;
export default{
    name:"ProM",
  data() {
      return{

      }
        
    },
    created(){
        
  axios("https://www.w3schools.com/")
          .then(res=>res.json())
          .then(()=>console.log("response"))
          .catch(()=>console.log("error"))
    }
}
</script>
