<template>
<div></div>
</template>
<script>
const axios = require('axios')

const cheerio = require('cheerio')

export default {

name:"ScraP",

data(){

return{

response:[],

}

},

methods:{

getdata(){

let url='https://www.msn.com/en-au?AR=2';

axios({

method:'get',

url:url,

})

.then(function(response){

let html=response.data;

let $=cheerio.load(html);

console.log(html)

$("ul.tertiary li").each(function(){

$(this).find('h3').attr('area-lable');

});

})

//console.log(html)

}

},

created(){

this.getdata();

}
}
</script>



