<template>

 <div>
     <b-container>
         <form-10 @customChange="changed"/>
    <b-table striped hover :items="items"></b-table>
    </b-container>
</div>
</template>
<script>
import form10 from './form10.vue'

export default {
  components: { form10 },

    name:"QuestI",

    data() {

        return {

            items: [],

        }

},
methods:{
        changed(event){
            this.items=event
        }
    }


}



</script>