<template>
    <v-app id="App">
         <router-view></router-view>
        <router-link to="/product-page"></router-link>
    </v-app>
</template>

<script>
// import Content from './views/Content.vue'
export default {
  name: "App",
  components: {
    //  Content
  },
  data: () => ({
    //
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