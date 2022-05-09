 <template>

    <div>
      <h2>{{post.title}}</h2>
      <div>{{post.content}}</div>
      <button v-on:click="$emit('change-font')">
        Change Font
      </button>
    </div>
    </template>
    <script>
        export default{
            name:"JuNe",
            data(){
         return{
    posts: [{ title: "Foo", content: "foo" }, { title: "Bar", content: "bar" }],
    font: ""
         }
  },
  methods:{
    changeFont() {
      this.font = this.font === "" ? "courier" : "";
    }
  }
}
    </script>
