<template>
    <div>      
         <button v-on:click = "showdata" v-bind:style = "styleobj">Click Me</button>
         <span style = "font-size:25px;"><b>{{show}}</b></span>
         <h1 v-if = "show">miss you</h1>
         

    </div>
</template>
<script>
export default {
    name:"MaHi",
    data() {
        return{
               show: false,
               
        }
            },
            methods : {
               showdata() {
                  this.show = !this.show;
               }
            },
}
</script>