<template>
    <div>
        <b-container>
 <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-card"
    ></b-pagination> 
       
<b-card id="my-card" v-for="item in items.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="item.id" :per-page="perPage"
      :current-page="currentPage" >
      <b-card-text variant="Success">Players Details </b-card-text>
<b-row><b-col>name:    {{item.Name}}</b-col>
    <b-col>Rank:       {{item.Rank}}</b-col></b-row>
    <b-row><b-col>Age:    {{item.Age}}</b-col>
    <b-col>batting Avg:   {{item.Batting-Avg}}</b-col></b-row>
    <b-row><b-col>Throws:   {{item.Throws}}</b-col>
    <b-col>date of Birth: {{item.Year}}</b-col></b-row>

             <button @click="changeMessage" target="_self">edit</button></b-card> 
              </b-container>
             <b-table id="my-table" :per-page="perPage" :current-page="currentPage"  striped hover :items="items">
             </b-table>
    </div>
</template>
<script>
export default{
    name:"paginationChild",
    props:{
        items:{
            type:Array
            }
    },
    data() {
        return{
            perPage: 10,
        currentPage: 1,

        }
    },
    methods:{
       
        changeMessage(){
        
            this.$emit('changeData',{Name:'mahesh', Rank:8, Age:30,Year:1990,Throws:'L'})
            this.$emit('pushData',{Name:"shiva",Rank:355,Age:29,Batting_Avg:0.5555,Throws:'L',Year:1990,id:550})
            
        }

    },
        computed: {
      rows() {
        return this.items.length
      }
    }

}
</script>
