<template>
  <div>    
    <center>
      <b-button
        varient="danger"
        v-b-toggle.sidebar-1
        variant="success"
        class="menu"
        ><b-icon-list /></b-button
      >{{ file2 }}
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-10 py-7">
          <b-button variant="orange" @click="product"
            ><b-icon icon="house-door-fill" /> home</b-button
          ><br /><br /><br />
          <b-button variant="orange"
            ><b-icon icon="grid-fill" />product</b-button
          >
        </div>
      </b-sidebar>
      <br /><br />
      <!-- <input type="text" v-model="res" placeholder="enter the text" />
      <button @click="fun">Click</button> -->
      <b-container>
        <b-row
          ><b-col>
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
                value="product"
              ></b-form-input> </b-input-group></b-col
          ><b-col>
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input> </b-input-group></b-col
          ><b-col>
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>
              <b-input-group-append>
                <b-button
                  :disabled="!filter"
                  @click="filter = ''"
                  class="button2"
                  >refresh</b-button
                >
              </b-input-group-append>
            </b-input-group></b-col
          ></b-row
        >
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
          >Add <b-icon icon="plus-circle"
        /></b-button>
        <input type="file" @change="onFileChange" class="home" />
        <b-button variant="warning" @click="importFile" class="import"
          >import <b-icon icon="arrow-up-circle"
        /></b-button>
        <b-button variant="danger" @click="Export()" class="export"
          >export <b-icon icon="arrow-down-circle"
        /></b-button>
      </div>
      <br /><br />
      <br /><br />
      <!-- {{ result }} -->
      <b-table
        striped
        hover
        :per-page="perPage"
        :current-page="currentPage"
        :items="productTable"
        :fields="columns"
        id="table"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
      >
        <template #cell(operations)="data">
          <b-button @click="editProduct(data.item)" variant="primary" size="sm"
            >edit <b-icon icon="pencil-fill" /></b-button
          >&nbsp;
          <b-button @click="deleteProduct(data.item)" variant="danger" size="sm"
            >delete <b-icon icon="file-earmark-x"
          /></b-button>
        </template>
      </b-table>
 
      <b-row
        ><b-col>total {{ productTable.length }}</b-col
        ><b-col>{{ perPage }}/page</b-col
        ><b-col
          ><b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table"
          ></b-pagination></b-col
        ><b-col>Go To<input /></b-col><b-col></b-col><b-col></b-col
      ></b-row>
       {{ fileinput }}
      <b-modal v-model="modalShow" :title="Title" hide-footer>
        <b-form @submit.prevent="save">
          <slot :formdata="editForm" name="input-fields"> </slot>
          <b-button variant="success" type="submit" class="save"
            ><b-icon-save
          /></b-button>        
        </b-form>
      </b-modal>
    </center>
  </div>
</template>
<script>
import axios from "axios";
import exportFromJSON from 'export-from-json'
export default {
  name: "Home_page",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      filter: null,
      result: [],
      fileinput: "",
      res: "",
      filterOn: [],
      editForm: this.formFields,
      modalShow: false,
      editIndex: -1,
      productTable: [],
    };
  },
  computed: {
    rows() {
      return this.productTable.length;
    },
    Title() {
      return this.editIndex === -1 ? "Add Product" : "Edit Product";
    },
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    computed: {
      rows() {
        return this.items.length;
      },
    },
  },
  methods: {
    importFile() {
      this.file1 = JSON.parse(this.file2);
      console.log(this.file1);
      return this.file1;
    },
    addProduct() {
      this.modalShow = true;
      this.editForm = Object.assign({}, this.formFields);
      this.editIndex = -1;
    },
    editProduct(item) {
      this.modalShow = true;
      this.editIndex = this.productTable.indexOf(item);
      this.editForm = Object.assign({}, item);
      console.log(this.response.data.data);
    },
    deleteProduct(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm(" do you want to Delete this item.", {
          title: "Delete item",
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
            const index = this.productTable.indexOf(item);
            this.productTable.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },
    // fun() {
    //   this.result = this.employeeTable.filter((row) => {
    //     return row.product.includes(this.res);
    //   });
    //   console.log("mahesh", this.result);
    // },
    product() {
      this.$router.push("/productForm");
    },

    home() {
      document.getElementById("Home").innerHTML =
        "Welcome to the logistic products";
    },
    created() {
      axios(this.endpoint).then(
        (response) => (this.productTable = response.data.data)
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
        Object.assign(this.productTable[this.editIndex], this.editForm);
        axios.put(this.endpoint + "/" + this.editForm.id, this.editForm);
      } else {
        this.productTable.push(this.editForm);
        axios.post(this.endpoint, this.editForm);
      }
      this.close();
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createInput(files[0]);
    },
    createInput(file) {
      var reader = new FileReader();
      reader.onload = () => {
        this.fileinput = reader.result;

        const convert = csv => {

const myArray = csv.split("\n");

const keys = myArray[0].split(',')

return myArray.splice(1).map(myArray => {

return myArray.split(',').reduce((acc, cur, i) => {

const toAdd = {};

toAdd[keys[i]] = cur;

return { ...acc, ...toAdd};

},{})

})

}

const coverted = reader.result

console.log(convert(coverted))

this.productTable=convert(coverted);

console.log( this.productTable)

return this.productTable;


};

//reader.onerror = err => console.log(err);

//reader.readAsText(this.file);



  
      reader.readAsText(file);
      console.log(reader);
      console.log(this.fileinput);
    },
    Export() {
      const objectToCsv = function (data) {
        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(","));
        for (const row of data) {
          const values = headers.map((header) => {
            const val = row[header];
            return `"${val}"`;
          });
          csvRows.push(values.join(","));
        }
        return csvRows.join("\n");
      };
      const data = this.productTable;
      const csvData = objectToCsv(data);
      console.log(csvData);
      //const data = this.tableData;
      const fileName = "TableData";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    },
  },
};
</script>
<style>
.formFile {
  position: absolute;
  left: 105px;
}
.home {
  position: absolute;
  top: 0.5;
  left: 100px;
  height: 70px;
}
.nav {
  position: absolute;
  top: 0;
  right: 0;
}
.save{
  position: absolute;
  bottom: 454px;
  width: 45px;
  height: 35px;
  right: 35px;
}
.addStudent {
  position: absolute;
  left: 0;
}
.import {
  position: absolute;
  left: 340px;
}
.export {
  position: absolute;
  left: 450px;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

