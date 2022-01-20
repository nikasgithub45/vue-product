<template>
  <div class="container">
    <v-app id="inspire">
       <router-view />
      <Header @currentProduct = "onCurrentProduct" />
      <ProductTable :products="products"/>
    </v-app>
  </div>
</template>
<script>


export default {
  icons: {
    iconfont: "mdi",
  },
  props: ["products"],

  data: () => ({
    snackbar:false,
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
