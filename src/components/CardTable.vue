<template>
  <b-table 
    class="container"
    :striped="true"
    :data="data" 
    :mobile-cards="false"
    :loading="$store.state.waitingDataSync"
    :default-sort="['id', 'desc']"
    >
    <template slot-scope="props">
      <b-table-column field="id" label="ID" sortable>
        <h3 class="title">
          {{ props.row.id }}
        </h3>
      </b-table-column>

    <b-table-column field="detail" label="Detail" style="text-align:right">
      <button
        class="button is-medium is-primary"
        @click="toAbsence(props.row.id)">
        不在にする
        {{type(props.row.id)}}
      </button>
    </b-table-column>

    </template>

  </b-table>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    type(t) {
      return t;
    },
    toAbsence(id) {
      this.$snackbar.open({
        message: `不在にしています${id}`,
        queue: false
      });
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
