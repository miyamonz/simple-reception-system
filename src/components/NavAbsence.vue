<template>
  <CardTable :data="$store.getters.absence">
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
export default {
  components: { CardTable },
  methods: {
    toRemoved(id) {
      this.$store.dispatch("toRemoved", id);
      this.$toast.open({
        message: `${id}を削除しました`,
        queue: false
      });
    }
  }
};
</script>
