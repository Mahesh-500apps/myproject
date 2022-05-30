<template>
  <div>
    <Crudch
      :columns="['sno', 'name', 'age', 'gender', 'date', 'class', 'action']"
      :form-fields="{}"
    >
      <template v-slot:input-fields="{ formdata }">
        Name:<b-form-input
          id="input-1"
          v-model="formdata.name"
          required
          placeholder="Enter your name"
          type="text"
        ></b-form-input
        ><br />
        Age:<b-form-input
          id="input-2"
          v-model="formdata.age"
          required
          placeholder="Enter your age"
          type="number"
          :min="0"
          :max="100"
        ></b-form-input
        ><br />
        Gender
        <b-form-select
          v-model="formdata.gender"
          :options="options"
          required
        ></b-form-select
        ><br /><br />
        Date of Birth<b-form-datepicker
          id="example-datepicker"
          v-model="formdata.date"
          :max="new Date()"
          class="mb-2"
          required
        ></b-form-datepicker>
        <br />
        Class<b-form-select
          v-model="formdata.class"
          :options="values"
          required
        ></b-form-select
        ><br /><br />
      </template>
    </Crudch>
  </div>
</template>

<script>
import Crudch from "./crudch.vue";
export default {
  name: "MahI",
  components: { Crudch },
  data() {
    return {
      selected: null,
      options: [
        { value: "Select Gender", text: "select Gender" },
        { value: "M", text: "male" },
        { value: "F", text: "female" },
      ],
      values: [
        { value: "select a class" },
        { value: "Inter", text: "inter" },
        { value: "Degree", text: "degree" },
        { value: "B-Tech", text: "b-tech" },
        { value: "SSC", text: "SSC" },
      ],
    };
  },
};
</script>