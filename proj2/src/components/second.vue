<template>
<div>
    <b-table :items="rows" :fields = "field"></b-table>
    <li v-for="item in rows" :key="item.index">{{item.name}}:{{item.index}}></li>
 
   
  </div>  
</template>
<script>
export default{
    name:"TerM",
    data(){
        return{
            
            rows:[
                { name :" Agile CRM" , description :" A company of excellence",index:0},
                 {name:"mantra technologies", description:"500apps" ,index:1},
                 {name:"500apps Python",description:"Backend built using python", index:2},
                 {name:"500apps infinity", description:"Builtusing vue JS", index:3}
                 ]
                

        }
        
    }
}

</script>
