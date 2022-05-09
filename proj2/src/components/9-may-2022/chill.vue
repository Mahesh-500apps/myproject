  <template>  <div>
      <h2>{{post.title}}</h2>
      <div>{{post.content}}</div>
      <button v-on:click="$emit('change-font', 'courier')">
        Change Font
      </button>
    </div>
    </template>
<script>
export default{
    name:"cHIll",
    data() {
        
    },
}
</script>
