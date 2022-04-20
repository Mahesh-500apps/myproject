<template>
    <div>
        <button @click="handle()">handle</button>
        write
        </div>
</template>
<script>

export default{
    name:"MaHa",
    methods: {
        handle(){
        try{
           let count = count * 5;
          console.log("printing count",count);
        
        }
        catch(error){

            console.log("count is not assigned");
        }
    }
}
}
</script>
