<template>

 <div>
     <b-container>
         <b-form id="form">
             Enter product Name:<b-form-input id="form1" type="text" placeholder="enter Product name" required></b-form-input>
             Enter Product Price:<b-form-input id="form2" type="number" placeholder="enter Product Price" required></b-form-input>
             Enter Product category:<b-form-input id="form3" type="text" placeholder="enter Product category" required></b-form-input>
             <b-button @click="Add()">Add</b-button>
        </b-form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-container>
</div>
</template>
<script>

export default {

    name:"QuestION1",

    data() {

        return {

            items: [],

        };

},

methods: {

    Add() {

            this.items.push({

                    Productname: document.getElementById("form1").value,

                    Productprice: document.getElementById("form1").value,

                    productcategory: document.getElementById("form1").value

});

},

},

};

</script>