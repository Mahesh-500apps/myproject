<template>
    <div>
        <p>{{Input}}</p>
        <button @click="unique">Output</button>
        <p>{{Output}}</p>
    </div>
</template>
<script>


export default{
    name:"UniQue",
    data() {
        return{
            Input: [ { name: 'Mantra', id: 10 },
            { name: '500apps', id: 10 },
            { name: 'Mantra', id: 20 },
            { name: 'Mantra', id: 10 } ],

Output:[]
    }
},
methods:{
    unique(){
this.Output = this.Input.filter((currentvalue, index, arr) => 
                index === arr.findIndex((t) => ( t.id === currentvalue.id && t.name === currentvalue.name )) ) 
    }
}
}
</script>
