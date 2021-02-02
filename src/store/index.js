import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import user from './modules/user.js'


Vue.use(Vuex)


let store = new Vuex.Store({
  modules: {
    user
  },
  getters
});

export default store