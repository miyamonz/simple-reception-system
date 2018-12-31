<template>
  <CardTable :cards.sync="cards">
    <button slot-scope="{id}"
      class="button is-primary"
      @click="toMain(id)">
    戻す
    </button>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
export default {
  components: { CardTable },
  computed: {
    cards: {
      get() {
        return this.$store.state.cards.done;
      },
      set(arr) {
        this.$store.commit("setCardsToDone", arr);
      }
    }
  },
  methods: {
    toMain(id) {
      this.$store.dispatch("toMain", id);
      this.$toast.open({
        message: `${id}を戻しました`,
        queue: false
      });
    }
  }
};
</script>
