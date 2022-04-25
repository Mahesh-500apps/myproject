<template>
<div>
    <b-table stacked :items="rows" :fields = "field"></b-table>
 

 

   
  </div>  
</template>
<script>
export default{
    name:"TerM",
    data(){
        return{
            
            rows:[
                
                { name :" Agile CRM" , description :" A company of excellence", Yearsofexperience:12, Location:"Hyderabad"}]
                

        }
        
    }
}

</script>

