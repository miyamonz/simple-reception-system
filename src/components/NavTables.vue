<template>
  <b-tabs v-model="activeTab" size="is-large" type="is-toggle" expanded>
    <b-tab-item label="一覧">
      <NavMain/>
    </b-tab-item>

    <b-tab-item>
      <template slot="header">
          <b-icon icon="trash-alt" size="is-small"></b-icon>
      </template>
      <NavDone/>
    </b-tab-item>
  </b-tabs>
</template>
<script>
import NavMain from "@/components/NavMain.vue";
import NavDone from "@/components/NavDone.vue";
export default {
  name: "NavTables",
  components: { NavMain, NavDone },
  computed: {
    absenceNum() {
      return this.$store.state.cards.absence.length;
    }
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>
<style lang="scss">
.tab-content {
  padding: 0 !important;
  height: $tab-content-height;
}
.tabs {
  position: fixed;
  width: 100vw;
  bottom: 0;
}
.tab-item {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
