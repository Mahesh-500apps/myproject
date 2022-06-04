<template>
    <div>
        <input type="file" @change="loadCSV($event)">
        <input type="checkbox" id="header_rows">
        <a href="#">parseCsv</a>
       {{key}}  
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      fields: "",
      entries: "",
      parse_header: "",
      parse_csv: "",
      sortOrders: {},
      sortKey: "",
    };
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase + str.slice(1);
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    csvJSON(csv) {
      var lines = csv.split("\n");
      var result = [];
      var headers = lines[0].split(",");
      this.parse_hearder = lines[0].split(",");
      lines[0].split(",").forEach(function (key) {
        this.sortOrders[key] = 1;
      });
      lines.map(function (line, indexLine) {
        if (indexLine < 1) return;

        var obj = {};
        var currentline = line.split(",");
        headers.map(function (header, indexHeader) {
          obj[header] = currentline[indexHeader];
        });
        result.push(obj);
      });
      result.pop();
      return result;
    },
    loadCSV(e) {
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = function (event) {
          var csv = event.target.result;
          this.parse_csv = this.csvJSON(csv);
        };
        reader.onerror = function (evt) {
          if (evt.target.error.name == "NotReadableError") {
            alert("cannot read file");
          }
        };
      } else {
        alert("FileReaderare not supported in this browser");
      }
    },
  },
};
</script>
