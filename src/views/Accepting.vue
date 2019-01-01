<template>
  <div id="accepting" >
    <div class="column">
      <h2 class="title">診察開始と終了</h2>
      {{accepting}}
      <br>
      <div>
        <button class="button is-primary" :disabled=" accepting" @click="set(true)"> 開始する </button>
        <br>
        <br>
        <button class="button is-primary" :disabled="!accepting" @click="set(false)"> 停止する </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    accepting() {
      return this.$store.state.accepting;
    }
  },
  methods: {
    set(b) {
      this.$store.commit("setAccepting", b);
    }
  }
};
</script>
<style>
</style>
