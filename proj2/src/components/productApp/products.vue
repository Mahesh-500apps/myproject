<template>
  <div>
    <center>
      <b-button varient="danger" v-b-toggle.sidebar-1 variant="success"
        >home</b-button
      >
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-10 py-7">
          <b-button variant="orange"><b-icon icon="house-door-fill" /> home</b-button><br /><br /><br />
          <b-button variant="orange"><b-icon icon="grid-fill" />product</b-button>
        </div>
      </b-sidebar>
      <br /><br />
      <input type="text" v-model="res" placeholder="enter the text" />
      <button @click="fun">Click</button>
       <b-container>  
        <b-row><b-col>      
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
              value="product"
            ></b-form-input>
          </b-input-group></b-col><b-col>
            <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
            </b-input-group></b-col><b-col>
            <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''" class="button2"
                >refresh</b-button
              >
            </b-input-group-append>
          </b-input-group></b-col></b-row>

        <b-form-group
          v-model="sortDirection"
          label="Filter on"
          description="Leave all unfiltered data"
          label-cols-sm="5"
          label-align-sm="left"
          label-size="sm"
          class="mb-0"
           v-slot="{ ariaDescribedby }" 
        >
           <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="product">product</b-form-checkbox>

            <b-form-checkbox value="sku">sku</b-form-checkbox>

            <b-form-checkbox value="type">type</b-form-checkbox>
          </b-form-checkbox-group> 
        </b-form-group>
    </b-container>
        

      <br /><br />
      <br /><br />
      <div>
        <b-button variant="primary" @click="addProduct" class="addStudent"
          >Add  <b-icon icon="plus-circle"/></b-button
        >
        <b-button variant="warning" @click="importProduct" class="import"
          >import  <b-icon icon="arrow-up-circle"/></b-button
        >
        <b-button variant="danger" @click="exportProduct" class="export"
          >export   <b-icon icon="arrow-down-circle" /></b-button
        >
      </div>
      <br /><br />
      <br /><br />
      {{result}}
      <b-table
        striped
        hover
        :per-page="perPage"
        :current-page="currentPage"
        :items="employeeTable"
        :fields="columns"
        id="table"
        class="css-serial"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
      >
        <!-- <template #cell(date)="data">
          <p>{{ convert_date(data.item.date) }}</p>
        </template> -->
        <template #cell(operations)="data">
          <b-button @click="editProduct(data.item)" variant="primary" size="sm"
            >edit  <b-icon icon="pencil-fill" /></b-button
          >&nbsp;
          <b-button
            @click="deleteProduct(data.item)"
            variant="danger"
            size="sm"
          >delete  
            <b-icon icon="file-earmark-x"
          /></b-button>
        </template>
      </b-table>
      <b-modal v-model="modalShow" :title="Title" hide-footer>
        <b-form @submit.prevent="save">
          <slot :formdata="editForm" name="input-fields"> </slot>
          <b-button variant="success" type="submit" class="submit"
            ><b-icon-save
          /></b-button>
        </b-form>
      </b-modal>
    </center>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home_page",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      filter: null,
      result: [],
      res: "",
      //filterOn: [],
      editForm: this.formFields,
      modalShow: false,
      editIndex: -1,
      employeeTable: [],
    };
  },
  computed: {
    rows() {
      return this.employeeTable.length;
    },
    Title() {
      return this.editIndex === -1 ? "Add Employee" : "Edit Employee";
    },
    // sortOptions() {
    //   return this.fields

    //     .filter((f) => f.sortable)

    //     .map((f) => {
      
    //       return { text: f.label, value: f.key };
    //     });
    // },
  },
  methods: {
    addProduct() {
      this.modalShow = true;
      this.editForm = Object.assign({}, this.formFields);

      this.editIndex = -1;
    },
    editProduct(item) {
      this.modalShow = true;
      this.editIndex = this.employeeTable.indexOf(item);
      this.editForm = Object.assign({}, item);
      console.log(this.response.data.data);
    },
    deleteProduct(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete employee.", {
          title: "Delete Employee",
          size: "lg",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelVariant: "danger",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            const index = this.employeeTable.indexOf(item);
            this.employeeTable.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },

    fun() { 
      this.result = this.employeeTable.filter((row) => {
        return row.product.includes(this.res)
      });
      console.log("mahesh",this.result);
    },
    created() {
      axios(this.endpoint).then(
        (response) => (this.employeeTable = response.data.data)
      );
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editForm = Object.assign({}, this.formFields);
        this.editIndex = -1;
      }, 300);
    },
    save() {
      if (this.editIndex > -1) {
        Object.assign(this.employeeTable[this.editIndex], this.editForm);
        axios.put(this.endpoint + "/" + this.editForm.id, this.editForm);
      } else {
        this.employeeTable.push(this.editForm);
        axios.post(this.endpoint, this.editForm);
      }
      this.close();
    },
    //  onFiltered(filteredItems) {
    //   this.totalRows = filteredItems.length;

    //   this.currentPage = 1;
    // },
  },
};
</script>
<style>
.home {
  position: absolute;
  top: 0.5;
  left: 0;
  height: 70px;
  width: 45px;
}
.nav {
  position: absolute;
  top: 0;
  right: 0;
}
.submit {
  position: relative;
  bottom: 490px;
  width: 45px;
  height: 35px;
  right: -380px;
}

.addStudent {
  position: absolute;
  left: 0;
}
.import {
  position: absolute;

  left: 85px;
}
.export {
  position: absolute;
  left: 190px;
}
</style>

