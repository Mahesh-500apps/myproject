<template>
  <div>
    hiiii
    <flatfile-button
      :settings="settings"
      :licenceKey="licenceKey"
      :customer="customer"
      :onData="onData"
      >upload file</flatfile-button
    >
  </div>
</template>
<script>
import { FlatfileButton } from "@flatfile/vuejs";
export default {
  name: "uploadFile",
  components: { FlatfileButton },
  data() {
    return {
      licenceKey: "04552f9f-f9bo-4626-9d68-00ad2f192c2f",
      settings: {
        type: "test import",
        fields: [
          { label: "Name", key: "name" },
          { label: "Email", key: "email" },
        ],
      },
      customer: {
        userid: 54321,
      },
    };
  },
  methods: {
    onData(results) {
      let errorState = false;
      console.log("onData results{}");
      console.log(results);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (errorState) {
            reject("rejected-thistext is controlled by the end-user");
            errorState = false;
          } else {
            resolve(
              "Flatfile upload successful -this text is controlled by the end user"
            );
          }
        }, 3000);
      });
    },
  },
};
</script>
