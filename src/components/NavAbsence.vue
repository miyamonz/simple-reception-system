<template>
  <CardTable :data="$store.getters.absence">
  <div slot-scope="{id}" >
  <button
    class="button is-primary"
    style="float: left"
    @click="toCalled(id)">
    呼出に戻す
  </button>
  <button
    class="button is-danger"
    @click="toRemoved(id)">
    <b-icon icon="trash-alt" size="is-small"></b-icon>
  </button>
  </div>
  </CardTable>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
export default {
  components: { CardTable },
  methods: {
    toCalled(id) {
      this.$store.dispatch("toCalled", id);
      this.$toast.open({
        message: `${id}を呼出に戻しました`,
        queue: false
      });
    },
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
