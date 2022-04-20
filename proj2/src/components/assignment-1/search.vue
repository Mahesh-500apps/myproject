<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
      name:"MahI",
    data() {
      return {
        selected: null,
        options: ["agile","crm","mantra","technologies","500apps","infinity"]
          
      
    }
  }
  }
</script>