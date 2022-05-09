<template>
    <div>
      <h3>Input: {{ title }}</h3>
      <chill @newValue="changeTitle" />
    </div>
  </template>
  
  <script>
  import chill from "./chill1";
  import {ref} from "vue"
  export default {
    name: "ParentComponent",
    components: {
      chill
    },
    setup() {
      const title = ref("");
      const changeTitle = (newTitle) => {
        console.log("fire")
        title.value = newTitle;
      };
      return { title, changeTitle };
    },
  };
  </script>
  