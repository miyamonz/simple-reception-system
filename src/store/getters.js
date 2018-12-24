import { CALLED, ABSENCE, REMOVED } from "./types";

/*  eslint-disable no-unused-vars */
export default {
  filterByValue: state => val => {
    return [...state.cards]
      .filter(([_, _val]) => _val === val)
      .map(([key, val]) => key);
  },
  numbers: state => {
    return [...state.cards].map(([key, val]) => key);
  },
  max: (state, { numbers }) => {
    return numbers.reduce((a, b) => (a > b ? a : b), 0);
  },
  current(state, { numbers }) {
    if (numbers.length === 0) return 0;
    return Math.max(...numbers);
  },
  called(state, getters) {
    return getters.filterByValue(CALLED);
  },
  absence(state, getters) {
    return getters.filterByValue(ABSENCE);
  },
  removed(state, getters) {
    return getters.filterByValue(REMOVED);
  }
};
