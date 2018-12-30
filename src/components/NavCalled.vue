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
    <div
      class="buttons is-centered"
      style="position:fixed; bottom: 20px; right: 20px"
      >
      <button
        class="button is-rounded is-large is-success "
        style=" filter: drop-shadow(5px 5px 1px #444);"
        @click="addNext"
        >配布</button>
    </div>
  </section>
</template>
<script>
import CardTable from "@/components/CardTable.vue";

export default {
  components: { CardTable },
  methods: {
    addNext() {
      this.$store.dispatch("addNext");
      this.$toast.open({
        message: `追加しました`,
        duration: 1000,
        queue: false
      });
    },
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
