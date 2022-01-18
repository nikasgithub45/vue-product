<template>
  <div class="container">
    <v-app id="inspire">
      <Header @currentProduct = "onCurrentProduct" />
      <ProductTable :products="products"/>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProductTable from "./components/ProductTable.vue";
export default {
  name: "App",
  components: {
    Header,
    ProductTable,
  },
  data: () => ({
    dialog: false,
    products: [],
  }),
  methods:{
    onCurrentProduct(currentProduct){
      this.products.push(currentProduct)
    }
  }

  
};
</script>
<style>
</style>
