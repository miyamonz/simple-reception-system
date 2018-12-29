import axios from "axios";

const pushCards = async data => {
  const res = await axios.post("/api/", data);
  console.log(res.statusText, res.data);
  return res.data;
};

const pullCards = async () => {
  const ts = Math.floor(new Date().getTime() / 1000);
  return axios.get(`/api/?timestamp=${ts}`).then(res => res.data);
};

import { CALLED, ABSENCE, REMOVED } from "./types.js";

export default {
  init: async ({ state }) => {
    state.waitingDataSync = true;
    const cards = await pullCards();
    console.log(cards);
    state.cards = cards;
    state.waitingDataSync = false;
  },
  push: async ({ state }) => {
    state.waitingDataSync = true;
    await pushCards([...state.cards.entries()]);
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
