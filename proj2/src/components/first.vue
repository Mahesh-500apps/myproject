<template>
<div>
    <b-table :items="rows" :fields = "field"></b-table>
 <my-component
  
  :name="item"
  :description="description"
  :yearsofexperience="yearsofexperience"
  :location="location">
 
</my-component>
   
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

