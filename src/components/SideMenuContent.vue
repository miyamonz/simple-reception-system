
<template>
  <div style="width: 40vw" >
    <h2>メニュー</h2>
    <SideMenuList :menus="menus" />
  </div>
</template>
<script>
import SideMenuList from "./SideMenuList";
//import sideMenus from "@/sideMenus";

export default {
  data() {
    //let menus = sideMenus.bind(this)();
    return {
      menus: []
    };
  },
  components: {
    SideMenuList
  }
};
</script>
<style scolped>
h2 {
  background: lightgray;
}
</style>
