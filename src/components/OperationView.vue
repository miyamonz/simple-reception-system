<template>
  <div
    class="operation-view buttons is-centered"
    >
    <button
    class="button is-rounded is-large is-success "
    style=" filter: drop-shadow(5px 5px 1px #444);"
    @click="$store.dispatch('callNext')"
    >進める</button>
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
