<template>
  <CardTable :cards.sync="cards">
    <button slot-scope="{id}"
      class="button is-primary"
      @click="$store.dispatch('toRemoved', id)">
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
  }
};
</script>
