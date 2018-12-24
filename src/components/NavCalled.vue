<template>
  <section>
    <div
      class="buttons is-centered"
      style="margin-top: 20px;"
      >
      <button
        class="button is-rounded is-large is-primary"
        @click="$store.dispatch('addNext')"
        >呼出</button>
    </div>
    <CardTable :data="called">
      <button
        slot-scope="{id}"
        class="button is-primary"
        @click="$store.dispatch('toAbsence', id)">
        不在に移動
      </button>
    </CardTable>
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });

export default {
  components: { CardTable },
  computed: {
    called() {
      const cards = this.$store.getters.called;
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
