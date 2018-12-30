<template>
  <section>
    <CardTable :data="$store.state.cards.main" class="bottom-offset">
      <div slot-scope="{id}" >
        <span class="tag is-warning is-rounded is-large" v-if="id === $store.state.calling">呼出中</span>
        <button
          v-if="id < $store.state.calling"
          class="button is-primary"
          @click="toAbsence(id)">
          不在に移動
        </button>
      </div>
    </CardTable>
    <OperationView class="fix-bottom" />
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

<style lang="scss">
.bottom-offset {
  margin-bottom: $operation-view-height;
}

.fix-bottom {
  position: fixed;
  bottom: $tab-height;
  width: 100vw;
  height: $operation-view-height;
}
</style>
