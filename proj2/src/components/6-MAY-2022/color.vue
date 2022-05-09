<template>
    <div>      
         <div v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div>
         

    </div>
</template>
<script>
export default {
    name:"MaHi",
    data() {
        return{
               num1: 100,
               num2 : 200,
               total : '',
               styleobj : {
                  width:"100px",
                  height:"100px",
                  backgroundColor:"red"
               }

        }
        
    },
     methods : {
               changebgcolor () {
                  this.styleobj.backgroundColor = "green";
               },
               originalcolor () {
                  this.styleobj.backgroundColor = "red";
               }
            },
}
</script>
