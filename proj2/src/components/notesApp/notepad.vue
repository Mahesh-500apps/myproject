<template>
<div>
 <div>                
    <b-dropdown id="dropdown-1" text="Home" class="button">
 <b-button v-b-toggle.collapse-1 variant="primary" @click="retrieve()"> retrieve
        </b-button><br/>
<br/>
<br/>
<b-button @click="clearAll()"> clearAll
            </b-button><br/>
            <br/>            
    <b-button variant="outline-info" class="mb-2" >
      <b-icon icon="power" aria-hidden="true"></b-icon> 
    <router-link to="/login">logout</router-link></b-button>
</b-dropdown>
            </div>
   <b-form @submit="save">
    
    <b-button class="button1" type="submit" v-on:click="addText()">save</b-button><br/>
    <br/>
    <b-form-textarea :maxlength="50" v-model="result" rows="15" placeholder="enter your text here" required></b-form-textarea>
    
    </b-form>
    <b-collapse id="collapse-1" class="mt-2">
    <b-card v-for="name in names" :key="name.id">
      <b-card-text>{{name}}</b-card-text>
      <b-button @click="add">add</b-button>
     <b-button @click="remove">remove</b-button></b-card>
      </b-collapse>
      </div>
</template>
<script>
export default {
    name:"textArea",
    data(){
        return{            
            text:'',            
            result:'',
            x:'',
           data:[],
            names:[]
        }
    },
    methods:{
        save(){
            alert("do you want to save")
            localStorage.setItem("text",this.result)
            
        },
        addText:function(text){
         text=this.result
            this.names.push(text)
        },
              
//Object.assign(this.result);
         //this.result=this.x;       
       clearAll(){
           console.log("hello")
           localStorage.clear();
           this.names.splice(0,this.names.length)
       },
    //    retrieve(){       
    //      var x=this.result
    //         var names=this.data.forEach((name)=>{
    //             name.push(x)
               
    //         })
    //     console.log(names)
    //    },
       add(){
           localStorage.setItem("text",this.result)
       },
    remove(){
           localStorage.removeItem("text");
           this.names.pop();
       },
      }      
}
</script>
<style scoped>
.button{
    position:absolute;
     top:0;
     left:0;
}
.button1{
    position:absolute;
     top:0;
     right:0;
}
.button2{
    position:absolute;
     top:0;
     right:0.5;

}
</style>
