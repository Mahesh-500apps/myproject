<template>
  
      <b-container>
 <b-form  @submit="onSubmit"  @reset="onReset" v-if="show">

    <b-row>
      <b-col>
students: <b-form-select v-model="form.id" id="f1" :options="items" value-field="id" text-field="Name" required></b-form-select>
</b-col>
<b-col>subject:<b-form-select v-model="form.subject" id="f2" :options="options" value-field="id" text-field="name" required></b-form-select>
</b-col>
    </b-row>
    <b-row>
      <b-col>
choose a date:<b-form-datepicker :max="new Date()" id="f3" v-model="form.date" class="mb-2" required></b-form-datepicker>
      </b-col>
      <b-col>
        marks:<b-form-input
        id="f4"
          v-model="form.marks"
          type="number"
          placeholder="Enter Marks"
          min="0" max=100
          required
        ></b-form-input>
      </b-col>
    </b-row>
<b-row>
  <b-col>
        remarks:<b-form-textarea
        id="f5"
          v-model="form.remarks"
          type="text box"
          placeholder="please give your remarks"
          required
        ></b-form-textarea>
  </b-col><b-col></b-col></b-row><br/>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
    <b-row>
      <b-col>
<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
      </b-col>
      <b-col><b-card class="mt-3" header=" Result">
        <pre class="m-0">{{ res }}</pre>
</b-card></b-col>
    </b-row>
    <b-table  :items="res"></b-table>
    
  </b-container>
    
  
</template>

<script>
import axios from "axios";
export default {
  name: "formValidatio",
  data() {
    return {
      items: [],
      options: [
        { id: 1, name: "English" },
        { id: 2, name: "Mathematics" },
        { id: 3, name: "Electronics" },
      ],
      form: {
        subject: "",
        id: "",
        marks: "",
        remarks: "",
        date: "",
      },
      res: [],
      show: true,
    };
  },
  async mounted() {
    await this.fun();
  },
  methods: {
    async fun() {
      let response = await axios.get(
        "https://api.sampleapis.com/baseball/battingAvgsSingleSeason"
      );

      this.items = await response.data;
    },

    onSubmit(event) {
      event.preventDefault();
      let result = JSON.stringify(this.form);
      this.res=JSON.parse(result)
    },
    onReset(event) {
      event.preventDefault();
      this.form.id = "";
      this.form.subject = "";
      this.form.marks = "";
      this.form.remarks = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script> */