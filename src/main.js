import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy, { defaultIconPack: "fa" });

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App, { ref: "app" })
}).$mount("#app");
