<template>
  <CardTable :data="absence">
  <button
    slot-scope="{id}"
    class="button is-danger"
    @click="toRemoved(id)">
    <b-icon icon="trash-alt" size="is-small"></b-icon>
  </button>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });
export default {
  components: { CardTable },
  methods: {
    toRemoved(id) {
      this.$store.dispatch("toRemoved", id);
      this.$snackbar.open({
        message: `${id}を削除しました`,
        queue: false
      });
    }
  },
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
