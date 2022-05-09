<template>

   <vue-country-code
                  @onSelect="onSelect"
                  :preferredCountries="['vn', 'us', 'gb']">
   </vue-country-code>

<template>
<script>
export default {
    name:"PhonE",
  data() {
    return {
    };
  },
  methods: {
     onSelect({name, iso2, dialCode}) {
       console.log(name, iso2, dialCode);
     },
  },
}
</script>
