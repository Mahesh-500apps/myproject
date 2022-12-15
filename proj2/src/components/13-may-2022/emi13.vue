<template>
  <div>
    <p>emit</p>

    <b-table striped hover :items="user" :fields="fields"></b-table>

    <emit14 @check="parent" />
  </div>
</template>

<script>
import emit14 from "./emit14.vue";

export default {
  name: "EmitParent",

  components: {
    emit14,
  },

  data() {
    return {
      user: [
        { name: "mahesh", subject: "db" },

        { name: "kiran", subject: "db" },

        { name: "arjun", subject: "db" },
      ],

      fields: ["name", "subject"],
    };
  },

  methods: {
    parent(data) {
      console.log("data", data);
      this.user[0].subject = data.subject;
    },
  },
};
</script>

