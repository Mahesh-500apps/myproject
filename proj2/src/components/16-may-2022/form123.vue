<template>
  <div>
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
students: <b-form-select v-model="form.id" id="demo1" :options="items" value-field="id" text-field="Name"></b-form-select>
<br/>
<b-form-select v-model="form.subject" :options="options" ></b-form-select>

<b-form-datepicker id="d1" v-model="form.value" class="mb-2" @context="onContext">choose a date:</b-form-datepicker>
    
        marks:<b-form-input
          v-model="form.marks"
          type="number"
          placeholder="Enter Marks"
          min="0" max=100
          required
        ></b-form-input>
      

        remarks:<b-form-input
          v-model="form.remarks"
          type="text box"
          placeholder="please give your remarks"
          required
        ></b-form-input>
        

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-table striped hover :items="res"> </b-table>
  
    
  </div>
</template>

<script>
import axios from "axios";

  export default {
      name:"ForM",
    data() {
      return {
        

          items:[],
        options:[
                
          { value: null, text: 'Please select some item' },
          {value: 1, text : 'English'} ,
          {value: 2 , text : 'Mathematics'} , 
          {value: 3 , text : 'Electronics'}
               ],

        form: {
        subject:'',
         id:'',
          marks: '',
        remarks: '',
        value:'',
},
          res:[],
        show: true
      }
    },
    async mounted(){

await this.fun();

},
  methods: {
    async fun() {

let response =

await axios.get("https://api.sampleapis.com/baseball/battingAvgsSingleSeason");

this.items= await response.data;

},

onSubmit(event) {
        event.preventDefault()
        this.res=(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        this.form.id=''
        this.form.subject=''
        this.form.marks = ''
        this.form.remarks = ''
    
        
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
      
      
    },
    
  }
</script>