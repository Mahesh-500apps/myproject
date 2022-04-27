
<template>
    <div>
        <button @click="fun()">click</button>
    
        <b-table striped hover :items="items"></b-table>
    </div>
</template>
<script>
import axios from "axios"

export default {
    name:'MahI',
    data(){
        return{
            items:[],
        }
        },
        methods:{
            async fun(){
        
        
        const response=await axios("http://universities.hipolabs.com/search?country=") 
        const  responseText= response.data;
                this.items=responseText;
            },
    }
    }
</script>
