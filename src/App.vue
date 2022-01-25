<template>
    <v-app id="App">
         <router-view></router-view>
        <router-link to="/product-page"></router-link>
        <h3></h3>
    </v-app>
</template>

<script>
// import {mapGetters} from 'vuex'
// import Content from './views/Content.vue'
export default {
  name: "App",
  components: {
  },
  data: () => ({
    dialog: false,
  }),
  methods:{
    // onCurrentProduct(currentProduct){
    //   console.log("crudn")
    //   this.products.push(currentProduct)
    // },
  },
  computed: {
    //     ...mapGetters(['products']),
    // productData(){
    //   return this.products;
    // }
  }
};
</script>