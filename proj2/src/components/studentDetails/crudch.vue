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
    <br /><br /><br /><br /><br/>

    <b-table striped hover class="table" :items="tableData" :fields="columns">
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info">Edit</b-button>&nbsp;

        <b-button v-b-modal.modal-1 @click="hello(data.item)" variant="danger"
          >Delete</b-button
        >
      </template>
    </b-table>
    <b-modal v-model="modalShow" :title="Title" hide-footer>
      <b-form @submit.prevent="save">
        <slot :formdata="editedItem" name="input-fields"> </slot>

        <b-button type="submit" class="submit"> </b-button>
      </b-form>
    </b-modal>
    <b-modal
          id="modal-1"
          ref="deleteConfirmation"
          title="Delete Details"
          @ok="Delete"
        >
          Do you want to delete data?
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
      delete_data: null
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Student" : "Edit Student";
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
    Delete() {
      const index = this.tableData.indexOf(this.delete_data);
      // this.$emit("OK", this.delete_flag);
      // this.$bvModal.hide("delete-confirmation-modal-" + this.id);
      this.tableData.splice(index, 1);
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
  hello(data) {
    this.delete_data = data;

    this.$refs.deleteConfirmation.show();
  },
  created() {
    axios(this.endpoint).then(
      (response) => (this.tableData = response.data.data)
    );
  },
};
</script>
<style scoped>
.loginName {
  position: absolute;
  top: 0;
  right: 0;
}
.addStudent {
  position: absolute;
  left: 0;
}
.submit {
  position: relative;

  bottom: 500px;

  width: 40px;

  height: 35px;

  right: -400px;
}

.table {
  counter-reset: Student_details; /* Set the serial number counter to 0 */
}

. tr td:first-child:before {
  counter-increment: Student_details; /* Increment the serial number counter */

  content: counter(Student_details); /* Display the counter */
}
</style>