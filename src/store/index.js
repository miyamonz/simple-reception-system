import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  //外でpullしてここにいれるといいかもしれない
  state: {
    // { id: Number }
    cards: {
      main: [],
      absence: [],
      done: []
    },
    calling: 0,
    comment: "",
    drag: false,
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

export default store;
