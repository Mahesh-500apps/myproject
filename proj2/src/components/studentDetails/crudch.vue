<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-navbar-brand href="#">vue</b-navbar-brand>
        <b-nav align="left">
          <b-nav-item varient="danger" type="light" class="loginName">
            login name:mahesh Atla
          </b-nav-item>
        </b-nav>
      </b-navbar>
    </div>
    <br /><br /><br />

    <div>
      <b-button @click="Create" class="addStudent"> Add Student</b-button>
    </div>
    <br /><br /><br /><br />

    <b-table striped hover :items="tableData" :fields="columns" class="table">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" v-b-modal="'edit-modal'" variant="info">Update</b-button>
        <b-button
          @click="Delete(data.item)"
          v-b-modal="'edit-modal'"
          variant="danger"
          >delete
        </b-button>
      </template>
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>

        <b-button type="submit" class="submit"> Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "studentDetails",
  props: ["endpoint", "columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Student" : "Edit Student" ;
    },
    itemsWithSno() {
      return this.columns.map((item) => ({
        ...item,
        sno: this.editedIndex + 1,
      }));
    },
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      this.editedIndex = -1;
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete(item) {
      this.modalshow=true;
      const index = this.tableData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableData.splice(index, 1);
      axios.delete(this.endpoint + "/" + item.id);
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
        axios.put(this.endpoint + "/" + this.editedItem.id, this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
        axios.post(this.endpoint, this.editedItem);
      }
      this.close();
    },
  },
  created() {
    axios(this.endpoint).then(
      (response) => (this.tableData = response.data.data)
    );
  },
};
</script>
<style scoped>
.submit {
  position: absolute;
  right: 0;
  top: 0;
}
.loginName {
  position: absolute;
  top: 0; /* */
  right: 0;
}
.addStudent {
  position: absolute;
  left: 0;
}
.css-serial {
 counter-reset: serial-number; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
 counter-increment: serial-number; /* Increment the serial number counter */
 content: counter(serial-number); /* Display the counter */
}
</style>
