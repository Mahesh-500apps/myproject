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
          <b-button type="submit" @click="clicked"  variant="success">
            <router-link to="/createPage">create</router-link>
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
      let username = document.getElementById("input-1");
      let password = document.getElementById("text-password");
      let date = new Date();
      var expire = new Date();
      expire.setTime(date.getTime() + 24 * 60 * 60 * 1000);

      document.cookie =
        "username=" +
        username.value +
        ";path=/http://localhost:8080/#/login" +
        ";expires" +
        expire.toUTCString();
      document.cookie =
        "password=" +
        encodeURI(password.value) +
        ";path=/http://localhost:8080/#/login" +
        ";expires" +
        expire.toUTCString();
      localStorage.setItem("email", this.form.email);
      localStorage.setItem("pasword", this.form.password);
      sessionStorage.setItem("email", this.form.email);
      sessionStorage.setItem("password", this.form.password);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      console.log(this.form.email);
      //
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.button1 {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

