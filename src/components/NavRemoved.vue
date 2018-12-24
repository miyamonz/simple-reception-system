<template>
  <CardTable :data="removed">
    <button slot-scope="{id}"
      class="button is-primary"
      @click="$store.dispatch('toRemoved', id)">
    戻す
    </button>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });
export default {
  components: { CardTable },
  computed: {
    removed() {
      const cards = this.$store.getters.removed;
      return cards.map(mapCard);
    }
  }
};
</script>
