<template>
<div>

    <button @click="fun">Click</button>
    <br/><br/><br/>
    
    {{res}}
   
</div>
</template>
<script>
export default{
    name:"MahE",
    data(){
        return{                    
            data:[ 
                { id: 20, name: 'Captain Piett' }, 
                { id: 24, name: 'General Veers' }, 
                { id: 56,name: 'Admiral Ozzel' }, 
                { id: 88, name: 'Commander Jerjerrod' } 
                ],
               
                                
            
            res:"",
            }
    },
methods:{

fun(){

this.res=this.data.filter(row=>

row.name=='General Veers')

return this.res

}            }
}

</script>