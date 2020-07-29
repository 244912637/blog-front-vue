import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    user,
    settings,
    blog
  },
})

export default store