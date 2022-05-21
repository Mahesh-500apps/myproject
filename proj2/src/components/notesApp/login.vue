<template>
  <div>
    <b-container>
       <b-row>
          <b-col></b-col>
<b-col>
    <b-form @submit="onSubmit"  @reset="onReset" v-if="show">
         <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
       
      </b-form-group>
      <label for="text-password">Password</label>
    <b-form-input type="password" v-model="form.password" id="text-password"></b-form-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
          <b-button type="submit" @click="clicked"  variant="success  ">
            <router-link to="/createPage">login</router-link>
          </b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
  </b-col>
<b-col></b-col>
</b-row>
                    </b-container>

          </div>
</template>
<script>
export default {
  name:"signUp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true
    };
  },
methods: {
    clicked() {
      let username = document.getElementById("input-1").value;
      let password = document.getElementById("text-password").value;
    var x=localStorage.getItem("email");
    var y=localStorage.getItem("pasword");
    if((x==username)&&(y==password)) {
        window.open("http://localhost:8081/?#/createPage")
        alert("correct username")
    } else {
        alert ("incorrect username and password")

    }
    }
}
}
</script>