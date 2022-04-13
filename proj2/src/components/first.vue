<template>
<div>
    <b-table :v-for ="item in rows" :key ="rows.index" :fields = "field"></b-table>
   
  </div>  
</template>
<script>
export default{
    name:"TerM",
    data(){
        return{
            field :['name','index'],
            rows:[
                
                { name:"agile crm", index:0 ,description:"A company of excellence"},
                { name:"mantra technologies",index:1 , description:"500Apps"},
                { name:"500 apps python",index:2 , description:"code"},
                { name:"infinity",index:3 , description:"built using vue"},
                ]

        }
        
    }
}

</script>

