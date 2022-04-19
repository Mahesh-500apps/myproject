<template>
  <div class="content"></div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
  created() {
    result=axios.get('http://universities.hipolabs.com/search?country')
      console.log(result);
    }
  }

</script>
