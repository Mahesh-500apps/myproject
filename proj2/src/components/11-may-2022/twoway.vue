<template>
<div>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
    name:"TwO",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onInput(e) {
      this.text = e.target.value
    }
  }
}
</script>