<template>
    <div>
        <childFile :name="name" :id="id" :message="message" @action="update" />
      
    </div>
</template>
<script>
import childFile from './childFile'
//import { bus } from '../../bus'

export default{
    name:"dataMethod",
    components:{ childFile },
    props:{
        header:{
            type: String
        } 
    },
    data(){
        return{
            name:"mahesh",
            id:5,
            message:"hello Moto"

        }
        
    },
    methods:{
        update(action){
            console.log(action);
            this.message=action.message
            this.id=action.id
            this.name=action.name
        }
    },
    //  created (){
    // bus.$on('changeIt', (data) => {
    //     { this.header = data }
    // })
    //  }
}
</script>
