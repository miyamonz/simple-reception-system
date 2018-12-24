<template>
  <div class="home">
    <b-tabs v-model="activeTab" size="is-large" type="is-boxed">
      <b-tab-item label="呼出中">
        <div class="buttons is-centered"
            style="margin-top: 20px;"
          >
          <button class="button is-rounded is-large is-primary"
            @click="$store.dispatch('addNext')"
            >呼出</button>
        </div>
        <CardTable :data="called"/>
      </b-tab-item>

      <b-tab-item label="不在">
        <CardTable :data="absence"/>
      </b-tab-item>

      <b-tab-item label="x">
        There is no music in the nightingale.
      </b-tab-item>

    </b-tabs>
  </div>
</template>

<script>
import CardTable from "@/components/CardTable.vue";
const mapCard = key => ({ id: key });
export default {
  name: "home",
  components: { CardTable },
  computed: {
    called() {
      const cards = this.$store.getters.called;
      return cards.map(mapCard);
    },
    absence() {
      const cards = this.$store.getters.absence;
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
<style>
.tab-content {
  padding: 0 !important;
}
</style>
