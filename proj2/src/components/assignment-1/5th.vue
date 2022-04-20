<template>
    <div>
        firstname:<input type="text" v-model="firstname"/><br/>
        lastname:<input type="text" v-model="lastname"/><br/>
        <h1>{{firstname}}{{lastname}}</h1>
</div>
</template>
<script>
    export default{
        name:"SiF",
        data(){
            return{
                firstname:" ",
                lastname:" "

        }
        },
computed: {

name: (function (firstname, lastname) {

return firstname + " " + lastname;

})(),

},

};
        
            
        

                
                 

 </script>
