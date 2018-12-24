// import { pullCards, pushCards } from "@/api";
const delay = ms => new Promise(res => setTimeout(res, ms));

const testData = new Map([[1, "HOGE"], [2, "HUG"]]);

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
