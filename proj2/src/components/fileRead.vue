<template>
<div>
    <input type="file" accept=".csv" @change="handleFileUpload( $event )"/>
</div>
</template>
<script>
import Papa from 'papaparse';


export default {
    name:"FileReader",
    data(){
    return {
        file: '',
        content: [],
        parsed: false
    }
},
methods:{
    handleFileUpload( event ){
    this.file = event.target.files[0];
    this.parseFile();
},
parseFile(){
    Papa.parse( this.file, {
        header: true,
        skipEmptyLines: true,
        complete: function( results ){
            this.content = results;
            this.parsed = true;
            console.log(results)
        }.bind(this)
        
    } );
},
}
        
    }

</script>
