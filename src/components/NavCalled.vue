<template>
  <section>
    <CardTable :data="called">
      <button
        slot-scope="{id}"
        class="button is-primary"
        @click="toAbsence(id)">
        不在に移動
      </button>
    </CardTable>
    <div
      class="buttons is-centered"
      style="margin-top: 20px;"
      >
      <button
        class="button is-rounded is-large is-primary"
        @click="addNext"
        >呼出</button>
    </div>
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });

export default {
  components: { CardTable },
  methods: {
    addNext() {
      this.$store.dispatch("addNext");
      this.$snackbar.open({
        message: `追加しました`,
        duration: 1000,
        queue: false
      });
    },
    toAbsence(id) {
      this.$store.dispatch("toAbsence", id);
      this.$snackbar.open({
        message: `${id}を不在にしました`,
        queue: false
      });
    }
  },
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
