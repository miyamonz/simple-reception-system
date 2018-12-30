import { CALLED, ABSENCE, REMOVED } from "./types";

/*  eslint-disable no-unused-vars */
export default {
  filterState: state => val => {
    return state.cards.filter(({ state }) => val === state);
  },
  numbers: state => {
    return state.cards.map(({ id }) => id);
  },
  max: (state, { numbers }) => {
    return numbers.reduce((a, b) => (a > b ? a : b), 0);
  },
  current(state, { numbers }) {
    if (numbers.length === 0) return 0;
    return Math.max(...numbers);
  },
  called(state, getters) {
    return getters.filterState(CALLED);
  },
  absence(state, getters) {
    return getters.filterState(ABSENCE);
  },
  removed(state, getters) {
    return getters.filterState(REMOVED);
  },
  willCalling(state, { called }) {
    return called.filter(c => c.id > state.calling);
  }
};
