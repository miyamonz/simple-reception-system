import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // num:
    cards: new Map(),
    waitingDataSync: false
  },
  mutations: {
    set(state, { number, to }) {
      let cards = new Map([...state.cards]);
      cards.set(number, to);
      state.cards = cards;
    },
    delete(state, { number }) {
      let cards = new Map([...state.cards]);
      cards.delete(number);
      state.cards = cards;
    },
    reset(state) {
      let cards = new Map([]);
      state.cards = cards;
    }
  },
  getters,
  actions
});
