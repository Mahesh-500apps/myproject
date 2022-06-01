<template>
  <div>    
    <Products
      :columns="[
        'ID',
        'product',
        'sku',
        'type',
        'quality',
        'operations',
      ]"
      :form-fields="{}"
    >
      <template v-slot:input-fields="{ formdata }">
        <b-form>
        ID:<b-form-input
          id="product_id"
          v-model="formdata.ID"
          type="number"
        ></b-form-input
        ><br />
        product:<b-form-input
          id="product"
          v-model="formdata.product"
          type="text"
          required
        ></b-form-input
        ><br />
    sku:<b-form-input
          v-model="formdata.sku"
         
        ></b-form-input
        ><br /><br />
        Quality<b-form-input
          v-model="formdata.quality"         
        ></b-form-input>        
        <br />
        type:<b-form-input
          v-model="formdata.type"
          type="text"
        ></b-form-input>
        </b-form>
      </template>
    </Products>
  </div>
</template>
<script>
import Products from "./products.vue";
export default {
  name: "addProduct",
  components: { Products },
  data() {   
  }, 
  }
;
</script>
<style>
</style>



