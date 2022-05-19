<template>
<div>
    <b-row>
        <b-col></b-col><b-col>
    
    <b-form @submit="save">
    
          <div>
            <b-button class="button" v-b-toggle.sidebar-1>home</b-button>
    <b-sidebar id="sidebar-1" title="home" shadow>
      <div class="px-3 py-2"><br/><br/>      
    

          
            
            <b-button @click="clearAll()"> clearAll
            </b-button><br/>
            <br/>
                      <b-button variant="outline-info" class="mb-2">
      <b-icon icon="power" aria-hidden="true"></b-icon> 
    
                <router-link to="/login">logout</router-link>
            </b-button><br/>
            <br/>
                        <b-button @click="retrieve()"> reteieve</b-button>
                        {{result}}
            </div>
    </b-sidebar>
    </div>
    <b-button class="button1" type="submit">save</b-button><br/>
    <br/>

    <b-form-textarea :maxlength="50" v-model="form.text" rows="15" placeholder="enter your text here" required></b-form-textarea>
    
    </b-form>

    </b-col><b-col>
        </b-col></b-row>
  </div>
</template>

<script>

export default {
    name:"textArea",
    data(){
        return{
            form:{
            text:'',
            },
            result:''
        }
    },
    methods:{
        save(){
            alert("do you want to save")
            localStorage.setItem("text",this.form.text)
        },
       clearAll(){
           console.log("hello")
           localStorage.clear()
       },
       retrieve(){
         var x=localStorage.getItem("text")
         this.result=x;
         console.log(x)
       }


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
