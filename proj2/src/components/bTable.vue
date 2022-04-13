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
            fields:['name','lastname'],
            items:[
                {name:"mahesh", lastname:"atla", age:23, job:"developer"},
                {name:"sai", lastname:"varma", age:23, job:"test-engineer"},
                {name:"krishna", lastname:"reddy", age:23, job:"data analyst"},
                {name:"venky", lastname:"yadav", age:23, job:"manager"}
            ]
        }
    }
}
</script>
