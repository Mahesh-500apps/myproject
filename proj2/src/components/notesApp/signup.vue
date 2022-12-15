<template>
  <div>   
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-form @submit="onSubmit">
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
            <b-form-input
              type="password"
              :minlength="8"
              v-model="form.password"
              id="text-password"
            ></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </b-form-text>
            <!-- <router-link to="/createPage"> -->
              <b-button type="submit" @click="clicked" variant="success  "
                >signup</b-button
              >
            <!-- </router-link> -->
            <b-button type="Reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "signUp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    clicked() {
      /* get the data for creating cookie */
      let username = document.getElementById("input-1");
      let password = document.getElementById("text-password");
      let date = new Date();
      var expire = new Date();
      expire.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      /* to store the cookie*/
      document.cookie =
        "username=" +
        username.value +
        ";path=/" +
        ";expires" +
        expire.toUTCString();
      document.cookie =
        "password=" +
        encodeURI(password.value) +
        ";path=/" +
        ";expires" +
        expire.toUTCString();
      /*to store the email and password in local storage*/
      localStorage.setItem("email", this.form.email);
      localStorage.setItem("pasword", this.form.password);
      /* to store the email and password in session storage*/
      sessionStorage.setItem("email", this.form.email);
      sessionStorage.setItem("password", this.form.password);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$router.push("/createPage")
//window.open("http://localhost:8081/#/createPage")
    },
    // onReset(event) {
    //   event.preventDefault();
    //   /* Reset our form values*/
    //   this.form.email = "";
    //   this.form.password = "";
    //   console.log(this.form.email);
    //   /*to show the data*/
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
  },
};
</script>
<style scoped>
/* button styles*/
.button1 {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

