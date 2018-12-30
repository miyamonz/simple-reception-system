<template>
  <div class="operation-view" >
    <div class="buttons is-centered">
      <button
         class="button is-rounded is-large is-success "
         style=" filter: drop-shadow(5px 5px 1px #444);"
         @click="callNext()"
         >進める</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async callNext() {
      await this.$store.dispatch("callNext");
      let { calling } = this.$store.state;
      this.$toast.open({
        message: `${calling}を呼び出しました`,
        duration: 3000,
        queue: false
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.operation-view {
  background: rgba($primary, 0.35);
}

.buttons {
  height: 100%;
}
</style>
