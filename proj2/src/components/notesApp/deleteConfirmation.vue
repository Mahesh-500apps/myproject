<template>
  <b-modal
    @ok="save()"
    :id="'delete-confirmation-modal-' + id"
    :title="message"
    dialog-class="delete-confirmation"
    header-class="p-3"
    content-class="bg-soft-light p-0"
    body-class="bg-soft-light p-3 rounded"
    hide-footer
    @close="confirm_value = ''"
  >
    hiii

    <template #default="">
      <div class="container">
        <b-row>
          <b-col class="px-0">
            <b-card class="mb-0 shadow-none">
              <label>{{ confirmationMessage }}</label>

              <label>{{ confirmationInformationMessage }}</label>

              <div v-if="show_input">
                <b-input-group size="sm" class="mb-1">
                  <b-form-input
                    @input="checkInput()"
                    :placeholder="confirm"
                    v-model="confirm_value"
                  ></b-form-input>
                </b-input-group>

                <span
                  class="small"
                  :class="error ? 'text-danger' : 'text-muted'"
                  >{{
                    helpText
                      ? helpText
                      : "Please type the name exactly as it appears."
                  }}</span
                >

                <b-form-group v-if="check_box">
                  <b-form-checkbox
                    id="checkbox"
                    v-model="delete_flag"
                    name="category"
                    :value="false"
                    :unchecked-value="true"
                  >
                    {{ checkbox_delete_label }}
                  </b-form-checkbox>
                </b-form-group>
              </div>

              <div class="text-center mt-4">
                <b-button
                  size="sm"
                  variant="outline-secondary mr-3 px-3"
                  @click="$bvModal.hide('delete-confirmation-modal-' + id)"
                >
                  Cancel
                </b-button>

                <b-button
                  :disabled="confirm != confirm_value"
                  size="sm"
                  variant="primary px-3"
                  @click="save()"
                >
                  Delete
                </b-button>
              </div>
            </b-card>
          </b-col>
        </b-row>
        hiiiiii 
      </div>
    </template></b-modal
  >
</template>


<script>
export default {
  name: "DeleteConfirmation",

  props: {
    helpText: String,

    message: String,

    confirmationMessage: String,

    confirmationInformationMessage: String,

    confirm: String,

    checkbox_delete_label: String,

    check_box: {
      type: Boolean,

      default: () => false,
    },

    show_input: {
      type: Boolean,

      default: () => true,
    },
  },

  data() {
    return {
      confirm_value: "",

      error: false,

      id: Math.random(),

      delete_flag: true,
    };
  },

  methods: {
    open() {
      this.error = false;

      this.confirm_value = "";

      this.$bvModal.show("delete-confirmation-modal-" + this.id);
    },

    // delete(member) {

    // if (confirm(`Are you sure you want to delete ${this.id}?`)) {

    // this.$emit("OK", this.delete_flag);

    // this.deleteMember(member);

    // }

    // },

    save() {
      this.$emit("OK", this.delete_flag);

      this.$bvModal.hide("delete-confirmation-modal-" + this.id);
    },

    checkInput() {
      this.error = !(this.confirm_value == this.confirm);
    },
  },
};
</script>

<style scoped></style>



