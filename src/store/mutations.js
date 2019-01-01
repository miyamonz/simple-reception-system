import Vue from "vue";

import { initialState } from "./index.js";
export default {
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
    const { comments, waitingDataSync } = state;
    Object.keys(state).forEach(key => Vue.delete(state, key));
    const newState = { ...initialState, comments, waitingDataSync };
    Object.assign(state, newState);
  },
  setCardsToMain(state, cards) {
    state.cards.main = cards;
  },
  setCardsToAbsence(state, cards) {
    state.cards.absence = cards;
  },
  setCardsToDone(state, cards) {
    state.cards.done = cards;
  },
  setComment(state, { comment, type }) {
    state.comments[type] = comment;
  },
  setCalling(state, num) {
    state.calling = num;
  },
  setAccepting(state, b) {
    state.accepting = b;
  },
  setDrag(state, b) {
    state.drag = b;
  }
};
