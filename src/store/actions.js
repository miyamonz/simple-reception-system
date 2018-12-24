// import { pullCards, pushCards } from "@/api";
import { CALLED, ABSENCE } from "./types.js";
const delay = ms => new Promise(res => setTimeout(res, ms));

const testData = new Map([
  [1, CALLED],
  [2, ABSENCE],
  [3, ABSENCE],
  [4, ABSENCE],
  [5, ABSENCE],
  [6, ABSENCE],
  [7, ABSENCE]
]);

export default {
  init: async ({ state }) => {
    state.waitingDataSync = true;
    await delay(1000);
    state.cards = testData;
    // state.cards = await pullCards();
    state.waitingDataSync = false;
  },
  push: async ({ state }) => {
    state.waitingDataSync = true;
    // await pushCards(state.cards);
    state.waitingDataSync = false;
  },
  set: async ({ commit, dispatch }, payload) => {
    commit("set", payload);
    await dispatch("push");
  },
  delete: async ({ commit, dispatch }, payload) => {
    commit("delete", payload);
    await dispatch("push");
  },

  reset: async ({ commit, dispatch }) => {
    commit("reset");
    await dispatch("push");
  }
};
