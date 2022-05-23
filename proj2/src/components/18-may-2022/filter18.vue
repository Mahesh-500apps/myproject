<template>
  <div>
    <b-container>
      <b-row
        ><b-col></b-col><b-col><b-table :items="students"></b-table></b-col
        ><b-col></b-col
      ></b-row>
      <button @click="fun()">filter</button>
     
      <b-row
        ><b-col></b-col><b-col><b-table :items="result"></b-table></b-col
        ><b-col></b-col
      ></b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "filterFunction",
  data() {
    return {
      hi: "msg",
      students: [
        { id: 1, name: "mahesh", age: 20 },
        { id: 2, name: "madhu", age: 21 },
        { id: 3, name: "sanjay", age: 20 },
        { id: 4, name: "jay", age: 21 },
      ],
      result: [],
    };
  },
  methods: {
    fun() {
      this.result = this.students.filter((row) => {
        console.log(row);
        return row.age == 20;
      });
      console.log(this.result.value);
    },
  },
};
</script>