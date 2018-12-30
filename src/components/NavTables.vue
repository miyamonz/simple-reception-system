<template>
  <b-tabs v-model="activeTab" size="is-large" type="is-toggle" expanded>
    <b-tab-item label="配布中">
      <NavMain/>
    </b-tab-item>

    <b-tab-item label="不在">
      <NavAbsence/>
    </b-tab-item>

    <b-tab-item icon="trash-alt">
      <template slot="header">
        <b-icon icon="trash-alt" size="is-small"></b-icon>
      </template>
      <NavDone/>
    </b-tab-item>
  </b-tabs>
</template>
<script>
import NavMain from "@/components/NavMain.vue";
import NavAbsence from "@/components/NavAbsence.vue";
import NavDone from "@/components/NavDone.vue";
export default {
  name: "NavTables",
  components: { NavMain, NavAbsence, NavDone },
  computed: {},
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
