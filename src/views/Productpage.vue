<template>
  <div id="App">
    <Header />
    <v-container>
      <v-container class="my-5">
        <v-layout column>
          <v-row cols="3">
            <v-card width="2800px" height="200px">
                {{currentProduct}}
            </v-card>
            <v-card width="190px" height="200px">
              There should be picture
            </v-card>
            <v-card width="290px" height="200px" ml="30px">
              <v-col cols="2" md="6">
                <p>In stock</p>
                <p>Min Quantity</p>
                <p>Cost</p>
                <p>List price</p>
              </v-col>
            </v-card>
          </v-row>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import Header from "./Header.vue";
import {mapGetters} from 'vuex';
export default {
  // props:["products"],
  components: {
    Header,
  },
  data: () => ({
    dialog: false,
    renderIndex:''
  }),
  mounted(){
      console.log(this.product)
      // renderIndex = this.products.findIndex(product => product.id === item.id);
  },
  computed:{
     ...mapGetters(['products','currentProduct']),
  },
  methods: {
       
    productData(){
      return this.products;
    },
  },
};
</script>
