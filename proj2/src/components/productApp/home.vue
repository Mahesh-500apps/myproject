<template>
  <div>
    <b-navbar id="color">
      <b-button id="button" v-b-toggle.my-sidebar variant="info"
        ><b-navbar-brand
          ><h5 style="color: white"></h5></b-navbar-brand
      ></b-button>

      <h2 id="card" style="color: white; font-size: 20px">
        <b>Root<b-icon-chevron-down /></b>
      </h2> </b-navbar
    ><br /><br /><br />

    <center>
      <u> <h1 style="background-color: lightblue" id="Home"></h1> </u>
    </center>

    <b-sidebar id="my-sidebar" title="Logistic" shadow>
      <br /><br />

      <div>
        <b-dropdown-menu
          ><b-dropdowm-item
            ><button id="home_box" type="submit" @click="home()">
              <b-icon-house-door-fill /> Home
            </button></b-dropdowm-item
          ><br /><br /><b-dropdowm-item
            ><button id="grid_box" type="submit" @click="product()">
              <b-icon-ui-checks-grid /> Product
            </button></b-dropdowm-item
          ></b-dropdown-menu
        >
      </div>
    </b-sidebar>
  </div>
</template>


<script>
export default {
  name: "Home_Page",

  data() {
    return {};
  },

  methods: {
    product() {
      this.$router.push("/productForm");
    },

    home() {
      document.getElementById("Home").innerHTML =
        "Welcome to the logistic products";
    },
  },
};
</script>



