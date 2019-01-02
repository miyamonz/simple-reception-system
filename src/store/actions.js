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

  reset: async ({ commit }) => {
    commit("reset");
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

  setComment: async ({ commit }, params) => {
    commit("setComment", params);
  },
  setHuzai: async ({ commit }, num) => {
    commit("setHuzai", num);
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
  async registerRemoveOldCard({ commit, getters }) {
    let ut = Math.floor(new Date().getTime() / 1000);
    let period = 5;

    getters.doneCalling
      .filter(c => !c.huzai)
      .filter(c => c.called && c.called + period < ut)
      .forEach(c => {
        commit("setWillRemove", c.id);
      });
  },
  async removeOldCards({ dispatch, getters }) {
    getters.doneCalling.filter(c => c.willRemove).forEach(c => {
      dispatch("toDone", c.id);
    });
  }
};
