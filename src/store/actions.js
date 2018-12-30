import { pushState, pullState } from "@/api";
import { MAIN, ABSENCE, DONE } from "./types.js";

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

  reset: async ({ commit, dispatch }) => {
    commit("reset");
    await dispatch("fillCards");
  },

  toAbsence: async ({ commit }, number) => {
    commit("set", { number, to: ABSENCE });
  },
  toMain: async ({ commit }, number) => {
    commit("set", { number, to: MAIN });
  },
  toDone: async ({ commit }, number) => {
    commit("set", { number, to: DONE });
  },

  addNext: async ({ getters, commit }) => {
    const number = getters.max + 1;
    commit("set", { number, to: MAIN });
  },

  setComment: async ({ commit }, c) => {
    commit("setComment", c);
  },
  fillCards: async ({ dispatch, getters }) => {
    let i = 0;
    let { willCalling } = getters;
    while (willCalling.length <= 3) {
      await dispatch("addNext");
      willCalling = getters.willCalling;
      i++;
      if (i > 200) throw new Error("while loop");
    }
  },
  callNext({ dispatch, getters, commit }) {
    const available = getters.willCalling;
    if (available.length === 0) return;
    commit("setCalling", available[0].id);
    dispatch("fillCards");
  }
};
