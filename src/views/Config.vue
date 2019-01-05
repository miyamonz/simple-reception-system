<template>
  <div class="config column">
    <h2 class="title">設定</h2>
    <button class="button is-danger" @click="click">
      カードの消去
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      this.$dialog.confirm({
        title: "カードの消去",
        message: "本当に消去しますか？",
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
