<template>
  <div>
    <b-form @submit.prevent="country">
      <label for="d1">Country</label>

      <b-form-input
        id="d1"
        v-model="value"
        placeholder="Enter the country name"
        required
      ></b-form-input
      ><br />

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
            <b-table striped hover :items="items" :fields="fields">

            </b-table>
            </div>
</template>


<script>
import axios from "axios";

export default {
  name: "MahI",

  data() {
    return {
      value: "",
      fields:["location","domains","website_url"],
      items: [],
    };
  },

  methods: {
    redirect(user) {
      window.open(user, "_blank");
    },

    async country() {
      const response = await axios("http://universities.hipolabs.com/search?country=" + this.value );
      
      const responseText = await response.data;

      console.log("response", responseText);

      this.items = responseText.map((row) => {
        return {
            domains: row.domains,

          website_url: row.web_pages[0],
          location: row.country,

    
        };
      });
    },  
  },
};
</script>
