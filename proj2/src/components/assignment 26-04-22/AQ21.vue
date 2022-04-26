<template>
    <div>
        <button @click="alpha">Alpha</button>
        <button @click="rev">"Reverse</button>
        <!-- <p>{{users}}</p> -->
        
    </div>
</template>
<script>

export default{
    name:"MahI",
    data() {
        return{
            users :[
                {name: '500apps',id:1},
                {name:'Technologies',id:4},
                {name:'Agile',id:3},
                {name:'Mantra',id:2},
                {name:'Clockly',id:5},
                {name:'CRM',id:6},
                {name:'500apps',id:7}
                ],
            field:"",
            reverse:""
        }
        
    },
    methods:{
        alpha(){
              let field = "name";
             let res = this.users.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
             document.write(JSON.stringify(res))
}, 
rev(){
let field = "name";
             let res = this.users.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString()));
             document.write(JSON.stringify(res.reverse()))
}
        }     
    }
</script>
