<template>
  <div>
    <b-input
      type="textarea" 
      v-model="comment"
      :disabled="sending || loading"
      :loading="sending || loading"
      rows="3"
      >
    </b-input>
      <div class="buttons is-right"
           style="margin-top: 1rem;"
           >
           <button 
           v-show="!loading"
           class="button is-primary is-large"
           :class=" sending && 'is-loading'"
           :disabled="!isChange"
           @click="send"
           >送信</button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.loading = true;
      await this.$store.dispatch("pull");
      this.comment = this.$store.state.comments[this.type];
      this.loading = false;
    },
    async send() {
      this.sending = true;
      await this.$store.dispatch("setComment", {
        comment: this.comment,
        type: this.type
      });
      this.$toast.open("コメントを更新します");
      this.sending = false;
    }
  },
  computed: {
    isChange() {
      return this.comment !== this.$store.state.comments[this.type];
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
