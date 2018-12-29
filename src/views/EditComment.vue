<template>
  <div id="edit-comment" >
    <div class="column">
      <h2 class="title">コメントの編集</h2>
      <b-input
        type="textarea" 
        v-model="comment"
        :disabled="sending || loading"
        :loading="sending || loading"
        rows="10"
        >
      </b-input>
      <div class="buttons is-right">
        <button 
          v-if="!loading && isChange"
          class="button is-primary"
          :class=" sending && 'is-loading'"
          :disabled="!isChange"
          @click="send"
          >送信</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.loading = true;
      await this.$store.dispatch("pull");
      this.comment = this.$store.state.comment;
      this.loading = false;
    },
    async send() {
      this.sending = true;
      await this.$store.dispatch("setComment", this.comment);
      this.$toast.open("コメントを更新しました");
      this.sending = false;
    }
  },
  computed: {
    isChange() {
      return this.comment !== this.$store.state.comment;
    }
  },
  data() {
    return {
      comment: "",
      loading: false,
      sending: false
    };
  }
};
</script>
