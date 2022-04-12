<template>
<div id="app">
<HelloWorld msg="Welcome to Your Vue.js App"/>
<router-view></router-view>
<alerT1/>
</div>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'
//import demo1 from "./components/demo1.vue"
//import bcard from './components/bcard.vue'
//import Button from './components/Button.vue'
// import example from './components/example.vue'
//import alerT1 from './components/example.vue'
export default {
name: 'App',
components: {
//HelloWorld,
//bcard,
//Button,
// example,
//alerT1,
}
}
</script>
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
