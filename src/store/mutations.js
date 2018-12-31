export default {
  set(state, { number, to }) {
    const toLow = to.toLowerCase();

    const cardKeys = Object.keys(state.cards);
    const existKey = cardKeys.find(key =>
      state.cards[key].some(c => c.id === number)
    );

    if (existKey) {
      //remove
      state.cards[existKey] = state.cards[existKey].filter(
        c => c.id !== number
      );
    }
    state.cards[toLow].push({ id: number });
  },
  reset(state) {
    const { comment, waitingDataSync } = state;
    const newState = {
      cards: {
        main: [],
        absence: [],
        done: []
      },
      calling: 0,
      drag: false,
      comment,
      waitingDataSync
    };
    state = newState;
  },
  setCardsToMain(state, cards) {
    state.cards.main = cards;
  },
  setCardsToAbsence(state, cards) {
    state.cards.absence = cards;
  },
  setCardsToDone(state, cards) {
    state.cards.done = cards;
  },
  setComment(state, comment) {
    state.comment = comment;
  },
  setCalling(state, num) {
    state.calling = num;
  },
  setDrag(state, b) {
    state.drag = b;
  }
};
