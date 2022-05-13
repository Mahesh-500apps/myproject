<template>
    <div>
        
        <child21 :ninjas="ninjas"></child21>
        </div>
</template>
<script>
import ninjas from './child21.vue'

export default{
    name:"parENt",
    components:{
        child21:ninjas
    },
    data(){
        return{
            ninjas:[
                {name:"mahesh",id:21},
                {name:"sai",id:31},
                {name:"radha",id:5}
            ]
        }
    }
        
    }
</script>
