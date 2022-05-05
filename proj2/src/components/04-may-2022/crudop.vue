<template>
<div>
<center>
<b-row><b-col cols=5><Crudch :columns="['firstname','lastname','action']"
:form-fields="{firstname:'',lastname:''}">

     <template v-slot:input-fields="{ formdata }">
<b-row>
<b-col>
first Name:<b-form-input id="input-2" v-model="formdata.firstname" required placeholder="Enter firstname"></b-form-input><br>
second Name:<b-form-input id="input-2" v-model="formdata.lastname" required placeholder="Enter lastname" ></b-form-input><br>
</b-col>
</b-row>
  </template>
</Crudch>
</b-col></b-row>
</center>
</div>
</template>

<script>
import Crudch from './crudch.vue'
export default {
name:"MahI",
components: { Crudch },
};
</script>
