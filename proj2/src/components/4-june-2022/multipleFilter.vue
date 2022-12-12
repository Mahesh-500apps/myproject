<template>
  <div> hii
    <select v-model="category">
       
      <option value="Accessories">Accessories</option>
      <option value="Laptop">Laptop</option>
      <option value="Stationary">Stationary</option>
    </select>
    <input type="text" v-model="name" placeholder="Filter By Name" />
    <label for="vol">Price (between 0 and 1000):</label>
    <input type="range" v-model="range" min="0" max="1000" step="10" />
    <ul>
      <li :v-for="product in filterProducts">
        Product Name : {{ product.name }} - Price : {{ product.price }} ({{
          product.category
        }})
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "filterItems",
  data() {
    return {
      category: "",
      name: "",
      range: "500",
      products: [
        { name: "Keyboard", price: 44, category: "Accessories" },
        { name: "Mouse", price: 20, category: "Accessories" },
        { name: "Monitor", price: 399, category: "Accessories" },
        { name: "Dell XPS", price: 599, category: "Laptop" },
        { name: "MacBook Pro", price: 899, category: "Laptop" },
        { name: "Pencil Box", price: 6, category: "Stationary" },
        { name: "Pen", price: 2, category: "Stationary" },
        { name: "USB Cable", price: 7, category: "Accessories" },
        { name: "Eraser", price: 2, category: "Stationary" },
        { name: "Highlighter", price: 5, category: "Stationary" },
      ],
    };
  },
  computed: {
    filterProducts: function () {
        console.log("mahi")
      return this.filterProductsByRange(
        this.filterProductsByName(this.filterProductsByCategory(this.products))
      );
    },
  },
  methods: {
    filterProductsByCategory: function (products) {
        console.log("ram")
      return products.filter(
        (product) => !product.category.indexOf(this.category)
      );
    },
    filterProductsByName: function (products) {
      return products.filter((product) => !product.name.indexOf(this.name));
    },

    filterProductsByRange: function (products) {
      return products.filter((product) =>
        product.price > 0 && product.price < this.range ? product : ""
      );
    },
  },
};
</script>