<template>
<div id='ninjas'>
    
    <b-table :items="ninjas"></b-table>
</div>
</template>
<script>
export default {
    name:"ProP",
    props:{
        ninjas:{
            type:Array
        }

    },
    data() {
        return{

        }
    },
    
        
    }

</script>
