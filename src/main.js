import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import Buefy from "buefy";
import sortable from "./sortable.js";

Vue.use(Buefy, { defaultIconPack: "fa" });
Vue.directive("sortable", sortable);

Vue.config.productionTip = false;

(async () => {
  await store.dispatch("pull");
  new Vue({
    store,
    router,
    render: h => h(App, { ref: "app" })
  }).$mount("#app");
})();
