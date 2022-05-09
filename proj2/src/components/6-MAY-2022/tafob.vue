<template>
    <div>
       
  <b-container>
    <b-tabs>
      <b-tab title="Tab 1" active>

      email:<b-form-input id="email" name="contact_email" type="email" class="form-control" value="" required></b-form-input>
      name:<b-form-input id="name" name="name" type="text" class="form-control" value="" ></b-form-input>
      <button @click="onSubmit">Submit</button>
      <button @click="onReset">reset</button>


      </b-tab>
      <b-tab title="Tab 2">
      email:<input id="email" name="contact_email" type="email" class="form-control" value="" required>
      </b-tab>
    </b-tabs>
  </b-container>
</div>
</template>
<script>

export default{
    name:"MAhi",
    data() {
        return{
            form: {
          email: '',
          name: '',
        }
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>



