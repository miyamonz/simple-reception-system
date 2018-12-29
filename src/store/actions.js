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
    const data = await pullCards();
    console.log(data);
    Object.assign(state, data);
    state.waitingDataSync = false;
  },
  push: async ({ state }) => {
    state.waitingDataSync = true;
    await pushCards(state);
    state.waitingDataSync = false;
  },

  set: async ({ commit }, payload) => {
    commit("set", payload);
  },

  reset: async ({ commit }) => {
    commit("reset");
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

  addNext: async ({ getters, commit }) => {
    const number = getters.max + 1;
    commit("set", { number, to: CALLED });
  },

  setComment: async ({ commit }, c) => {
    commit("setComment", c);
  }
};
