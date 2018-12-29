import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store = new Vuex.Store({
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
    reset(state) {
      state.cards = [];
    },
    setComment(state, comment) {
      state.comment = comment;
    }
  },
  getters,
  actions
});

store.subscribeAction((action, state) => {
  console.log({ action, state });
  if (action.type !== "push" && action.type !== "init") store.dispatch("push");
});
export default store;
