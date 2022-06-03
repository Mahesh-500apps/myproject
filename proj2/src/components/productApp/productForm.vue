<template>
  <div>
    <Products
      :columns="['ID', 'Product', 'SKU', 'Type', 'Quality', 'operations']"
      :form-fields="{}"
    >
      <template v-slot:input-fields="{ formdata }">
      
          ID:<b-form-input
            id="product_id"
            v-model="formdata.ID"
            type="number"
            required
          ></b-form-input
          ><br />
          Product:<b-form-input
            id="product"
            v-model="formdata.Product"
            type="text"
            required
          ></b-form-input
          ><br />
          SKU:<b-form-input v-model="formdata.SKU" required></b-form-input><br />
          Type:<b-form-input v-model="formdata.Type" type="text" required></b-form-input><br/>
          Quality<b-form-input v-model="formdata.Quality" type ="number" maxlength=4 required></b-form-input>
          
          
        
      </template>
    </Products>
  </div>
</template>
<script>
import Products from "./products.vue";
export default {
  name: "addProduct",
  components: { Products },
  data() {},
};
</script>
<style>
</style>



