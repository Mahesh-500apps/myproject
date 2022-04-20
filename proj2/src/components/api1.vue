<template>
  <div class="content"></div>
</template>

<script>
export default {
  name:"MahI",
    data(){
        return{

        }
    },
  created() {
    result=axios.get('http://universities.hipolabs.com/search?country');
      console.log(result);
    }
  }

</script>
