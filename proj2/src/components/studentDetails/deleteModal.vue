<template>
    <div class="card w-100">
        <!-- Modal -->
        <div class="modal fade" id="confirmDeleteModal" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmDeleteModalLabel">{{modalTitle}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{modalContent}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-square" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary btn-square"
                                @click="deletePermission(permissionId)"
                                data-dismiss="modal">Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <b-modal class="btn-square" id="modal-xl" v-bind:size="modalSize" v-bind:title="modalTitle"
                 @ok="deletePermission(permissionId)">
            {{modalContent}}
        </b-modal>

        <div class="card-body">
            <v-client-table :data="rows" :columns="columns" :options="options">
            <span slot="actions" slot-scope="{row}">
                        <button v-on:click="showConfirmation(row)" type="button" class="btn btn-square btn-danger"
                                data-toggle="modal"
                                data-target="#confirmDeleteModal">
            Delete
        </button>


            </span>
            </v-client-table>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name: "deleteModal",
        data() {
            return {
                modalTitle: "modal title",
                modalContent: "modal content",
                modalSize: "l",
                permissionId: "0",
                isOpen: true,
                columns: ['name', 'short_description', 'description', 'actions'],
                rows: [],

                options: {
                    filterByColumn: false,
                    perPage: 10,
                    texts: {
                        filter: "",
                        filterBy: 'Filter {column}',
                        count: ' '
                    },
                    dateColumns: ['created_at'],
                    dateFormat: 'YYYY-mm-dd',
                    datepickerOptions: {
                        showDropdowns: true,
                        autoUpdateInput: true,
                    },
                    pagination: {chunk: 10, dropdown: false},
                    filterable: ['name', 'email'],
                    headings: {
                        name: 'Permission',
                        short_description: 'Short description',
                        description: 'Description',
                        actions: "Actions"
                    },
                }
            }

        },
        mounted() {
            this.getAllPermissions()
        },
        methods: {
            deletePermission(id) {
                axios.delete('/permission/' + id)
                    .then(response => {
                        if (response.data === 'ok') {
                            this.permissionDeleteconfirmation();
                        }
                    });

            },
            showConfirmation(row) {
                this.permissionId = row.id;
                this.modalSize = 'l';
                this.modalTitle = 'title modal';
                this.modalContent = 'Are you sure to delete permission: ' + row.name + '?';
            },
            getAllPermissions() {
                axios.get("https://api.sampleapis.com/baseball/battingAvgsSingleSeason")
                    .then(response => {
                        this.rows = response.data;
                    })
            }
        }, notifications: {
            permissionDeleteconfirmation: {
                title: 'Permission',
                message: 'Permission deleted with success',
                type: 'info',
                timeout: 2000
            }
        }
    }
</script>

<style scoped>

</style>
