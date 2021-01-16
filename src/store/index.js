import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyRates: {
      type: Array,
    },
    isLoaded: false,
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  },
});
