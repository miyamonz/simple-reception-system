<template>
  <div id="app">
    <SideMenu :open.sync="sideMenuOpen" />
    <AppHeader style="position: sticky; top: 0" />
    <router-view/>
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";
import AppHeader from "./AppHeader.vue";
export default {
  components: { SideMenu, AppHeader },
  data() {
    return {
      sideMenuOpen: false
    };
  }
};
</script>
<style lang="scss">
@import "./main.scss";
@import "~bulma";
@import "~buefy/src/scss/buefy";

* {
  user-select: none;
}
</style>
