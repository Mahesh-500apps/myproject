<template>
  <div>
    <p>Wrapper for a text input</p>
    <input
      type="text"
      placeholder="Custom input!"
      @change='$emit("change", $event.target.value)'
    />
  </div>
</template>

<script>
  export default {
      emits: ["change"]
  }
  
</script>
