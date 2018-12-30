<template>
  <section>
    <CardTable :data="$store.getters.called" style="margin-bottom: 80px">
      <button
        slot-scope="{id}"
        class="button is-primary"
        @click="toAbsence(id)">
        不在に移動
      </button>
    </CardTable>
    <OperationView />
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
import OperationView from "@/components/OperationView.vue";

export default {
  components: { CardTable, OperationView },
  methods: {
    toAbsence(id) {
      this.$store.dispatch("toAbsence", id);
      this.$toast.open({
        message: `${id}を不在にしました`,
        queue: false
      });
    }
  }
};
</script>
