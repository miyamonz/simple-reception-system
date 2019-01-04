<template>
  <SideMenuContainer :open="open" @close="close" >
    <div class="sidemenu-container">
      <a v-for="row in links" :key="row.to" 
         @click="row.to ? jump(row.to) : null" >
         <div class="button is-fullwidth is-large">
           {{row.label}}
         </div>
      </a>
    </div>
  </SideMenuContainer>
</template>
<script>
import { SideMenuContainer } from "./components";

const links = [
  { to: "/", label: "Home" },
  { to: "/config", label: "設定" },
  { to: "/edit-comment", label: "コメントの編集" },
  { to: "/accepting", label: "診療開始と終了" }
];
export default {
  props: ["open"],
  name: "SideMenu",
  components: { SideMenuContainer },
  methods: {
    close() {
      this.$emit("update:open", false);
    },
    jump(to) {
      this.$router.push(to);
      this.close();
    }
  },
  data() {
    return { links };
  }
};
</script>
<style lang="scss" scoped>
.sidemenu-container a:nth-child(even) .button {
  background: $light;
}
</style>
