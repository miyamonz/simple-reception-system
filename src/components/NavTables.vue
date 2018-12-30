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
<style lang="scss">
//bug https://github.com/jgthms/bulma/issues/2171
$navbar-height: 3.25rem;

//tabのspanのheigtと、tabの中のli>aのpaddingをあわせてtabの高さになる
//li > a のpaddingはtopとbottomで0.5em よって1emを引けばいい
//ここでのliは特に指定がないので、親要素のis-largeになるので、$size-largeを引けば良い
$tab-height: $size-large * 1.5 + $size-large; // span と li>a padding top,bottom
$tab-content-height: calc(100vh - #{$navbar-height + $tab-height});

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
}
</style>
