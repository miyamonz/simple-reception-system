<template>
  <div
    class="operation-view buttons is-centered"
    >
    <button
    class="button is-rounded is-large is-success "
    style=" filter: drop-shadow(5px 5px 1px #444);"
    @click="callNext()"
    >進める</button>
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
