import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // { id: Number, state: string }
    cards: [],
    comment: "",
    waitingDataSync: false
  },
  mutations: {
    set(state, { number, to }) {
      const newCards = [...state.cards];
      const already = newCards.find(c => c.id === number);
      if (already) {
        already.state = to;
      } else {
        newCards.push({ id: number, state: to });
      }
      state.cards = newCards;
    },
    /*
     * そもそも要件的にいらないのでは
    delete(state, { number }) {
      const newCards = [...state.cards];
      state.cards = newCards.filter(c => c.id !== number);
    },
    */
    reset(state) {
      state.cards = [];
    }
  },
  getters,
  actions
});
