<template>
  <div id="edit-comment" >
    <div class="column">
      <b-field label="コメントの編集">
        <b-input type="textarea" v-model="comment"></b-input>
      </b-field>
      <div class="buttons is-right">
        <button class="button is-primary"
          :class=" sending && 'is-loading'"
          @click="send"
          >送信</button>
      </div>
      <span v-if="isChange">変更あり</span>
    </div>
  </div>
</template>
<script>
export default {
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
  mounted() {
    this.$store.watch(
      state => state.comment,
      newVal => {
        this.comment = newVal;
        this.loading = false;
      }
    );
  },
  data() {
    return {
      comment: this.$store.state.comment,
      loading: true,
      sending: false
    };
  }
};
</script>
