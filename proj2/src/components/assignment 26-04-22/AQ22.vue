<template>
<div>
    <b-form @submit="mul" @reset="div">
         <b-form-input
          id="d1"
          type="number"
          label="1st number"
          placeholder="Enter number"
          required>
          </b-form-input>
          <b-form-input
          id="d2"
          type="number"
          label="2nd number"
          placeholder="Enter number"
          required>
          </b-form-input>
          <b-button type="submit" variant="primary">mul</b-button>
      <b-button type="reset" variant="danger">div</b-button>
    </b-form>
 </div>
 </template>
<script>
  export default {
    name:'BforM',
    data() {
      return {

        
        
      }
    },
    methods: {
      mul() {
        var p= document.getElementById("d1").value;
        var q= document.getElementById("d2").value;
        var result= p*q;
        document.write(result);
      },
        div() {
        var x= document.getElementById("d1").value;
        var y= document.getElementById("d2").value;
        var result= x/y;
        document.write(result);
      }
      }
    }
  
</script>
 
     

      