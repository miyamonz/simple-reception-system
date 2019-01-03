<template>
  <div id="accepting" >
    <div class="column">
      <h2 class="title">診察開始と終了</h2>
      <div style="height: 4rem">
        <span v-if="!$store.state.waitingDataSync"> {{accepting ? "診療受付中" : "受付終了"}} </span>
        <span v-else class="button is-text is-loading is-large"></span>
      </div>
      <div>
        <button class="button is-primary" :disabled=" accepting" @click="set(true)"> 開始する </button>
        <br>
        <br>
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
