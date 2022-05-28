<template>
    <div>
    <h1 @click="changeHeader">{{header}}</h1>
<h1>{{header}}</h1>
    </div>
</template>
<script>
import { bus } from '../../bus'

export default{
    name:"grandChild",
      props:{
    header:{
        type: String
    } 
    },
    data() {
        return{

        }
        
    },
    methods:{
        changeHeader (){
          this.header = "changed header";
          bus.$emit('changeIt', 'changed header');
      }

    }

}
</script>
