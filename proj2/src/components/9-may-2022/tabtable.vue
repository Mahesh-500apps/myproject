<template>
    <div>
       
  <b-container>
    <b-tabs>
      <b-tab title="Tab 1" @click="fun" active>

<b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination> 

<b-table id="my-table" :per-page="perPage" :current-page="currentPage"  striped hover :items="items">
</b-table>

      </b-tab>
      <b-tab title="Tab 2" @click="fun2" active>
<b-pagination v-model="currentPage" :total-rows="row1" :per-page="perPage" aria-controls="my-table1"></b-pagination> 

<b-table id="my-table1" :per-page="perPage" :current-page="currentPage"  striped hover :items="item1">
</b-table>

      </b-tab>
    </b-tabs>
  </b-container>
</div>
</template>
<script>
import axios from "axios"

export default{
    name:"MAhi",
    data() {
        return{
             perPage:15,
        currentPage:1,
             items:[],
             item1:[],
        }
        },
    methods: {
    async fun(){
        
        
        const response=await axios("https://jsonplaceholder.typicode.com/todos") 
        const  responseText= response.data;
                this.items=responseText;
            },
            async fun2(){
            const result=await axios("http://universities.hipolabs.com/search?country=") 
        const  resultdata= result.data;
                this.item1=resultdata;


            }

        }, computed:{

rows(){

return this.items.length;


},
row1(){
  return this.item1.length;

}


}
      }


</script>



