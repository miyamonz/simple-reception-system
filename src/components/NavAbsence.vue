<template>
  <CardTable :cards="$store.state.cards.absence">
  <div slot-scope="{id}" >
    <button
       class="button is-primary"
       style="float: left"
       @click="toMain(id)">
      配布に戻す
    </button>
    <button
       class="button is-danger"
       @click="toDone(id)">
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
    toMain(id) {
      this.$store.dispatch("toMain", id);
      this.$toast.open({
        message: `${id}を配布に戻しました`,
        queue: false
      });
    },
    toDone(id) {
      this.$store.dispatch("toDone", id);
      this.$toast.open({
        message: `${id}を済にしました`,
        queue: false
      });
    }
  }
};
</script>
