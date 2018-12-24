<template>
  <div id="app">
    <SideMenu :open.sync="sideMenuOpen" />
    <AppHeader />
    <input type="checkbox"  v-model="sideMenuOpen"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
<style>
#app {
}
</style>
