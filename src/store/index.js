import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const initialState = {
  cards: {
    main: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    absence: [],
    done: []
  },
  calling: 0,
  accepting: true,
  drag: false
};

const store = new Vuex.Store({
  //外でpullしてここにいれるといいかもしれない
  state: {
    ...initialState,
    comments: {
      today: "",
      always: ""
    },
    waitingDataSync: false
  },
  mutations,
  getters,
  actions
});

store.subscribeAction((action, state) => {
  console.log(action.type, { state });
  if (action.type !== "push" && action.type !== "pull") store.dispatch("push");
});

store.subscribe((mutation, state) => {
  console.log(mutation.type, { state });
  //remove old card
  let ut = Math.floor(new Date().getTime() / 1000);
  let period = 5;

  store.getters.doneCalling
    .filter(c => !c.huzai)
    .filter(c => c.called && c.called + period < ut)
    .forEach(c => {
      store.dispatch("toDone", c.id);
    });
});

export default store;
