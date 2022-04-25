<template>
    <div>
        <child  :name="name" :number="number" :Items="items"></child>
    </div>
</template>
<script>
import child from './child1.vue'


export default{
    name:'ParenT',
    components:{child},
    data(){
        return{
            message:"my message",
            name:"mahesh",
            number:"23 ",
            items:[
                {age:20,firstname:"mahi",last:"atla"},
                {age:18,firstname:"sai",last:"siva"}
            ]
        }


        },
    }

        
    
</script>
