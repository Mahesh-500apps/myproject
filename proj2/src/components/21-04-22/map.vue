<template>
<div>
<!-- <p>{{items}}</p> -->
    <button type="submit" @click="fun">Click</button>
</div>
</template>
<script>
export default{
    name:"MahE",
    data(){
        return{                    
            data:[
                {id:1,fname:"siva",lname:"ram",job:"developer"},
                {id:2,name:"rudra",lname:"sai",job:"developer"},
                {id:3,name:"sanju",lname:"jaanu",job:"developer"}
            ],

        }
    },
    methods:{

        fun(){
        const result= this.data.map((item)=>{
                return{
                    name:item.fname+' '+item.lname,
                    job:item.job
                    
                }
        });
            console.log(result);
            }
}
}
</script>

