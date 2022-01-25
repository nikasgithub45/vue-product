import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
// import notifications, { NAMES as notificationsNAMES } from './notifications';
// import videoServiceModule, { NAMES as appNAMES } from './videoServiceModule';

Vue.use(Vuex);
export default new Vuex.Store({
  // namespaced: true,
  state: {
    products:[],
    features:[],
  },
  getters:{
    products: state => state.products,
  },
  mutations: {
     setProducts:(state,product)=>{
       state.products.push(product)
     },
     removeProduct:(state,removeIndex)=>{
      state.products.splice(removeIndex,1)
    },
  },
  actions: {
    setProducts:({commit},product)=>{
      commit("setProducts",product)
    },
    removeProduct:({commit},removeIndex)=>{

      commit("removeProduct",removeIndex)
    },

    renderProducts({commit},product){
      commit("renderProducts",product)
    }
  },
  // plugins: [createPersistedState()],
});
