<template>
  <div>
    <p>Wrapper for a text input</p>
    <input type="text" placeholder="Custom input!" @change="customChange" />
  </div>
</template>

<script>
  export default {
      setup (props, context) {
          const customChange = (event) => {
              context.emit("customChange", event.target.value)
          }
          return {
              customChange
          }
      }
  }
</script>
