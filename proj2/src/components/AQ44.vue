<template>

<b-container fluid>

<center><b-form-select v-model="value" :options="countries">countries

</b-form-select><br/>

<button @click="getData()" class="button">click to get data</button></center>

<b-form-group

label=""

label-for="filter-input"

label-cols-sm="8"

label-align-sm="center"

label-size="l"

class="mb-0">

<b-input-group size="sm">

<b-form-input

id="filter-input"

v-model="filter"

type="search"

placeholder="Type to Search"></b-form-input>

<b-input-group-append>

<b-button :disabled="!filter" @click="filter = ''" class="button2">refresh</b-button>

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

v-slot="{ ariaDescribedby }">

<b-form-checkbox-group

v-model="filterOn"

:aria-describedby="ariaDescribedby"

class="mt-1">

<b-form-checkbox value="name">university_name</b-form-checkbox>

<b-form-checkbox value="domains">domains</b-form-checkbox>

<b-form-checkbox value="web_pages">website_url</b-form-checkbox>

<b-form-checkbox value="state">state_province</b-form-checkbox>

</b-form-checkbox-group>

</b-form-group>

<b-container>

<b-table

:items="posts"

:fields="fields"

:filter="filter"

:filter-included-fields="filterOn"

@filtered="onFiltered">

</b-table>

</b-container>

<template #cell(actions)="row">

<b-button

size="sm"

@click="info(row.item, row.index, $event.target)"

class="mr-1">

Info modal

</b-button>

<b-button size="sm" @click="row.toggleDetails">

{{ row.detailsShowing ? "Hide" : "Show" }} Details

</b-button>

</template>

</b-container>

</template>

<script>

const { getNames } = require("country-list");

import axios from "axios"

export default {

name: "QnEW",

data() {

return {

posts: " ",

fields: ["name", "domains", "web_pages", "state-province"],

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


if (this.countries.length) this.value = this.countries[0].text;

},

methods: {

async getData() {

try {

let response = await axios.get("http://universities.hipolabs.com/search?country=" + this.value);

this.posts = await response.data;

} catch (error) {

console.log(error);

}

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
<b-container>
    <b-form-select v-model="value" :options="countries">
      
      </b-form-select>
      <b-button @click="country">Submit</b-button>
      <!-- <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>  -->
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
<b-pagination v-model="currentPage" :total-rows="fun" :per-page="perPage" aria-controls="my-table"></b-pagination>

<b-row cols-md="7">

<b-table id="my-table" :per-page="perPage" :current-page="currentPage" striped hover :items="items">

<b-col><p>university_name: {{ value.university_name }}</p></b-col>

<b-col><p>domains: {{ value.domains }}</p></b-col>

<a :href="value.website_url" _target="blank">{{value.website_url}}</a>

<b-col><p>state_province: {{ value.state_province }}</p></b-col>

</b-table>
</b-row>
</b-container>