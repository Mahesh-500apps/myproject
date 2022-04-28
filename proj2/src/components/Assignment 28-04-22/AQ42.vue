<template>
  <div>
      <b-container>
    <b-form-select v-model="value" :options="countries">
      
      </b-form-select>
      <b-button @click="country">Submit</b-button>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination> 
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->

  
<b-table id="my-table" :per-page="perPage" :current-page="currentPage"  striped hover :items="items">
<!-- web_pages:<a :href="value.web_pages" target="_blank" > -->
<!-- {{ data1.web_pages[0] }}</a> -->
</b-table>
      </b-container>
 </div>
</template>


<script>
import axios from "axios";
const { getNames } = require("country-list");

export default {
  name: "MahI",
  data() {
    return {
        perPage:4,
        currentPage:1,
      value: "",
      countries:[],
      fields:["domains","website_url","location"],
      items: [],
      res:"",
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  methods: {
    redirect(user) {
      window.open(user, "_blank");
    },   
    async country() {
      const response = await axios.get("http://universities.hipolabs.com/search?country=" + this.value );
      const responseText = await response.data;
      console.log("response", responseText);
      this.items = responseText.map((row) => {
        return {
            domains: row.domains,
         website_url: row.web_pages[0],
         location:row.country
         
        };
      });
    },
},
computed:{

rows(){

return this.items.length;

}

}

  };

</script>
