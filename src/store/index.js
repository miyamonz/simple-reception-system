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

store.subscribe((mutation, state) => {
  console.log("mutation", mutation.type, state);
  store.dispatch("push");
});

store.subscribeAction((action, state) => {
  console.log("action", action.type, state);
  if (action.type === "callNext") {
    store.dispatch("removeOldCards");
    store.dispatch("registerRemoveOldCard");
  }
});

export default store;
