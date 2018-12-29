<template>
  <div class="config">
    <h1>設定</h1>
    <button class="button is-primary" @click="click">
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
      this.$toast.open("カードを消去しました");
    }
  }
};
</script>
