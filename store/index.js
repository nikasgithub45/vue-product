
import Vue from 'vue';
// import { use } from 'vue/types/umd';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import createPersistedState from 'vuex-persistedstate';
// import notifications, { NAMES as notificationsNAMES } from './notifications';
// import videoServiceModule, { NAMES as appNAMES } from './videoServiceModule';

Vue.use(Vuex);
export default new Vuex.Store({
  // namespaced: true,
  state: {
    failed :true,
    dialog:"",
    userInfo:{},
    userInfoRender: [],
    user: null,
    products: [],
    currentProduct: null,
    editedItem: null,
  },
  getters: {
    currentProduct: state => state.currentProduct,
    products: state => state.products,
    user: state => state.user,
    userInfo: state => state.userInfo
  },
  mutations: {
    setUser: (state, user) => {
      state.dialog = false;
      console.log(state.user)
      state.userInfo = user;
      console.log(state.userInfo)
    //   state.userInfoRender.forEach(function (arrayItem) {
    //      if(arrayItem.name != state.userInfo.nameCheck){
    //        state.dialog = true
    //      }else{
    //          state.userInfoRender.splice(0, state.userInfoRender.length - 1);
    //      }
    // });
    },
    
    setProducts: (state, product) => {
      state.products.push(product)
    },
    removeProduct: (state, removeIndex) => {
      state.products.splice(removeIndex, 1)
    },
    setCurrentProduct: (state, currentProduct) => {
      state.currentProduct = currentProduct
    },
    
    editCurrentProduct: (state, currentProduct) => { 
      console.log(currentProduct, 'fgfgfgfgfg')
      const {
        name,
        mpn,
        category,
        availeble,
        type,
        id
      } = currentProduct
      const indexCurrentProduct = state.products.findIndex((product) => product.id === id)
      state.products[indexCurrentProduct].name = name
      state.products[indexCurrentProduct].mpn = mpn
      state.products[indexCurrentProduct].category = category
      state.products[indexCurrentProduct].availeble = availeble
      state.products[indexCurrentProduct].type = type

      // state.editedIndex = this.products.indexOf(currentProduct);
      // state.editedItem = Object.assign({}, currentProduct);
    },
    // saveEditedProduct: (state) => {
    //   if (state.editedIndex > -1) {
    //     Object.assign(state.products[state.editedIndex], state.editedItem);
    //   } else {
    //     this.products.push(state.editedItem);
    //   }


    // }
  },
  actions: {
    setProducts: ({ commit }, product) => {
      console.log(product, "ehdhsehdhddhdhdh")
      commit("setProducts", product)
    },
    removeProduct: ({ commit }, removeIndex) => {

      commit("removeProduct", removeIndex)
    },

    setCurrentProduct({ commit }, currentProduct) {
      commit("setCurrentProducts", currentProduct)
    },
    editCurrentProduct({ commit }, currentProduct) {
      commit("editCurrentProduct", currentProduct)
    },
    setUser({ commit }, user) {
      commit("setUser", user)
    },
    // saveEditedProduct({ commit }, currentProductId) {
    //   commit("saveEditedProduct", currentProductId)
    // }
  },
  plugins: [createPersistedState()],
});
