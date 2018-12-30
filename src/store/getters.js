export default {
  numbers: state => {
    const { main, absence, done } = state.cards;
    const cards = [...main, ...absence, ...done];
    return cards.map(({ id }) => id);
  },
  max: (state, { numbers }) => {
    return numbers.reduce((a, b) => (a > b ? a : b), 0);
  },
  current(state, { numbers }) {
    if (numbers.length === 0) return 0;
    return Math.max(...numbers);
  },
  willCalling(state) {
    return state.cards.main.filter(c => c.id > state.calling);
  }
};
