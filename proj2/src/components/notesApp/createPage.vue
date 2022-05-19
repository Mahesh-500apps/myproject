<template>
  <div>
    <h4>welcome to my app </h4><br/>
    <p>if you wanna write something please click on the notepad button</p>
      <b-row>
        <b-col />
        <b-col>
          <b-form>
            <button class="button">
              <router-link to="/note">notepad</router-link>
            </button>
          </b-form> </b-col
        ><b-col
      /></b-row>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.button {
  position: absolute;
  top: 500px;
  right: 0;
}
</style>
