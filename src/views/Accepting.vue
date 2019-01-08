<template>
  <div id="accepting" >
    <div class="column">
      <h2 class="title">診察開始と終了</h2>
      <div style="height: 4rem">
        <span v-if="!$store.state.waitingDataSync"> {{accepting ? "診療受付中です" : "受付終了しています"}} </span>
        <span v-else class="button is-text is-loading is-large"></span>
      </div>
      <div>
        <button class="button is-primary is-large" :disabled=" accepting" @click="set(true)"> 開始する </button>
        <br>
        <br>
        <button class="button is-primary is-large" :disabled="!accepting" @click="set(false)"> 停止する </button>

        <p>
        <button v-if="!accepting && !$store.state.waitingDataSync" class="button is-danger" @click="confirmDeleteCards" style="float: right">
          カードの消去
        </button>
        </p>
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
    },
    confirmDeleteCards() {
      this.$dialog.confirm({
        title: "カードの消去",
        message: "カードと今日のコメントを消去します\n本当に消去しますか？",
        cancelText: "キャンセル",
        confirmText: "消去する",
        type: "is-danger",
        onConfirm: this.run
      });
    },
    async run() {
      this.isModalActive = false;
      console.log("run");
      await this.$store.dispatch("reset");
      this.$toast.open("カードを消去します");
      await new Promise(res => setTimeout(res, 1000));
      location.href = location.pathname;
    }
  }
};
</script>
<style>
</style>
