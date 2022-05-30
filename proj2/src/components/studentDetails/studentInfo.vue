<template>
  <div>
    <center>
    
        <!-- <b-navbar>
          <b-navbar-brand><b-icon icon="building" /> 500Apps</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
              <b-nav-item varient="danger" type="light" class="loginName">
            login name:mahesh Atla
          </b-nav-item>
          
          </b-navbar-nav>
        </b-navbar> -->
        <b-navbar toggleable="lg" type="dark" variant="warning">
          <b-navbar-brand href="#">vue</b-navbar-brand>
          <b-nav align="left">
            <b-nav-item varient="danger" type="light" class="loginName">
              login name:mahesh Atla
            </b-nav-item>
          </b-nav>
        </b-navbar>
        <br /><br />
        <br /><br />
        <div>
          <b-button variant="primary" @click="addEmployee" class="addStudent"
            >Add Employee</b-button
          >
        </div>
        <br /><br />
        <br /><br />
        <b-table
          striped
          hover
          :items="employeeTable"
          :fields="columns"
          id="table"
          class="css-serial"
        >
          <template #cell(action)="data">
            <b-button @click="editEmployee(data.item)" variant="primary" size="sm"
              ><b-icon icon="pencil-fill" /></b-button
            >&nbsp;
            <b-button
              @click="deleteMessage(data.item)"
              variant="danger"
              size="sm"
            >
              <b-icon icon="x-square"
            /></b-button>
          </template>
        </b-table>
        <b-modal v-model="modalShow" :title="Title" hide-footer>
          <b-form @submit.prevent="save">
            <slot :formdata="editForm" name="input-fields"> </slot>
              <b-button variant="success" type="submit" class="submit"
                ><b-icon-save/></b-button
              >            
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
      editForm: this.formFields,
      modalShow: false,
      editIndex: -1,
      employeeTable: [],
    };
  },
  computed: {
    Title() {
      return this.editIndex === -1 ? "Add Employee" : "Edit Employee";
    },
  },
  methods: {
    addEmployee() {
      this.modalShow = true;
      this.editForm = Object.assign({}, this.formFields);
      this.editIndex = -1;
    },
    editEmployee(item) {
      this.modalShow = true;
      this.editIndex = this.employeeTable.indexOf(item);
      this.editForm = Object.assign({}, item);
    },
    deleteMessage(item) {
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
  },
};
</script>


<style>
.login {
  position: absolute;
  top: 0.5;
  right: 0;
}
.loginName {
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
.css-serial {
  counter-reset: employee_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: employee_details; /* Increment the serial number counter */
  content: counter(employee_details); /* Display the counter */
}
</style>

