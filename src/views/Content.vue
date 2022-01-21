<template>
  <div id="App">
    
    <Header @currentProduct="onCurrentProduct" />
    <ProductTable :products="products" />
  </div>
</template>
<script>
import Header from "./Header.vue";
import ProductTable from "./ProductTable.vue";
export default {
  components: {
    Header,
    ProductTable,
  },
  data: () => ({
    //
    openProductPage:false,
    dialog: false,
    products: [],
  }),
  methods: {
    onCurrentProduct(currentProduct) {
      this.products.push(currentProduct);
    },
  },
};
</script>
