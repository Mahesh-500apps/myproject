<template>
  <div>
    <input type="file" onchange="readFile(this)" />
  </div>
</template>
<script>
export default {
  name: "fileReader",
  data() {
    return {
        
    };
  },
  methods: {
    readFile(input) {
      let file = input.files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      console.log(file);
      reader.onload = function () {
          console.log(reader)
        console.log(reader.result);
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    },
  },
};
</script>
