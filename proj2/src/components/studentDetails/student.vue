<template>
  <div>
    
    <studentInfo
      :columns="[
        'sno',
        'name',
        'age',
        'gender',
        'date',
        'designation',
        'action',
      ]"
      :form-fields="{}"
    >
      <template v-slot:input-fields="{ formdata }">
        <b-form>
        Name:<b-form-input
          id="employee_name"
          v-model="formdata.name"
        ></b-form-input
        ><br />


        Age:<b-form-input
          id="employee_age"
          v-model="formdata.age"
          type="number"
        ></b-form-input
        ><br />
        Gender:<b-form-select
          v-model="formdata.gender"
          :options="gender_options"
        ></b-form-select
        ><br /><br />
        Date of Joining:<b-form-datepicker
          id="date_of_joining"
          v-model="formdata.date"
          class="mb-3"
          placeholder="Date of Joining"
          :format="date"
        ></b-form-datepicker
        ><br />


        Designation:<b-form-select
          v-model="formdata.designation"
          :options="designation_options"
        ></b-form-select>
        </b-form>
      </template>
    </studentInfo>
  </div>
</template>


<script>
import studentInfo from "./studentInfo.vue";
//import Moment from "moment";

export default {
  name: "AddEmployee",
  components: { studentInfo },
  data() {
    return {
        perPage:3,
        currentPage:1,     
      gender_options: [
        { value: "Female", text: "Female" },
        { value: "Male", text: "Male" },
      ],
      designation_options: [
        { value: "Developer", text: "Developer" },
        { value: "Manager", text: "Manager" },
        { value: "Marketing", text: "Marketing" },
        { value: "Customer Support", text: "Customer Support" },
        { value: "QA", text: "QA" },
      ],
    };
  },
  
 
  }
;
</script>


<style>
</style>



