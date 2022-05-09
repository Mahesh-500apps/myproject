<template>
    <div id = "computed_props">
         <input type = "text" v-model = "fullname" />
        <h1>{{firstName}}</h1>
         <h1>{{lastName}}</h1>

    </div>
</template>
<script>
export default{
    name:"MD",
    data() {
        return{
                firstName : "Terry",
               lastName : "Ben"

        }
        
    },
                methods :{
               fullname : {
                  get() {
                     return this.firstName+" "+this.lastName;
                  },
                //   set(name) {
                //      var fname = name.split(" ");
                //      this.firstName = fname[0];
                //      this.lastName = fname[1]
                //   }
               }
            }

}
</script>
