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
  created() {
    this.$store.dispatch("init");
  },
  data() {
    return {
      sideMenuOpen: false
    };
  }
};
</script>
<style>
#app {
}
</style>
