<template>
  <div id="edit-comment" >
    <div class="column">
      <b-field label="コメントの編集">
        <b-input type="textarea" 
          v-model="comment"
          :disabled="sending || loading"
          :loading="sending || loading"
          rows="10"
          ></b-input>
      </b-field>
      <div class="buttons is-right">
        <button 
          class="button is-primary"
          :class=" sending && 'is-loading'"
          :disabled="!isChange"
          @click="send"
          >送信</button>
      </div>
      <span v-if="isChange">変更あり</span>
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
