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
    const res = await pushState(state);
    res;
    state.waitingDataSync = false;
  },

  reset: async ({ commit }) => {
    commit("reset");
  },

  toAbsence: async ({ commit }, number) => {
    commit("set", { number, to: ABSENCE });
  },
  toMain: async ({ state, commit }, number) => {
    commit("remove", { id: number });
    const index = state.cards.main.findIndex(c => c.id > number);
    commit("insertAfter", { number, to: MAIN, index });
  },
  toDone: async ({ commit }, number) => {
    commit("set", { number, to: DONE });
  },

  addNext: async ({ getters, commit }) => {
    const number = getters.max + 1;
    commit("set", { number, to: MAIN });
  },

  setComment: async ({ commit }, params) => {
    commit("setComment", params);
  },
  setHuzai: async ({ commit }, num) => {
    commit("setHuzai", num);
    commit("setWillRemove", { id: num, value: false });
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
  callPrev({ dispatch, getters, commit }) {
    const available = getters.doneCalling;
    if (available.length === 0) {
      commit("setCalling", 0);
    } else {
      commit("setCalling", available[available.length - 1].id);
    }
    dispatch("fillCards");
  },
  callNext({ state, dispatch, getters, commit }) {
    commit("setCalled", state.calling);

    const available = getters.willCalling;
    if (available.length === 0) return;
    commit("setCalling", available[0].id);
    dispatch("fillCards");
  },

  async removeOldCards({ dispatch, getters }, till = 5) {
    getters.doneCalling
      .filter(c => !c.huzai)
      .filter((_, i, arr) => i <= arr.length - till)
      .forEach(c => {
        dispatch("toDone", c.id);
      });
  }
};
