<template>
    <div>promises
        </div>
</template>
<script>
export default{
    name:"ProM",
  data() {
      return{

      }
        
    },
    created(){
        fetch("https://www.w3schools.com/")
          .then(res=>res.json())
          .then(()=>console.log("response"))
          .catch(()=>console.log("error"))
    }
}
</script>
