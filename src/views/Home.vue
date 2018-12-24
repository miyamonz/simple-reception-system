<template>
  <div class="home">
    <b-tabs v-model="activeTab" size="is-large" type="is-boxed">
      <b-tab-item label="呼出中">
        <b-table 
          class="container"
          :data="called" 
          :columns="columns" 
          :mobile-cards="false"
          :loading="$store.state.waitingDataSync"
        >

        </b-table>
      </b-tab-item>

      <b-tab-item label="不在">
      </b-tab-item>

      <b-tab-item label="x">
        There is no music in the nightingale.
      </b-tab-item>

    </b-tabs>
  </div>
</template>

<script>
const columns = [
  {
    field: "id",
    label: "ID",
    width: "40",
    numeric: true
  },
  {
    field: "detail",
    label: "Detail"
  }
];
export default {
  name: "home",
  components: {},
  computed: {
    called() {
      const cards = this.$store.getters.called;
      return cards.map(key => ({
        id: key
      }));
    }
  },
  data() {
    return {
      activeTab: 0,
      columns
    };
  }
};
</script>
