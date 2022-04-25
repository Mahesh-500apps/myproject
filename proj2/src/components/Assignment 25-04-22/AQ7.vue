<template>
    <div>
            <button type="submit" @click="fun">Click</button>

        </div>
</template>
<script>

export default{
    name:"MahI",
    data() {
        return{
            
                    data:[ 
                        { id: 20, name: 'Captain Piett' }, 
                        { id: 24, name: 'General Veers' }, 
                        { id: 56, name:'Admiral Ozzel' }, 
                        { id: 88, name: 'Commander Jerjerrod' } 
                        ],
        }
        
    },
    methods:{
        fun() {

this.result = this.data.findIndex((item) => {

return item.id == "88";

});

document.write(this.result);


    }
    }
}

</script>
