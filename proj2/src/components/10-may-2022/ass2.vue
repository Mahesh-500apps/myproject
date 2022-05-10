<template>
<div>
<center>
<b-row><b-col cols=5><child12 :columns="['firstname','lastname','action']"
:form-fields="{firstname:'',lastname:''}">

     <template v-slot:input-fields="{ formdata }">
<b-row>
<b-col>
product name:<b-form-input id="input-1" v-model="formdata.proname" required placeholder="Enter firstname"></b-form-input><br>
price:<b-form-input id="input-2" v-model="formdata.price" required  ></b-form-input><br>
product category:<b-form-input id="input-2" v-model="formdata.price" required  ></b-form-input><br>

</b-col>
</b-row>
  </template>
</child12>
</b-col></b-row>
</center>
</div>
</template>

<script>
import child12 from './ass1.vue'
export default {
name:"MahI",
components: { child12 },
};
</script>
