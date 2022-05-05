<template>
    <div>
        <button v-on:click="a++">add to A</button>
        <button v-on:click="b++">add to B</button>
        <p>A-{{a}}</p>
        <p>B-{{b}}</p>
        <p>Age +  A = {{addToA()}}</p>
        <p>Age +  B = {{addToB()}}</p>


        </div>
</template>
<script>
export default {
    name:"MahI",
    data() {
        return{
            age:20,
            a:0,
            b:0

        }
        
    },
    methods:{
        addToA(){
            console.log('addToA')
            return this.a+this.age;
        },
        addToB(){
            console.log('addToB')
            return this.b+this.age;
          
        }

        },
computed:{
    

    }
}
</script>
