// import { pullCards, pushCards } from "@/api";
const pushCards = async data => {
  const body = JSON.stringify(data);

  const res = await fetch("/api/index.php", {
    method: "POST",
    body
  });
  const text = await res.text();
  console.log(text);
  return text;
};

import { CALLED, ABSENCE, REMOVED } from "./types.js";
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
    await pushCards(state.cards);
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
  },

  toAbsence: async ({ commit }, number) => {
    commit("set", { number, to: ABSENCE });
  },
  toCalled: async ({ commit }, number) => {
    commit("set", { number, to: CALLED });
  },
  toRemoved: async ({ commit }, number) => {
    commit("set", { number, to: REMOVED });
  },

  addNext: async ({ getters, commit, dispatch }) => {
    let number = getters.max + 1;
    commit("set", { number, to: CALLED });

    await dispatch("push");
  }
};
