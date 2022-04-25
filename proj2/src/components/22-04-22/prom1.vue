<template>
    <div>
        promises
        </div>
</template>
<script>




export default {
    name:"ProMise",
    data() {
        return{

        }
        
    },
created(){
    var promise=new promise(function(resolve,reject)
    {

        reject(reject);
        }).then(function(success){
            console.log(success)
            console.log("promise resolved");
            })
            .catch(function(reject){
                console.log(reject)
                console.log("promise rejected");

            })


}
}

</script>
