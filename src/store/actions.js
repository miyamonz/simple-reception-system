import { pushState, pullState } from "@/api";
import { CALLED, ABSENCE, REMOVED } from "./types.js";

export default {
  pull: async ({ state }) => {
    state.waitingDataSync = true;
    const data = await pullState();
    Object.assign(state, data);
    state.waitingDataSync = false;
  },
  push: async ({ state }) => {
    state.waitingDataSync = true;
    await pushState(state);
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
