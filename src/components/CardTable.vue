<template>
  <b-table 
    class="container"
    :striped="true"
    :data="data" 
    :columns="columns" 
    :mobile-cards="false"
    :loading="$store.state.waitingDataSync"
    >

  </b-table>
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
  props: ["data"],
  data() {
    return {
      columns
    };
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
