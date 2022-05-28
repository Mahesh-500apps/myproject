<template>
    <div>
        <paginationChild :items="items" @changeData="update" @pushData="add"/>

        </div>
</template>
<script> 
import paginationChild from "./paginationChild.vue"
import axios from "axios";

export default {
    name:"paginationCards",
    components:{
        paginationChild
    },
    data(){
        return{
            items:[]

        }
        
    },
     async mounted() {
    await this.fetched();
  },
  methods: {
    async fetched() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );

      this.items = await response.data;
    },
    update(changeD){
            console.log(changeD);
            console.log(this.items);
            this.items[0].Name=changeD.Name
            this.items[0].Rank=changeD.Rank
           this.items[0].Age=changeD.Age
           this.items[0].Year=changeD.Year
           this.items[0].Throws=changeD.Throws
    },
    add(pushD){
           console.log(pushD)
           this.items.push(pushD)
        }
    }
}
</script>
