import Vue from 'vue'
import Vuex from 'vuex'
import { PostOrderBTree } from '../Models/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arbol: new PostOrderBTree(),
  },
  getters: {
    arbol: function (state){
      return state.arbol;
    }
  },
  mutations: {
    AGREGAR: function(state, payload){
      state.arbol.add(parseInt(payload.dpi), payload)
    },
    DELETE: function(state, payload){
      state.arbol.remove(parseInt(payload.dpi))
    }
  },
  actions: {
    ADDNODE: function({commit}, payload){
      commit('AGREGAR', payload);
    },
    DELETENODE: function({commit}, payload){
      commit('DELETE', payload);
    },
  },
  modules: {
  }
})
