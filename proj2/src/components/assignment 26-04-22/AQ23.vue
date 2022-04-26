<template>
<div>
    <b-table items="names" :fields="fields"></b-table>
         <b-form-input
          id="d1"
          type="name"
          label="first number"
          placeholder="Enter your first name"
          required>
          </b-form-input>
          <b-form-input
          id="d2"
          type="name"
          label="last name"
          placeholder="Enter last name "
          required>
          </b-form-input>
          <b-button @click="add()">add</b-button>
      <b-button @click="delet()" variant="danger">delete</b-button>
    
 </div>
 </template>
<script>
export default{
    name:"MahI",
    data(){
        return{
            names:[{firstname:"",lastname:""}],
        }
    },
methods:{
    add(){
        this.name.push({firstname:(document.getElementById("d1").value),lastname:(document.getElementById("d2").value)})
    },
    delete()
    {
        this.names.pop()
    }

    }
}
</script>
