
<template>
    <div>
        <button @click="fun()">click</button>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination> 

<b-table id="my-table" :per-page="perPage" :current-page="currentPage"  striped hover :items="items">
</b-table>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'MahI',
    data(){
        return{
        perPage:15,
        currentPage:1,

            items:[],
        }
        },
        methods:{
            async fun(){
        
        
        const response=await axios("http://universities.hipolabs.com/search?country=") 
        const  responseText= response.data;
                this.items=responseText;
            }
            

    },
    computed:{

rows(){

return this.items.length;

}

}
    }
</script>
