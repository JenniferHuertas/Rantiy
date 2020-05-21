import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prueba1: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindprueba: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('prueba1', db.collection('prueba'))),
  },
  modules: {
  },
});
