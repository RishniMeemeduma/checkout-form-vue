import Vue from 'vue'
import Vuex from 'vuex'

import ProductList from './modules/product/index';
import CartItems from './modules/cart/index';
import Checkout from './modules/checkout/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductList,
    CartItems,
    Checkout
  }
})
