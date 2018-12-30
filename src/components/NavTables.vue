<template>
  <b-tabs v-model="activeTab" size="is-large" type="is-toggle" expanded>
    <b-tab-item label="配布中">
      <NavCalled/>
    </b-tab-item>

    <b-tab-item label="不在">
      <NavAbsence/>
    </b-tab-item>

    <b-tab-item icon="trash-alt">
      <template slot="header">
        <b-icon icon="trash-alt" size="is-small"></b-icon>
      </template>
      <NavRemoved/>
    </b-tab-item>
  </b-tabs>
</template>
<script>
import NavCalled from "@/components/NavCalled.vue";
import NavAbsence from "@/components/NavAbsence.vue";
import NavRemoved from "@/components/NavRemoved.vue";
export default {
  name: "NavTables",
  components: { NavCalled, NavAbsence, NavRemoved },
  computed: {},
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
.tabs {
  position: fixed;
  width: 100vw;
  bottom: 0;
}
</style>
