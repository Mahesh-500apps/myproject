<template>
<div>
   <h3>This is Rest Apis</h3>

</div>
</template>
<script>
const axios = require('axios').default;

export default{
    name:"ApiS",
    data(){
        return{

        }
    },
    created(){
     fetch("https://api.npms.io/v2/invalid-url")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      this.totalVuePackages = data.total;
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });

    
    }

 
}