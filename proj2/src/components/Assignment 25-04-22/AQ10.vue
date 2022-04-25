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
            users : [ { id: 20, name: 'Captain Piett' },
                      { id: 24, name: 'General Veers' }, 
                      { id: 56, name:'Admiral Ozzel' },
                      { id: 88, name: 'Commander Jerjerrod' }
                      ],
                       }
    },
    methods:{

        fun(){
        const result= this.users.map(j=>{
                return j.id
                     
        });
            document.write(result);
            }
}
}
</script>

