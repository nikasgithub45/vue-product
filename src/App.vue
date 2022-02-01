<template>
  <v-app id="App">
    <router-view />
    <router-link to="/login" />
    <router-link to="/Content" />
    <router-link to="/product-page" />
  </v-app>
</template>

<script>
// import {mapGetters} from 'vuex'
// import Content from './views/Content.vue'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    //     ...mapGetters(['products']),
    // productData(){
    //   return this.products;
    // }
  },
  methods: {

    // onCurrentProduct(currentProduct){
    //   console.log("crudn")
    //   this.products.push(currentProduct)
    // },
  },
};
</script>
