<template>
<div>

    <input type="text" v-model="res" placeholder="enter the text">
    <button @click="fun">Click</button>
</div>
</template>
<script>
export default{
    name:"MahE",
    data(){
        return{                    
            data:[
                {id:1,fname:"siva",lname:"ram",job:"developer"},
                {id:2,fname:"rudra",lname:"sai",job:"tester"},
                {id:3,fname:"sanju",lname:"jaanu",job:"manager"},
                {id:4,fname:"siri",lname:"sha",job:"developer"},
                {id:5,fname:"lucky",lname:"ram",job:"tester"},
                {id:6,fname:"jaanu",lname:"sri",job:"Manager"},
                {id:7,fname:"jai",lname:"ram",job:"developer"},
                {id:2,fname:"rudra",lname:"ram",job:"tester"},
                {id:3,fname:"siva",lname:"lakshya",job:"manager"},
                {id:4,fname:"mahi",lname:"harry",job:"developer"},
                {id:5,fname:"john",lname:"sam",job:"tester"},
                {id:6,fname:"harika",lname:"ram",job:"Manager"},
                {id:1,fname:"jay",lname:"krish",job:"developer"},
                {id:2,fname:"sunil",lname:"varma",job:"tester"},
                {id:3,fname:"ajay",lname:"geeth",job:"manager"},
                {id:4,fname:"ravi",lname:"krishna",job:"developer"},
                {id:5,fname:"murali",lname:"ram",job:"tester"},
                {id:6,fname:"krishna",lname:"siva",job:"Manager"},
                
                                
            ],
            array:['jaanu','harry','potter','dumbledore','hermione'],
            res:"",
            }
    },
    methods:{

        fun(){
        const result= this.data.filter((row)=>{
            
            return row.fname.includes(this.res.fname);
        
        })
            console.log(result);
            }
}
}
</script>