<template>
    <div>
        <p>hi</p>
        <emit-11 @click="changed"/>
        <p>{{output}}</p>
        </div>
</template>

<script>
import emit11 from './emit11.vue'

export default {
  components: { emit11 },
    name:"PEmit",
    data() {
        return{
            output:"satya"

        }
    },
    methods:{
        changed(event){
            this.output=event
        }
    }
}
</script>
