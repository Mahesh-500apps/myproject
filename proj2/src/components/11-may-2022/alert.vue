<template>
    <div>
        <div>
            <b-container>
  <b-alert show variant="success">
    <h4 class="alert-heading">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to
      run a bit longer so that you can see how spacing within an alert works with this kind of
      content.
    </p>
    <hr>
    <p class="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
    <button @click="fun()">ok</button>
  </b-alert>
            </b-container>
</div>
        </div>
</template>
<script>

export default {
    name:"AlerT",
    data() {
        return{

        }
        
    },
    methods:{
        fun(){
            alert("element was deleted")
             }
    }
}
</script>
