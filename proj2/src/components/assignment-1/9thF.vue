<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="age:" label-for="input-3">
          <b-form-input
          id="input-3"
          v-model="form.age"
          type="number"
          placeholder="enter age"></b-form-input>
      </b-form-group>
          <b-form-group id="input-group-4" label="contact:" label-for="input-4">
          <b-form-input
          id="input-"
          v-model="form.contact"
          type="number"
          placeholder="enter contact"></b-form-input>
          </b-form-group>

    
          
      <b-button type="submit" variant="primary">Submit</b-button>
      
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    name:'BforM',
    data() {
      return {
           status: 'not_accepted',
        form: {
         
          email: '',
          name: '',
          age:'',
          contact:''
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        document.write(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.name = ''
        this.form.contact= ''
        
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>