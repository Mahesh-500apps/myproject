<template>
  <div class="component2">
    <button @click="count">Click</button>

    <button @click="changename">click here</button>
  </div>
</template>

<script>
import { bus } from "../../bus";

export default {
  name: "ComponenT2",

  data() {
    return {
      click: 0,
    };
  },

  methods: {
    count() {
      this.click += 1;

      bus.$emit("change", this.click);
    },

    changename() {
      bus.$emit("changename", { name: "Anuradhataddi" });
    },
  },
};
</script>




