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
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
//prettier-ignore
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
