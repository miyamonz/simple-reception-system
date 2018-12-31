<template>
  <section style="position: relative">
    <CardTable :cards.sync="cards"  class="bottom-offset">
      <div slot-scope="{id}" >
        <button
          v-if="$store.getters.doneCalling.some(c => c.id === id)"
          class="button"
          @click="toAbsence(id)">
          不在に移動
        </button>
      </div>
    </CardTable>
    <CallingTag />
    <OperationView class="fix-bottom" />
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
import CallingTag from "@/components/CallingTag.vue";
import OperationView from "@/components/OperationView.vue";

export default {
  components: { CardTable, CallingTag, OperationView },
  computed: {
    cards: {
      get() {
        return this.$store.state.cards.main;
      },
      set(arr) {
        this.$store.commit("setCardsToMain", arr);
      }
    }
  },
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
