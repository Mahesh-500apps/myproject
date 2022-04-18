<template>
    <div>
        <child :message="message" :name="name" :number="number" :items="items"></child>
    </div>
</template>
<script>
import child from '../components/child1.vue'


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
