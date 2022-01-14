<template>
  <div class="container">
    <v-app id="inspire">
       <Header />
       <ProductTable/>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ProductTable from './components/ProductTable.vue'

export default {
  name: "App",
  components: {
     Header,
     ProductTable
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.v-tabs-bar {
  float: right !important;
}
</style>
