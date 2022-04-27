<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-input
        id="d1"
        v-model="value"
        placeholder="Enter the country name"
        required
      ></b-form-input
      >
   
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: 'c', text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>