<template>
  <div class="operation-view" >
    <div class="buttons is-centered">
      <button
         class="button is-rounded is-large is-danger is-inverted "
         style=" filter: drop-shadow(5px 5px 1px #444);"
         @click="callPrev()"
         >
          <b-icon icon="caret-up"></b-icon>
         <span> </span>
         戻す</button>
      <button
         class="button is-rounded is-large is-danger "
         style=" filter: drop-shadow(5px 5px 1px #444);"
         @click="callNext()"
         >進める
         <span> </span>
          <b-icon icon="caret-down"></b-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async callPrev() {
      await this.$store.dispatch("callPrev");
      this.$toast.open({
        message: `戻しました`,
        duration: 3000,
        queue: false
      });
    },
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
  background: rgba($dark, 0.15);
}

.buttons {
  height: 100%;
}
</style>
