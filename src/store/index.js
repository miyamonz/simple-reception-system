import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  //外でpullしてここにいれるといいかもしれない
  state: {
    // { id: Number }
    cards: {
      main: [],
      absence: [],
      done: []
    },
    calling: 0,
    comment: "",
    waitingDataSync: false
  },
  mutations: {
    set(state, { number, to }) {
      const toLow = to.toLowerCase();

      const cardKeys = Object.keys(state.cards);
      const existKey = cardKeys.find(key =>
        state.cards[key].some(c => c.id === number)
      );

      if (existKey) {
        //remove
        state.cards[existKey] = state.cards[existKey].filter(
          c => c.id !== number
        );
      }
      state.cards[toLow].push({ id: number });
    },
    reset(state) {
      state.cards = {
        main: [],
        absence: [],
        done: []
      };
      state.calling = 0;
    },
    setCardsToMain(state, cards) {
      state.cards.main = cards;
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
