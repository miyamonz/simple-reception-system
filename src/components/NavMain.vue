<template>
  <section style="position: relative">
    <CardTable :cards.sync="cards"  class="bottom-offset">
      <div slot-scope="{id}" >
        <div v-if="$store.getters.doneCalling.some(c => c.id === id)" >
          <span v-if="getCard(id).huzai">ふざい</span>
        <button v-else 
          class="button"
          @click="$store.dispatch('setHuzai', id)">
          不在へ
        </button>

        <button
          class="button"
          @click="toDone(id)">
          <b-icon icon="trash-alt" size="is-small"></b-icon>
        </button>
        </div>
      </div>
    </CardTable>
    <CallingTag v-if="!$store.state.drag && $store.getters.callingIndex >= 0" />
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
    getCard(id) {
      return this.cards.find(c => c.id === id);
    },
    toDone(id) {
      this.$store.dispatch("toDone", id);
      this.$toast.open({
        message: `${id}をゴミ箱に移動しました`,
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
