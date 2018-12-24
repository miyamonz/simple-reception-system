<template>
  <SideMenuContainer
  :open="open"
  @close="$emit('update:open', false)"
  >
    <SideMenuContent />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </SideMenuContainer>
</template>
<script>
import { SideMenuContainer, SideMenuContent } from "./components";

export default {
  props: ["open"],
  name: "SideMenu",
  components: { SideMenuContainer, SideMenuContent },
  data() {
    return {};
  }
};
/*
  watch: {
    open(e) {
      if (e) this.onOpen();
      else this.onClose();
    }
  },
    getWidth() {
      let cs = getComputedStyle(this.$refs.sidemenu);
      return cs.width;
    }
    onOpen() {
      this.style.transition = `transform 0.5s`;
      this.style.transform = `translateX(${this.getWidth()})`;
    },
    onClose() {
      this.style.transition = `transform 0.5s`;
      this.style.transform = `translateX(0)`;
    }

*/
</script>
