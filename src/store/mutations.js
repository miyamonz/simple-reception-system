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
    //なんか挙動がおかしい
    //おそらく、vueのデータバインディングはオブジェクトごとに__overserverみたいなのいれてやっている
    //ここで差し替えると追跡ができなくなる
    //keyの差集合をみるとか、やりようはある cardのリセットだけをやるとか
    //あとでやろう
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
  setCalled(state, num) {
    const now = Math.floor(new Date().getTime() / 1000);
    const card = state.cards.main.find(c => c.id === num);
    if (!card) return;
    Vue.set(card, "called", now);
  },
  setWillRemove(state, { id, value = true }) {
    const card = state.cards.main.find(c => c.id === id);
    if (!card) return;
    Vue.set(card, "willRemove", value);
  },
  setHuzai(state, num) {
    Vue.set(state.cards.main.find(c => c.id === num), "huzai", true);
  },
  setAccepting(state, b) {
    state.accepting = b;
  },
  setDrag(state, b) {
    state.drag = b;
  }
};
