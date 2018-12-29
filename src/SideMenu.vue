<template>
  <SideMenuContainer
  :open="open"
  @close="close"
  >
  <div class="container ">
    <div class="">
    <a v-for="(row,i) in links" 
      :key="row.to" 
      @click="click(row.to)"
      >
      <div class="button is-fullwidth is-large" 
          :class="i%2 && 'is-light'"
        >
      {{row.label}}
      </div>
    </a>
    </div>
  </div>
  </SideMenuContainer>
</template>
<script>
import { SideMenuContainer } from "./components";

const links = [
  { to: "/", label: "Home" },
  { to: "/config", label: "設定" },
  { to: "/edit-comment", label: "コメントの編集" }
];
export default {
  props: ["open"],
  name: "SideMenu",
  components: { SideMenuContainer },
  methods: {
    close() {
      this.$emit("update:open", false);
    },
    click(to) {
      this.$router.push(to);
      this.close();
    }
  },
  data() {
    return { links };
  }
};
</script>
