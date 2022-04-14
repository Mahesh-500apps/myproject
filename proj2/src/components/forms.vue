<template>
    <div>
        <form @submit="submit" @reset="onReset" v-if="show">
            <label>email=</label>
            <input id="id1" type ="email" placeholder="Enter email" required><br><br>
            <label>name=</label>
            <input id="id2" type ="name" placeholder="enter name"><br><br>
            <button type="submit" variant="primary">Submit</button><br><br>
            <button type="reset" variant="danger">Reset</button>
            <pre class="m-0">{{ form }}</pre>
        </form>
        </div>
</template>
<script>

 export default {
    name:'BforM',
    data() {
      return {
        form: {
          email: '',
          name: '',
          
        },
        
        show: true
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

