<template>
  <b-table 
    class="container"
    :striped="true"
    :data="data" 
    :mobile-cards="false"
    :loading="$store.state.waitingDataSync"
    >
    <template slot-scope="props">
      <b-table-column field="id" label="ID" width="65">
        <h3 class="title">
          {{ props.row.id }}
        </h3>
      </b-table-column>

      <b-table-column field="detail" label="Detail" 
        style="text-align:right">
        <slot :id="props.row.id"></slot>
      </b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div v-if="!$store.state.waitingDataSync" class="content has-text-grey has-text-centered">
          <b-icon icon="surprise" size="is-large"></b-icon>
          <p>なし</p>
        </div>
      </section>
    </template>

  </b-table>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    type(t) {
      return t;
    }
  },
  data() {
    return {};
  }
};
</script>
<style>
.table thead {
  visibility: hidden;
}
.table thead tr * {
  padding: 0;
  height: 10px;
}
</style>
