<template>
    <div>
        <b-table :items="items" :fields="fields"> </b-table>
        </div>
</template>
<script>
export default{
    name:"MahI",
  
    data(){
        return{
            fields:['email','id','name'],
            items:[
{email: "Eliseo@gardner.biz",id: 1,name: "id labore ex et quam laborum"},
{email: "Jayne_Kuhic@sydney.com",id: 2,name: "quo vero reiciendis velitsimiliqueearum"},
{email: "Nikita@garfield.biz",id: 3,name: "odio adipisci rerum aut animi"},
{email: "Lew@alysha.tv",id: 4,name: "alias odio sit"}
]

        }
    }
}
</script>
