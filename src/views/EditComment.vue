<template>
  <div id="edit-comment" >
    <div class="column">
      <b-field label="コメントの編集">
        <b-input type="textarea" 
          v-model="comment"
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
    //ここおかしい　mountedはぺーじかえることによばれるから
    //初期値の問題とかと同時に解決したい
    this.loading = true;
    this.$store.watch(
      state => state.comment,
      newVal => {
        this.comment = newVal;
        this.loading = false;
      }
    );
  },
  methods: {
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
      comment: this.$store.state.comment,
      loading: false,
      sending: false
    };
  }
};
</script>
