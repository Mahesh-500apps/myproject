<template>
    <div>hiii
        <notepad/>
        <button @click="showAll"></button>
        <b-card>
            <b-card-text>{{data}}</b-card-text>
        </b-card>
    </div>
</template>
<script>
import { text } from 'cheerio/lib/api/manipulation';
import notepad from "./notepad.vue"
export default{
    name:"showAll",
    compponents:{notepad},
    data() {
        return{
            data:''

        }        
    },
    methods:{
        showAll(){
            console.log("hi")
let result=localStorage.getItem(text);
this.data=result;
        }

    }
}
</script>
