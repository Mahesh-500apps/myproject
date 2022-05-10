<template>
    <div>
        lowercase : <input type = "text" v-model = "lower"><br/>  
         uppercase : <input type = "text" v-model = "upper">  
 
    </div>
</template>
<script>

export default {
    name:"MahI",

    data() {
        return{
               lower : "",  
               upper:""
        }
            },  
 
            watch : {  
               lower:function(val) {  
                  this.lower = val;  
                  this.upper = this.lower.toUpperCase();  
               }
        
            }  

        }
        

</script>
