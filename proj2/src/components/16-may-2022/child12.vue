<template> 
<div> 
    <h4>msg:{{message}}</h4>
     <h4>name:{{name}}</h4> 
     <h4>number:{{number}}</h4> 
     <h4>Items:{{Items}}</h4> 
     <i><b><h3>mantra:{{mantra}}</h3></b></i> 
</div> 
</template> <script> 
export default { 
    name : "propS", 
    components:{ }, 
    props : 
    {
        message: String, 
        name : String, 
        number : { default:1138, type:Number }, 
        mantra: String, 
        Items:[ 
            {age:20,firstname:"navya",lastname:"doddi"}, 
            {age:24,firstname:"chaitrika",lastname:"lagadapati"} 
            ] 
            }, 
            methods:{ 
                fun(){
                     alert("keep it up") 
                     }
                } 
}       
</script>

