import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EditComment from "./views/EditComment.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/config",
      name: "config",
      component: () =>
        import(/* webpackChunkName: "config" */ "./views/Config.vue")
    },
    {
      path: "/edit-comment",
      name: "edit-comment",
      component: EditComment
    }
  ]
});
