<template>
  <div>
    <input type="file" ref="myFile" @change="changeToJson($event)" />
    {{ result }}
  </div>
</template>
<script>
export default {
  name: "fileToJson",
  data() {
    return {
      lines: "",
      currentline: "",
      csv: "",
      headers: "",
      result: "",
      value: "",
    };
  },
  methods: {
    changeToJson(evt) {
      let reader = new FileReader();
      reader.readAsBinaryString(this.refs.myFile.files[0]);

      reader.onLoad = (evt) => {
        console.log(evt);
        this.csv = reader.result;
        this.lines = this.csv.split("\r" + "\n");
        this.headers = this.lines[0].split(",");
        for (var i = 1; i < this.lines.length; i++) {
          if (!this.lines[i]) continue;
          let obj = {};
          this.currentline = this.lines[i];
          var re = /"/g;
          this.currentline = re[this.symbol.replace](this.currentline, "");
          this.currentline = this.currentline.split(",");
          for (var j = 0; j < this.headers.length; j++) {
            if (j == 0 || j == 1 || j == 2 || j == 3 || j == 4) {
              let head = this.headers[j].trim();
              this.value = obj[head];
            }
          }
          this.result.push(obj);
        }
        this.result = JSON.stringify(this.result);
        console.log(this.result);
      };
      console.log(evt);
    },
  },
};
</script>