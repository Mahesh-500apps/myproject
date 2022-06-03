<template>
  <div>
    <form enctype="multipart/form-data">
      <input type="file" @change="onFileChange" />
      <b-table :items="res"></b-table>{{res}}
      
    </form>
  </div>
</template>
<script>
export default {
    name:"fileRead",
  data(){
      return{
    fileinput: "",
    res:[]
  }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createInput(files[0]);
    },
    createInput(file) {
      var reader = new FileReader();
    
      reader.onload = () => {
        this.fileinput = reader.result;
        this.res=JSON.stringify(this.fileinput)
        console.log("res",this.res)

      };
      reader.readAsText(file);
       // console.log(reader.result)
      //console.log(this.fileinput);
    },
  },
};
</script>
