<template>
    <div id="app">
        <h1>This is Heading Element</h1>
        <p>This is Paragraph Element</p>
        <button>{{message}}{{counter}}</button> 
    </div>
</template>

<script>

export default{
    name:"HiP",
    data(){
    return {
        message:'I am vue Developer',
        counter:0,
    }
}
}


</script>