import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  //外でpullしてここにいれるといいかもしれない
  state: {
    // { id: Number, state: string }
    cards: [],
    calling: 0,
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
      state.calling = 0;
    },
    setComment(state, comment) {
      state.comment = comment;
    },
    setCalling(state, num) {
      state.calling = num;
    }
  },
  getters,
  actions
});

store.subscribeAction((action, state) => {
  console.log({ action, state });
  if (action.type !== "push" && action.type !== "pull") store.dispatch("push");
});

export default store;
