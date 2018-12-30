<template>
  <div
    class="operation-view fix-bottom buttons is-centered"
    >
    <button
    class="button is-rounded is-large is-success "
    style=" filter: drop-shadow(5px 5px 1px #444);"
    @click="addNext"
    >配布</button>
  </div>
</template>
<script>
export default {
  methods: {
    addNext() {
      this.$store.dispatch("addNext");
      this.$toast.open({
        message: `追加しました`,
        duration: 1000,
        queue: false
      });
    }
  }
};
</script>
<style>
.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 40vw;
}
</style>
