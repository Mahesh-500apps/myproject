<template>
  <div>
    <b-container>
      <b-form-select v-model="value" :options="countries"> </b-form-select>
      <b-button @click="country">Submit</b-button>
      <b-container>
        <b-form-group
          label=""
          label-for="filter-input"
          label-cols-sm="0"
          label-align-sm="left"
          label-size="l"
          class="mb-0"
        >
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
          </b-input-group>
        </b-form-group>

        <b-form-group
          v-model="sortDirection"
          label="Filter on"
          description="Leave all unfiltered data"
          label-cols-sm="5"
          label-align-sm="left"
          label-size="sm"
          class="mb-0"
          v-slot="{ name }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="name"
            class="mt-1"
          >
            <b-form-checkbox value="name">university_name</b-form-checkbox>

            <b-form-checkbox value="domains">domains</b-form-checkbox>

            <b-form-checkbox value="web_pages">website_url</b-form-checkbox>

            <b-form-checkbox value="state">state_province</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-container>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
      >
      </b-table>
    </b-container>
  </div>
</template>


<script>
import axios from "axios";
const { getNames } = require("country-list");

export default {
  name: "MahI",
  data() {
    return {
      value: "",
      countries: [],
      fields: ["name", "domains", "web_pages", "state"],
      items: [],
      res: "",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  methods: {
    redirect(user) {
      window.open(user, "_blank");
    },
    async country() {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      const responseText = await response.data;
      console.log("response", responseText);
      this.items = responseText.map((row) => {
        return {
          domains: row.domains,
          web_pages: row.web_pages[0],
          name: row.name,
          state: row["state-province"],
        };
      });
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },

    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  created() {
    this.getData();
  },
};
</script>
