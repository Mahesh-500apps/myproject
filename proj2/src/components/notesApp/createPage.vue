<template>
  <div>
    <h4>welcome to my app </h4><br/>
    <p>if you wanna write something please click on the notepad button</p>
      <b-row>
        <b-col />
        <b-col>
          <b-form>
            <router-link to="/note">
            <button class="button" variant="success"> +
    </button>
              </router-link>            
          </b-form> </b-col
        ><b-col
      /></b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
};
</script>
<style scoped>
.button {
  position: absolute;
  top: 500px;
  right: 0;
  border-radius: 50%;
  border-color: rgb(17, 5, 245);
}
</style>
