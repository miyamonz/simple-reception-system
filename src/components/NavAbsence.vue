<template>
  <CardTable :data="absence">
  <button
    slot-scope="{id}"
    class="button is-danger"
    @click="$store.dispatch('toRemoved', id)">
    <b-icon icon="trash-alt" size="is-small"></b-icon>
  </button>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });
export default {
  components: { CardTable },
  computed: {
    absence() {
      const cards = this.$store.getters.absence;
      return cards.map(mapCard);
    }
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>
